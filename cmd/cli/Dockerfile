# build cli
FROM golang:1.19-alpine as cli
LABEL org.opencontainers.image.source https://github.com/bhidapa/heltin

RUN apk --update --no-cache add git tzdata

WORKDIR $GOPATH/src/github.com/bhidapa/heltin

COPY go.mod .
COPY go.sum .
RUN go mod download -x

COPY pkg ./pkg
COPY cmd/cli ./cmd/cli
RUN set -eux; \
  cd cmd/cli; \
  GOOS=linux GOARCH=amd64 CGO_ENABLED=0 \
  go build -v -o /heltin-cli

# server
FROM alpine:3.16

COPY --from=cli /usr/share/zoneinfo /usr/share/zoneinfo
COPY --from=cli /heltin-cli /usr/local/bin/

ENTRYPOINT ["heltin-cli"]
