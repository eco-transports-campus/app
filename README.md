
# Preset

## MongoDB

For MongoDB installation guide see https://docs.mongodb.org/v3.0/installation/

Recommanded GUI (Windows, Linux, MacOs) : Robomongo https://robomongo.org/

## Node

For Node installation see https://nodejs.org/en/download/

`npm` (or `npm3`) is automatically installed with node

# Installation

## Works with (my config)

* MongoDB v3.4.4
* Node v7.10.1
* Npm v4.2.0

## Clone

```
  git clone ???
  cd ???
  npm install
```

## Start

**Note : Please make sure your MongoDB is running (see installation guide)** 

```
  npm start
```

## Available Commands

1. `npm run start` - starts the development server with hot reloading enabled

2. `npm run bs` - bundles the code and starts the production server

3. `npm run test` - start the test runner

4. `npm run watch:test` - start the test runner with watch mode

5. `npm run cover` - generates test coverage report

6. `npm run lint` - runs linter to check for lint errors

App is runnning on port 8000 (http://localhost:8000)

# Docker
There are docker configurations for both development and production.

To run docker for development,
```
docker-compose -f docker-compose-development.yml build
docker-compose -f docker-compose-development.yml up
```

To run docker for production,
```
docker-compose build
docker-compose up
```


# Techno

## MERN (from MERN doc)

Based on MERN http://mern.io/

MERN is a scaffolding tool which makes it easy to build isomorphic apps using Mongo, Express, React and NodeJS. It minimises the setup time and gets you up to speed using proven technologies.

MERN uses express web framework. Our app sits in server.js where we check for NODE_ENV.

If NODE_ENV is development, we apply Webpack middlewares for bundling and Hot Module Replacement.
___

### Server Side Rendering

We use React Router's match function for handling all page requests so that browser history works.

All the routes are defined in `client/routes.js`. React Router renders components according to route requested.



`match` takes two parameters, first is an object that contains routes, location and history and second is a callback function which is called when routes have been matched to a location.

If there's an error in matching we return 500 status code, if no matches are found we return 404 status code. If a match is found then, we need to create a new Redux Store instance.

**Note:** A new Redux Store has populated afresh on every request.

`fetchComponentData` is the essential function. It takes three params: first is a dispatch function of Redux store, the second is an array of components that should be rendered in current route and third is the route params. `fetchComponentData` collects all the needs (need is an array of actions that are required to be dispatched before rendering the component) of components in the current route. It returns a promise when all the required actions are dispatched. We render the page and send data to the client for client-side rendering in `window.__INITIAL_STATE__`.

## ES6 support

We use babel to transpile code in both server and client with `stage-0` plugin. So, you can use both ES6 and experimental ES7 features.

# File Structure

## Webpack Configs

Webpack is used for bundling modules.
* `webpack.config.dev.js` for development 
* `webpack.config.prod.js` for production 
* `webpack.config.server.js` for bundling server prod 
* `webpack.config.babel.js` for server rendering of assets included through webpack [babel-plugin-webpack-loaders](https://github.com/istarkov/babel-plugin-webpack-loaders) 


## Archi

```
etc-app
└── config                          // config and env stuff
    ├── assets                      // pour les lib externes 
    ├── lib                         // nos propres lib d'accès à des API externes pour le calcul de stats ou d'emprunte énergétique par exemple ??
    └── env                         // variables d'environnement
        └── defaults.js             
        └── dev.js                  
        └── prod.js
        └── tests.js
└── client                          // front
    ├── base                        // base stuff : authentification panel / navbar / sidebar / css base
    ├── users                       // page user / reglagages des preferences / etc
        └── pages                   // elements relatifs à la page globale
        └── components              // composants utilisés dans la page
        └── __tests__               // tests unitaires
    ├── trajets                     // demande / proposition trajets / création
    ├── statistiques                // simples requetes de stats
    ├── messagerie                  // front messagerie
└── server
    ├── users                       // gestion des users
        └── controllers             // functions CRUD
        └── routes                  // routing REST
        └── models                  // model mongo de l'objet user
        └── __tests__               // tests unitaires
    ├── trajets                     // gestion des trajets
    ├── statistiques                // gestion des stats
    ├── authentification            // authentification CAS u-psud
    ├── messagerie                  // messagerie gestion
    ├── notifications               // gestion websocktets
        └── controllers/routes/models/tests
        └── sockets                 // gestion des sockets de notifiations (events etc)
    └── map                         // gestion services de map
└── node_modules                    // npm
└── + fichiers webpacks/docker/travis/divers.js
```


<!-- ## Client

Client directory contains all the shared components, routes, modules.

### components
This folder contains all the common components which are used throughout the project.

### index.js
Index.js simply does client side rendering using the data provided from `window.__INITIAL_STATE__`.

### modules
Modules are the way of organising different domain-specific modules in the project. A typical module contains the following
```
.
└── Post
    ├── __tests__                    // all the tests for this module goes here
    |   ├── components               // Sub components of this module
    |   |   ├── Post.spec.js
    |   |   ├── PostList.spec.js
    |   |   ├── PostItem.spec.js
    |   |   └── PostImage.spec.js
    |   ├── pages
    |   |   ├── PostPage.spec.js
    |   |   └── PostViewPage.spec.js
    |   ├── PostReducer.spec.js
    |   └── PostActions.spec.js
    ├── components                   // Sub components of this module
    |   ├── Post.js
    |   ├── PostList.js
    |   ├── PostItem.js
    |   └── PostImage.js
    ├── pages                        // React Router Pages from this module
    |   ├── PostPage
    |   |   ├── PostPage.js
    |   |   └── PostPage.css
    |   └── PostViewPage
    |       ├── PostViewPage.js
    |       └── PostViewPage.css
    ├── PostReducer.js
    └── PostActions.js
```

## Misc

### Importing Assets
Assets can be kept where you want and can be imported into your js files or css files. Those fill be served by webpack in development mode and copied to the dist folder during production.



#### mern.json
It contains a blueprints array. Each object in it is the config for a generator. A blueprint config contains the name, description, usage, and files array. An example blueprint config
```
{
  "name": "dumb-s",
  "description": "Generates a dumb react component in shared components",
  "usage": "dumb-s [component-name]",
  "files": [
    {
      "blueprint-path": "config/blueprints/dumb-component.ejs",
      "target-path": "client/components/<%= helpers.capitalize(name) %>.js"
    }
  ]
}
```

A file object contains

1. `blueprint-path` - location of the blueprint file

2. `target-path` - location where the file should be generated

3. `parent-path` - optional parameter, used if you want to generate the file inside an already existing folder in your project.

Also, `target-path` supports [ejs](https://github.com/mde/ejs) and the following variables will be passed while rendering,

1. `name` - `<component-name>` input from user

2. `parent` - in particular special cases where you need to generate files inside an already existing folder, you can obtain this parent variable from the user. A config using that will look like,
    ```
    {
      "name": "dumb-m",
      "description": "Generates a dumb react component in a module directory",
      "usage": "dumb-m <module-name>/<component-name>",
      "files": [
        {
          "blueprint-path": "config/blueprints/dumb-component.ejs",
          "parent-path": "client/modules/<%= helpers.capitalize(parent) %>",
          "target-path": "components/<%= helpers.capitalize(name) %>/<%= helpers.capitalize(name) %>.js"
        }
      ]
    }
    ```
    Here, notice the usage. In `<module-name>/<component-name>`, `<module-name>` will be passed as `parent` and `<component-name>` will be passed as `<name>`.

3. `helpers` - an helper object is passed which include common utility functions. For now, it contains `capitalize`. If you want to add more, send a PR to [mern-cli](https://github.com/Hashnode/mern-cli).

#### Blueprint files
Blueprints are basically [ejs](https://github.com/mde/ejs) templates which are rendered with the same three variables(`name`, optional `parent` and `helpers` object) as above.

### Caveats

#### FOUC (Flash of Unstyled Content)
To make the hot reloading of CSS work, we are not extracting CSS in development. Ideally, during server rendering, we will be extracting CSS, and we will get a .css file, and we can use it in the html template. That's what we are doing in production.

In development, after all scripts get loaded, react loads the CSS as BLOBs. That's why there is a second of FOUC in development.

#### Client and Server Markup Mismatch
This warning is visible only on development and totally harmless. This occurs to hash difference in `react-router`. To solve it, react router docs asks you to use `match` function. If we use `match`, `react-hot-reloader` stops working.

SOLUTION 2

etc-app
└── config                          // config and env stuff
    ├── assets                      // pour les lib externes 
    ├── lib                         // nos propres lib d'accès à des API externes pour le calcul de stats ou d'emprunte énergétique par exemple ??
    └── env                         // variables d'environnement
        └── defaults.js             
        └── dev.js                  
        └── prod.js
        └── tests.js
└── modules                         // front ET back
    ├── base                        // base stuff : authentification panel / navbar / sidebar / css base
        └── client                  // page user / reglagages des preferences / etc
            └── pages               // elements relatifs à la page globale
            └── components          // composants utilisés dans la page
            └── __tests__           // tests unitaires                        
    ├── users
        └── client                  // page user / reglagages des preferences / etc
            └── pages                   // elements relatifs à la page globale
            └── components              // composants utilisés dans la page
            └── __tests__               // tests unitaires
        └── server
            └── controllers             // functions CRUD
            └── routes                  // routing REST
            └── models                  // model mongo de l'objet user
            └── __tests__               // tests unitaires
    ├── trajets                     // demande / proposition trajets / création
    ├── statistiques                // simples requetes de stats
    ├── messagerie                  // front messagerie
    ├── trajets                     // gestion des trajets
    ├── statistiques                // gestion des stats
    ├── authentification            // authentification CAS u-psud
    ├── messagerie                  // messagerie gestion
    ├── notifications   
        └── client
            └── ...            
        └── server
            └── ...
            └── sockets             // gestion des sockets de notifiations (events etc)
    └── map                         // gestion services de map
└── node_modules                    // npm
└── + fichiers webpacks/docker/travis/divers.js-->