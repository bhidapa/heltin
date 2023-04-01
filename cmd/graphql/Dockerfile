FROM node:18 as build-stage
LABEL org.opencontainers.image.source https://github.com/bhidapa/heltin

WORKDIR /graphql

# yarn setup
COPY cmd/graphql/.yarn/releases ./.yarn/releases
COPY cmd/graphql/.yarn/plugins ./.yarn/plugins
COPY cmd/graphql/.yarnrc.yml .

# install deps
COPY cmd/graphql/yarn.lock .
COPY cmd/graphql/package.json .
RUN yarn install --immutable

# build
COPY cmd/graphql/tsconfig.json .
COPY cmd/graphql/src .
RUN yarn build

FROM node:18-bullseye-slim

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && \
  # curl for healthchecks
  apt install -y dumb-init curl && \
  rm -rf /var/lib/apt/lists/*

COPY --from=build-stage /graphql/node_modules /opt/graphql/node_modules
COPY --from=build-stage /graphql/build /opt/graphql/dist

# so that we can mount the schema file during development
RUN touch /opt/graphql/dist/schema.graphql

USER node
CMD ["dumb-init", "node", "/opt/graphql/dist"]
