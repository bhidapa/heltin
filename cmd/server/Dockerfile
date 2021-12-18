# build server
FROM golang:1.17-alpine as server
LABEL org.opencontainers.image.source https://github.com/bhidapa/heltin

RUN apk --update --no-cache add git tzdata

WORKDIR $GOPATH/src/github.com/bhidapa/heltin

COPY go.mod .
COPY go.sum .
RUN go mod download -x

COPY pkg ./pkg
COPY cmd/server ./cmd/server
RUN set -eux; \
  cd cmd/server; \
  GOOS=linux GOARCH=amd64 CGO_ENABLED=0 GODEBUG=cgocheck=0 \
  go build -v -a -ldflags='-s -w' -o /heltin-server

# build web
FROM node:17 as web

WORKDIR /web

COPY web/LICENSE.md .

COPY web/.yarn/releases ./.yarn/releases
COPY web/.yarn/plugins ./.yarn/plugins
COPY web/.yarnrc.yml .

COPY web/yarn.lock .
COPY web/package.json .
RUN yarn install --immutable

COPY web .
RUN yarn build

# server
FROM alpine:3.13

COPY --from=server /usr/share/zoneinfo /usr/share/zoneinfo
COPY --from=server /heltin-server /usr/local/bin/

ENV APP_DIR=/srv/app
COPY --from=web /web/build ${APP_DIR}

ENTRYPOINT ["heltin-server"]
