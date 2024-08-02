# volto-flourish

[![Releases](https://img.shields.io/github/v/release/eea/volto-flourish)](https://github.com/eea/volto-flourish/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-flourish%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-flourish/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-flourish-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-flourish-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-flourish-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-flourish-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-flourish-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-flourish-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-flourish-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-flourish-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-flourish%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-flourish/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-flourish-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-flourish-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-flourish-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-flourish-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-flourish-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-flourish-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-flourish-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-flourish-develop)


[Volto](https://github.com/plone/volto) add-on

## Features

Demo GIF

## Getting started

### Try volto-flourish with Docker

      git clone https://github.com/eea/volto-flourish.git
      cd volto-flourish
      make
      make start

Go to http://localhost:3000

### Add volto-flourish to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-flourish"
   ],

   "dependencies": {
       "@eeacms/volto-flourish": "*"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --canary --addon @eeacms/volto-flourish
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-flourish/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-flourish/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-flourish/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
 (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-addon-template/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
