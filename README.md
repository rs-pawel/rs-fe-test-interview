# RS Interview
## Repository for interviews with new developers

This is NX monorepo fully typed with typescript.
Libraries:
* `libs/api-interfaces` contains all API interfaces

Applications:
* `apps/api` contains express application which has in-memory database and handles api routes
* `apps/interview` is actual react app with api connectors and react-query preinstalled

# API connectors
Located in `apps/interview/src/app/api`. Basically they are functions that return promise (which resolves to actual response). [See detailed documentation](./docs/index.html)

# Run Dev Server
```
yarn start
```
# Lint
```
yarn lint
```
