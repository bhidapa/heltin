# build server
FROM golang:1.21 as server
LABEL org.opencontainers.image.source https://github.com/bhidapa/heltin

RUN apt-get update && \
  apt-get install -y tzdata

WORKDIR $GOPATH/src/github.com/bhidapa/heltin

COPY go.mod .
COPY go.sum .
RUN go mod download -x

COPY internal ./internal
COPY server ./server
RUN set -eux; \
  cd server; \
  GOOS=linux GOARCH=amd64 CGO_ENABLED=0 \
  go build -v -o /heltin-server

# build app
FROM node:18 as app

WORKDIR /app

COPY app/.yarn/releases ./.yarn/releases
COPY app/.yarn/plugins ./.yarn/plugins
COPY app/.yarnrc.yml .

COPY app/yarn.lock .
COPY app/package.json .
RUN yarn install --immutable

COPY app .
ARG VITE_APP_VER
RUN VITE_APP_VER=$VITE_APP_VER yarn build

# server
FROM debian:bookworm-slim

# necessary for healthchecks
RUN apt-get update && \
  apt-get install -y dumb-init curl && \
  rm -rf /var/lib/apt/lists/*

COPY --from=server /usr/share/zoneinfo /usr/share/zoneinfo
COPY --from=server /heltin-server /usr/local/bin/

ENV APP_DIR=/srv/app
COPY --from=app /app/build $APP_DIR

CMD ["dumb-init", "heltin-server"]
