# Colony Docs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The pages are automatically deployed on push of the `main` branch using GitHub pages actions. See [this file](https://github.com/JoinColony/docs/blob/main/.github/workflows/ci.yml).

### Submodule libraries

The docs for the individual libraries (like Colony Network, Colony SDK, etc.) are pulled in via git submodules. Make sure that the individual submodule tags always correspond to a proper release tag of that library.

**To update a library version** (e.g. `colonySDK`)

Go to `vendor/colonySDK` and do a `git checkout v0.6.0` (adjust to the version you want to update to). Then leave to the `docs` main repository directory and do a git commit and push. The docs will then automatically be built and deployed by GitHub actions.
