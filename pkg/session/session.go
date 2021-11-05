package session

import (
	"crypto/hmac"
	"crypto/sha256"
	"database/sql"
	"database/sql/driver"
	"encoding/base64"
	"encoding/json"
	"errors"
	"net/http"
	"net/url"
	"strings"
	"time"

	"github.com/domonda/go-errs"
	"github.com/domonda/go-sqldb/db"
	"github.com/domonda/go-types/uu"
	"github.com/domonda/golog"
	"github.com/gorilla/mux"
	"github.com/ungerik/go-httpx/httperr"
)

func Handler(wrappedHandler http.Handler) http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		userID, userEmail := handleSession(res, req)
		if userID.IsNull() {
			httperr.Unauthorized.ServeHTTP(res, req)
			return
		}

		req = golog.AddValueToRequest(req, golog.NewUUIDValue("userID", userID))
		req = golog.AddValueToRequest(req, golog.NewStringValue("userEmail", userEmail))

		wrappedHandler.ServeHTTP(res, req)
	}
}

func HandlerWithUserIDAsMuxVar(muxVarName string, wrappedHandler http.Handler) http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		userID, userEmail := handleSession(res, req)
		if userID.IsNull() {
			httperr.Unauthorized.ServeHTTP(res, req)
			return
		}

		mux.Vars(req)[muxVarName] = userID.String()

		req = golog.AddValueToRequest(req, golog.NewUUIDValue("userID", userID))
		req = golog.AddValueToRequest(req, golog.NewStringValue("userEmail", userEmail))

		wrappedHandler.ServeHTTP(res, req)
	}
}

func handleSession(res http.ResponseWriter, req *http.Request) (userID uu.NullableID, email string) {
	cookie, err := req.Cookie(cookieName)
	if err != nil {
		return uu.IDNull, ""
	}

	parts := strings.Split(cookie.Value, ".")
	if len(parts) != 2 {
		return uu.IDNull, ""
	}
	sessionID, _ := url.QueryUnescape(parts[0])
	base64Mac, _ := url.QueryUnescape(parts[1])
	if sessionID == "" || base64Mac == "" {
		return uu.IDNull, ""
	}
	sessionID = strings.Replace(sessionID, "s:", "", 1) // prepended by [express-session](https://github.com/expressjs/session/blob/0048bcac451ad867299d404aca94c79cc8bc751d/index.js#L656)

	// base64 mac is stored without padding, put it back (https://gist.github.com/catwell/3046205)
	if len(base64Mac)%4 == 2 {
		base64Mac += "=="
	} else if len(base64Mac)%4 == 3 {
		base64Mac += "="
	}

	mac, err := base64.StdEncoding.DecodeString(base64Mac)
	if err != nil {
		return uu.IDNull, ""
	}

	hash := hmac.New(sha256.New, []byte(config.Secret))
	hash.Write([]byte(sessionID))
	expectedMac := hash.Sum(nil)
	if !hmac.Equal(mac, expectedMac) {
		return uu.IDNull, ""
	}

	sess := new(session)
	err = db.Conn(req.Context()).QueryRow("select sess from private.session where sid = $1 and expire > now()", sessionID).Scan(&sess)
	if err != nil {
		if !errors.Is(err, sql.ErrNoRows) {
			log.Error("error while retrieving session").
				Err(err).
				Str("sessionID", sessionID).
				Log()
		}
		// no rows = no existing session or expired
		return uu.IDNull, ""
	}
	if sess.Cookie.Expires.Before(time.Now()) {
		// expired
		return uu.IDNull, ""
	}
	if sess.Cookie.Secure && req.TLS == nil && req.Header.Get("X-Forwarded-Proto") != "https" {
		// not an https site
		return uu.IDNull, ""
	}

	// parsing and validation done, finally get the user
	err = db.Conn(req.Context()).QueryRow("select id, email from public.user where id = $1", sess.UserID).Scan(&userID, &email, &isSuperAdmin)
	if err != nil {
		if !errors.Is(err, sql.ErrNoRows) {
			log.Error("error while retrieving user for session").
				Err(err).
				Str("sessionID", sessionID).
				Any("session", sess).
				Log()
		}
		return uu.IDNull, ""
	}

	// assign the session data to the cookie and send it back to the client
	cookie.Expires = sess.Cookie.Expires
	cookie.Secure = sess.Cookie.Secure
	cookie.HttpOnly = sess.Cookie.HTTPOnly
	cookie.Path = sess.Cookie.Path
	cookie.SameSite = sess.Cookie.SameSite.HTTPSameSite()
	http.SetCookie(res, cookie)

	return userID, email
}

// check the private.session.sess in database/schema/private/session.sql
type session struct {
	UserID uu.ID `json:"user_id"`
	Cookie struct {
		OriginalMaxAge int       `json:"originalMaxAge"`
		Expires        time.Time `json:"expires"`
		Secure         bool      `json:"secure"`
		HTTPOnly       bool      `json:"httpOnly"`
		Path           string    `json:"path"`
		SameSite       SameSite  `json:"sameSite"`
	} `json:"cookie"`
}

func (sess session) Value() (driver.Value, error) {
	return json.Marshal(sess)
}

func (sess *session) Scan(value interface{}) error {
	b, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion to []byte failed")
	}
	return json.Unmarshal(b, &sess)
}

// SameSite attribute of the Set-Cookie HTTP response header allows you to declare
// if your cookie should be restricted to a first-party or same-site context.
type SameSite string

const (
	// Cookies will only be sent in a first-party context and not be sent along with requests
	// initiated by third party websites.
	SameSiteStrict SameSite = "strict"
	// Cookies are not sent on normal cross-site subrequests (for example to load images
	// or frames into a third party site), but are sent when a user is navigating to the
	// origin site (i.e., when following a link).
	// This is the default cookie value if SameSite has not been explicitly specified in
	// recent browser versions.
	// Note: Lax replaced None as the default value in order to ensure that users have
	// reasonably robust defense against some classes of cross-site request forgery (CSRF)
	// attacks.
	SameSiteLax SameSite = "lax"
	// Cookies will be sent in all contexts, i.e. in responses to both first-party and cross-origin
	// requests. If SameSite=None is set, the cookie Secure attribute must also be set (or the cookie
	// will be blocked).
	SameSiteNone SameSite = "none"
)

func (ss SameSite) HTTPSameSite() http.SameSite {
	if ss == SameSiteStrict {
		return http.SameSiteStrictMode
	}
	if ss == SameSiteLax {
		return http.SameSiteLaxMode
	}
	return http.SameSiteNoneMode
}

// UnmarshalJSON implements encoding/json.Unmarshaler
func (ss *SameSite) UnmarshalJSON(j []byte) error {
	switch strings.ToLower(string(j)) {
	case "true", `"strict"`:
		*ss = SameSiteStrict
		*ss = SameSiteStrict
	case `"lax"`:
		*ss = SameSiteLax
	case "false", `"none"`, "":
		*ss = SameSiteNone
	default:
		return errs.Errorf("invalid cookie sameSite property %q", string(j))
	}
	return nil
}
