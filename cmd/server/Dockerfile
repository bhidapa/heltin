# build web
FROM node:14 as web 

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

# build server
FROM golang:1-alpine as server

WORKDIR $GOPATH/src/github.com/bhidapa/heltin/cmd/server

RUN apk --update --no-cache add git tzdata

COPY go.mod $GOPATH/src/github.com/bhidapa/heltin
COPY go.sum $GOPATH/src/github.com/bhidapa/heltin
RUN go mod download -x;

COPY cmd/server .
RUN set -eux; \
  GOOS=linux GOARCH=amd64 CGO_ENABLED=0 GODEBUG=cgocheck=0 \
  go build -v -a -ldflags='-s -w' -o /heltin-server

RUN rm -r $GOPATH/*

# server
FROM alpine:3

COPY --from=server /usr/share/zoneinfo /usr/share/zoneinfo
COPY --from=server /heltin-server /usr/local/bin/

ENV APP_DIR=/srv/app
COPY --from=web /web/build ${APP_DIR}

ENTRYPOINT ["heltin-server"]
