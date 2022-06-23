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
		userID := handleSession(res, req)
		if userID.IsNull() {
			httperr.Unauthorized.ServeHTTP(res, req)
			return
		}

		req = req.WithContext(ContextWithUser(req.Context(), userID.Get()))
		req = golog.AddValueToRequest(req, golog.NewUUIDValue("userID", userID))

		wrappedHandler.ServeHTTP(res, req)
	}
}

func HandlerWithUserIDAsMuxVar(muxVarName string, wrappedHandler http.Handler) http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		userID := handleSession(res, req)
		if userID.IsNull() {
			httperr.Unauthorized.ServeHTTP(res, req)
			return
		}

		mux.Vars(req)[muxVarName] = userID.String()

		req = golog.AddValueToRequest(req, golog.NewUUIDValue("userID", userID))

		wrappedHandler.ServeHTTP(res, req)
	}
}

func handleSession(res http.ResponseWriter, req *http.Request) (userID uu.NullableID) {
	cookie, err := req.Cookie(cookieName)
	if err != nil {
		return uu.IDNull
	}

	parts := strings.Split(cookie.Value, ".")
	if len(parts) != 2 {
		return uu.IDNull
	}
	tentativeSessionID, _ := url.QueryUnescape(parts[0])
	base64Mac, _ := url.QueryUnescape(parts[1])
	if tentativeSessionID == "" || base64Mac == "" {
		return uu.IDNull
	}

	// base64 mac is stored without padding, put it back (https://gist.github.com/catwell/3046205)
	if len(base64Mac)%4 == 2 {
		base64Mac += "=="
	} else if len(base64Mac)%4 == 3 {
		base64Mac += "="
	}

	mac, err := base64.StdEncoding.DecodeString(base64Mac)
	if err != nil {
		return uu.IDNull
	}

	hash := hmac.New(sha256.New, []byte(config.Secret))
	hash.Write([]byte(tentativeSessionID))
	expectedMac := hash.Sum(nil)
	if !hmac.Equal(mac, expectedMac) {
		return uu.IDNull
	}

	sess := new(Session)
	err = db.Conn(req.Context()).QueryRow(`
		select session.* from
		private.session
			inner join private.user on "user".id = session.user_id
		where session.id = $1
		and session.expires_at > now()
		and not "user".disabled
	`, tentativeSessionID).ScanStruct(sess)
	if err != nil {
		if !errors.Is(err, sql.ErrNoRows) {
			log.Error("Error while retrieving session").
				Request(req).
				Err(err).
				Str("sessionID", tentativeSessionID).
				Log()
		}
		return uu.IDNull
	}

	// TODO: check for cookie path mismatch
	if sess.Cookie.Secure && req.TLS == nil {
		return uu.IDNull
	}
	if sess.ExpiresAt.Before(time.Now()) {
		return uu.IDNull
	}

	cookie.MaxAge = sess.Cookie.MaxAge
	cookie.Secure = sess.Cookie.Secure
	cookie.HttpOnly = sess.Cookie.HTTPOnly
	cookie.Path = sess.Cookie.Path
	cookie.SameSite = sess.Cookie.SameSite.HTTPSameSite()
	http.SetCookie(res, cookie)

	// TODO: extend the session expires_at because we're using rolling cookies

	return sess.UserID.Nullable()
}

// Session is the user cookie session stored.
// See database/schema/private/session.sql@private.session
type Session struct {
	ID uu.ID `db:"id,pk"`

	UserID uu.ID          `db:"user_id"`
	Cookie *SessionCookie `db:"cookie"`
	Data   interface{}    `db:"data"`

	ExpiresAt time.Time `db:"expires_at"`

	UpdatedAt time.Time `db:"updated_at"`
	CreatedAt time.Time `db:"created_at"`
}

// SessionCookie is the session cookie and it matches the SessionCookie in cmd/graphql/src/session.ts@SessionCookie
type SessionCookie struct {
	Domain   string   `json:"domain"`
	Path     string   `json:"path"`
	Secure   bool     `json:"secure"`
	MaxAge   int      `json:"maxAge"`
	HTTPOnly bool     `json:"httpOnly"`
	SameSite SameSite `json:"sameSite"`
}

func (v SessionCookie) Value() (driver.Value, error) {
	return json.Marshal(v)
}

func (v *SessionCookie) Scan(value interface{}) error {
	b, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion to []byte failed")
	}
	return json.Unmarshal(b, &v)
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
