# @eeacms/volto-flourish

[![Releases](https://img.shields.io/github/v/release/eea/volto-flourish)](https://github.com/eea/volto-flourish/releases)
[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-flourish%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-flourish/job/master/display/redirect)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-flourish&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-flourish)

[Volto](https://github.com/plone/volto) add-on

## Features

Flourish integration

#### IMPORTANT! In order to load a Flourish visualization, the eea.api.dataconnector addon needs to be active on the Plone side.
![Flourish Block](./docs/preview.png "Flourish Block")

## Requirements

### Backend

- [Plone](https://plone.org/download)
- [plone.restapi](https://pypi.org/project/plone.restapi/)

### Frontend

- Node.js: `>=22.0.0`

## Installation

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

- If you already have a volto project, just update `package.json`:

  ```JSON
  "dependencies": {
      "@eeacms/volto-flourish": "*"
  }
  ```

   and `volto.config.js`:

   ```JavaScript
   const addons = ['@eeacms/volto-flourish'];
   ```

- If not, create one with Cookieplone, as recommended by the official Plone documentation for Volto 18+:

  ```
  uvx cookieplone project
  cd project-title
  ```

1. Install or update dependencies, then start the project:

   ```
   make install
   ```

   For a Cookieplone project, start the backend and frontend in separate terminals:

   ```
   make backend-start
   make frontend-start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## License

See [LICENSE.md](LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
