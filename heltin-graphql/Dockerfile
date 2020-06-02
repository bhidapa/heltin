FROM node:13-alpine

COPY ./heltin-graphql/tsconfig.json /heltin-graphql/
COPY ./heltin-graphql/yarn.lock /heltin-graphql/
COPY ./heltin-graphql/package.json /heltin-graphql/
COPY ./heltin-graphql/LICENSE.md /heltin-graphql/
COPY ./heltin-graphql/src /heltin-graphql/

WORKDIR /heltin-graphql/

RUN yarn install --immutable

RUN yarn build

ENV GRAPHILE_TURBO=1

ENTRYPOINT [ "yarn", "start" ]
