/* eslint-disable global-require */
// React
import React from 'react';
import { Route } from 'react-router';

// Pages
import Base from './modules/base/Base';
import About from './modules/base/pages/AboutPage/AboutPage';
import Sample from './modules/base/pages/SamplePage/SamplePage';
import SignUp from './modules/authentication/pages/SignUpPage/SignUpPage';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/posts/pages/PostListPage/PostListPage');
  require('./modules/posts/pages/PostDetailPage/PostDetailPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={Base} >
    <Route path="/signup" component={SignUp} />
    <Route path="/home" component={Sample} />
    <Route path="/sample" component={Sample} />
    <Route path="/about" component={About} />

    <Route path="/posts"       
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/posts/pages/PostListPage/PostListPage').default);
        });
      }} 
    />
  </Route>
);
