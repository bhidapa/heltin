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
  GOOS=linux GOARCH=amd64 go build -v -o /heltin-server

# build app
FROM node:21 as app

WORKDIR /proj

# install
COPY .yarn/releases ./.yarn/releases
COPY .yarnrc.yml .
COPY yarn.lock .
COPY package.json .
COPY graphql/package.json ./graphql/package.json
COPY app/package.json ./app/package.json
COPY website/package.json ./website/package.json
RUN yarn install --immutable

# build
COPY graphql ./graphql
COPY app ./app
COPY website ./website
COPY tsconfig.json .
ARG VITE_APP_VER
RUN VITE_APP_VER=$VITE_APP_VER yarn workspace app build

# server
FROM debian:bookworm-slim

# necessary for healthchecks
RUN apt-get update && \
  apt-get install -y dumb-init curl && \
  rm -rf /var/lib/apt/lists/*

COPY --from=server /usr/share/zoneinfo /usr/share/zoneinfo
COPY --from=server /heltin-server /usr/local/bin/

ENV APP_DIR=/srv/app
COPY --from=app /proj/app/build $APP_DIR

CMD ["dumb-init", "heltin-server"]
