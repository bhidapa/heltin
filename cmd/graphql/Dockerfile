FROM node:15-alpine as build-stage

WORKDIR /graphql

COPY ./cmd/graphql/LICENSE.md .

# yarn setup
COPY ./web/.yarn/releases ./.yarn/releases
COPY ./web/.yarn/plugins ./.yarn/plugins
COPY ./web/.yarnrc.yml .

# install deps
COPY ./cmd/graphql/yarn.lock .
COPY ./cmd/graphql/package.json .
RUN yarn install --immutable

# build
COPY ./cmd/graphql/tsconfig.json .
COPY ./cmd/graphql/src .
RUN yarn build

FROM node:15-alpine

COPY --from=build-stage /graphql/node_modules /opt/graphql/node_modules
COPY --from=build-stage /graphql/build /opt/graphql/dist
ENV GRAPHILE_TURBO=1
ENTRYPOINT node /opt/graphql/dist
