// React
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

// MaterialUI
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

// Style
import { styles } from './AboutPageStyle'; 


class AboutPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
          <Helmet title="About" />
          AboutPage
      </div>
    );
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutPage);

