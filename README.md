
# Preset

## Continous Integration

[![Build Status](https://travis-ci.org/eco-transports-campus/app.svg?branch=master)](https://travis-ci.org/eco-transports-campus/app)

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
  git clone https://github.com/eco-transports-campus/app.git etc-app
  cd etc-app
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

**Note: We are using `react-router` v2 which is quite old, we should evolve for v4 but the rendering system has been totally changed. It could be pretty tough to refacto. See : https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/migrating.md#link**

## ES6 support

We use babel to transpile code in both server and client with `stage-0` plugin. So, you can use both ES6 and experimental ES7 features.

## Front

### CSS
#### MaterialUI 

MarerialUI v1.0.0 is still in beta but there are so much more features than the v0.20.0 one. 

Lib : `material-ui` 

Latest version doc : https://material-ui-next.com/

#### Icons

For icons we use MaterialUI Icons. 

Lib : `material-ui-icons`

Doc : https://material.io/icons/

### React

The React doc is good, I recommand you to read and try some examples to understand how this works : https://reactjs.org/tutorial/tutorial.html

### ES6

If you are new with ES6 you can read the doc from Mozilla : https://developer.mozilla.org/fr/docs/Web/JavaScript/Nouveaut%C3%A9s_et_historique_de_JavaScript/Support_ECMAScript_2015_par_Mozilla

Also you can try to follow a this useful tutorial : http://ccoenraets.github.io/es6-tutorial/

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
├── config                          // config and env stuff
    ├── blueprints                  // templates for files generator
    ├── mocks                       // data mocks
    └── services                    // apis
├── client                          // front
    ├── modules
        ├── base                    // base stuff : navbar / sidebar / css base / shared components
            ├── __tests__           // unit tests
            ├── components          // react components
            ├── pages               // react pages
            └── ...                 // other folders
        └── ...
    ├── util                        // tools for client
    ├── reducer.js                  // global reducer (React)
    ├── route.js                    // global routing (React)
    ├── store.js                    // store (React)
    └── + other js file
├── server                          // back
    ├── controllers                 // controllers : fonctions CRUD
    ├── routes                      // routing REST
    ├── models                      // mongoose models
        ├── ...                     // model files
        └── __tests__               // tests unitaires
    ├── sockets                     // events etc
    ├── util                        // server tools
    ├── config.js                   // config server
    └── server.js                   // server file
├── node_modules                    // npm
└── + files webpacks/docker/travis/divers.js
```

## Naming

### Client

```
./client/modules/posts/PostActions.js
./client/modules/posts/PostReducer.js
./client/modules/posts/Post.js
./client/modules/posts/PostStyle.js
./client/modules/posts/components/PostComponent1/PostComponent1.js
./client/modules/posts/components/PostComponent1/PostComponent1Style.js
./client/modules/posts/components/PostComponentFunctional.js
```

### Server

```
./server/controllers/post.controller.js
./server/models/post.model.js
./server/routes/post.routes.js
```

# Warnings

### Run

There are warnings because we are using React < v16.0 because of MERN v2.

### Client and Server Markup Mismatch
This warning is visible only on development and totally harmless. This occurs to hash difference in `react-router`. To solve it, react router docs asks you to use `match` function. If we use `match`, `react-hot-reloader` stops working.


# Files Generator

## mern.json
It contains a blueprints array. Each object in it is the config for a generator. A blueprint config contains the name, description, usage, and files array.

A file object contains

1. `blueprint-path` - location of the blueprint file

2. `target-path` - location where the file should be generated

3. `parent-path` - optional parameter, used if you want to generate the file inside an already existing folder in your project.

Also, `target-path` supports [ejs](https://github.com/mde/ejs) and the following variables will be passed while rendering,

1. `name` - `<component-name>` input from user

2. `parent` - in particular special cases where you need to generate files inside an already existing folder, you can obtain this parent variable from the user. A config using that will look like,

3. `helpers` - an helper object is passed which include common utility functions. For now, it contains `capitalize`.

An example blueprint config

```
{
    "name": "component",
    "description": "Generates a classic react component in a module directory",
    "usage": "component <module-name>/<component-name>",
    "files": [
        {
            "blueprint-path": "config/blueprints/component/component.ejs",
            "parent-path": "client/modules/<%= parent %>",
            "target-path": "components/<%= helpers.capitalize(name) %>/<%= helpers.capitalize(name) %>.js"
        }
    ]
}
```

Here, notice the usage. In `<module-name>/<component-name>`, `<module-name>` will be passed as `parent` and `<component-name>` will be passed as `<name>`.

### Blueprint files
Blueprints are basically [ejs](https://github.com/mde/ejs) templates which are rendered with the same three variables(`name`, optional `parent` and `helpers` object) as above.

### Commands

We can use `merng` command to generate module or components

1. `merng component <module-name>/<component-name>` Generates a classic react component in a module directory

1. `merng component-ws <module-name>/<component-name>` Generates a classic react component in a module directory with a styles file

3. `merng component-f <module-name>/<component-name>` Generates a functional react component in a module directory

4. `merng module <module-name>` Generates a module including react components, reducer, action, style & express route, controller, model