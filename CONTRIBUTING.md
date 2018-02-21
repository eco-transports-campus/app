# Coding Style

## JS

### Global

**Enforced**

- Detailed [jsDoc](http://usejsdoc.org/)

```js
/**
     * Utility method to call a POST or GET app API request
     *
     * @param {string} verb - The verb of the request (GET, POST, PUT, DELETE)
     * @param {string} route - The API route
     * @param {Object} [params = {}] - The request params OPTIONAL
     * @param {User} [user = null] - The user who makes the request OPTIONAL
     *
     * @returns {Promise} The XHR jQuery Promise
     */
    static request (verb, route, params = {}, user = null) {
        if (user !== null) {
            _assign(params, {'userId': user.id, 'userAccessToken': user.accessToken});
        }

        return $.ajax(
            {
                "url"     : config.app.url + route,
                "type"    : verb,
                "data"    : params,
                "dataType": "json"
            }
        ).promise();
    }
```
- Variables declaration on top
- Use `self` keyword to have `this` context
- JSON syntax with double quotes on keys and values
- String syntax with simple quotes however
- Use [Promises](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) not callback
- Use ES7 `async` / `await` as much as possible
- Use [Lodash](https://lodash.com/docs/4.17.5) functions as much as possible

### ES6

**Enforced**
- Arrows function
- `const` and `lest`
- `import` statetements to requires files
 
    ```js
    import $ from 'jquery';
    import _assign from 'lodash-es/assign';
    import config from './config.js';
    ```
- Import lodash functions as module, no global `_`

## Git process with rebase strategy

Branches names based on [gitflow](https://github.com/nvie/gitflow) model, explained in details [here](http://nvie.com/posts/a-successful-git-branching-model/)

- **master**  => Main master branch holding the current production code
- **develop** => Branch to begin a new feature from
- **feature** => Branches holding all in progress features
- **hotfix**  => Branches holding the hotfixes

### Start working

*Go on develop branch and get the last updates*

`git checkout develop`

`git pull`

*Create your branch from develop*

`git checkout -b feature/my-feature develop`

Branch name must describe the feature purpose and can be anything except `master`, `develop`, `release-*`, or `hotfix-*`

### Work in progress

*Add your work on your branch*

`git add filesName`

`git commit -m "commit message follwing commit message rules below"`

A commit message must start with either `back|front|all` then must be followed by the topic name `(topic):` (can be the feature name) with colons and must be finished by a comment in **LOWERCASE** on the current topic status.

Example: `front(sass-integration): adding a new style for user profile page`

### Work done

*Update your local repository*

`git fetch origin`

*Put your work on top of the develop branch*

`git rebase develop`

*Update the develop branch*

`git checkout develop`

`git pull`

*Pull your work over the develop branch*

`git rebase feature/my-feature`

*Push your work by starting a pull request*

`git push`

*Delete the merged feature branch*

`git branch -d feature/my-feature`
