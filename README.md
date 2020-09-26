<br>
  <h3 align="center">
    heltin
  </h3>
  <p align="center">
    Robust client registry for individuals receiving mental healthcare services
  </p>
  <p align="center">
    <a href="https://www.docker.com/">Docker</a>
    +
    <a href="https://www.postgresql.org/">Postgres</a>
    +
    <a href="https://graphql.org/">GraphQL</a>
    +
    <a href="https://golang.org/">Go</a>
    +
    <a href="https://www.typescriptlang.org/">TypeScript</a>
    +
    <a href="https://www.graphile.org/postgraphile/">PostGraphile</a>
    +
    <a href="https://webpack.js.org/">Webpack</a>
    +
    <a href="https://reactjs.org/">React</a>
    +
    <a href="http://facebook.github.io/relay/docs/en/thinking-in-relay.html">Relay</a>
  </p>
<br>

# Quick start

1.  Make sure that you have [Docker](https://www.docker.com/products/docker-engine) and [Docker Compose](https://docs.docker.com/compose/install/) installed
2.  Clone this repo using `git clone --depth=1 https://github.com/bhidapa/heltin.git` and cd into it
3.  Run `docker-compose up` to build and start [Postgres](https://www.postgresql.org/) + [PostGraphile](https://www.graphile.org/postgraphile/) + built app served through [nginx](https://www.nginx.com/)<br>
    - Postgres database is exposed at: **[postgres://localhost:5432/heltin](postgres://localhost:5432/heltin)**
    - GraphQL endpoint is located at: **[http://localhost:5000/graphql](http://localhost:5000/graphql)**<br>
      _Explore the schema using [GraphiQL](https://github.com/graphql/graphiql) at: [http://localhost:5000/graphiql](http://localhost:4400/graphiql)_
    - The application is located at: **[http://localhost:6002](http://localhost:6002)**<br>
      _Use `john@doe.com:password` to login_

# Documentation

Detailed documentation coming soon. Until then, happy code digging. 🔬
