import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './Base.css';
import headerStyles from './components/Header/Header.css';
import { Route, IndexRoute } from 'react-router';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Router, browserHistory } from 'react-router';
import About from './pages/AboutPage/AboutPage';

// Import Actions
// import { toggleAddPost } from './BaseActions';
import { switchLanguage } from '../intl/IntlActions';


export class Base extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="ETC App"
            titleTemplate="%s - ETC App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />

          <Header className={headerStyles.header} />

          <div className={styles.container}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Base.propTypes = {
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(Base);
