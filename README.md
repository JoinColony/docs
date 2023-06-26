# Colony Docs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```
$ npm install
```

## Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The pages are automatically deployed on push of the `main` branch using GitHub pages actions. See [this file](https://github.com/JoinColony/docs/blob/main/.github/workflows/ci.yml).

## Submodule libraries

The docs for the individual libraries (like Colony Network, Colony SDK, etc.) are pulled in via git submodules. Make sure that the individual submodule tags always correspond to a proper release tag of that library.

**To update a library version** (e.g. `colonyJS`)

Go to `vendor/colonyJS` and do a `git checkout v0.6.0` (adjust to the version you want to update to). Then leave to the `docs` main repository directory and do a git commit and push. The docs will then automatically be built and deployed by GitHub actions.

## Contributing

We will review all issues and pull requests posted to this repository. If you notice any mistakes, or feel something is missing, feel free to create an issue to discuss with the team or directly create a pull request with suggestions. Here is a basic workflow to open a pull request:

1. Fork this repository to your own account and clone it (`git clone https://github.com/<YOUR_USERNAME>/docs.git`)
2. Create a docs branch for your changes (`git checkout -b docs/my-doc-changes`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Fix some typos, add chapter about bees'`).
5. Push your changes to your fork (`git push origin docs/my-doc-changes`).
6. Open a pull request to the `main` branch of this repository.

### Online one-click setup for contributing

You can use Gitpod (a free, online, VS Code-like IDE) for contributing. With a single click it will prepare everything you need to build and contribute to the Wiki. Just click on this button and skip step 1 from above.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][gitpod-url]

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[gitpod-url]: https://gitpod.io/#https://github.com/JoinColony/docs
