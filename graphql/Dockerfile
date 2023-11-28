FROM node:21 as build
LABEL org.opencontainers.image.source https://github.com/bhidapa/heltin

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
RUN yarn workspace graphql build

# only production deps for workspace
RUN yarn workspaces focus graphql --production

FROM node:21-bullseye-slim

RUN apt-get update && \
  # curl for healthchecks
  apt-get install -y dumb-init curl && \
  rm -rf /var/lib/apt/lists/*

COPY --from=build /proj/graphql/node_modules /opt/graphql/node_modules
COPY --from=build /proj/graphql/build /opt/graphql/dist

# so that we can mount the schema file during development
RUN touch /opt/graphql/dist/schema.graphql

USER node
CMD ["dumb-init", "node", "/opt/graphql/dist"]
