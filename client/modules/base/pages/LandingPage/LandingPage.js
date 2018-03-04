// React
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

// MaterialUI Stuff
import { withStyles } from 'material-ui/styles';

// Style
import { styles } from './LandingPageStyle';


class LandingPage extends Component {
  constructor(props) {
    super(props);
	}

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Helmet title="Landing" />
        Redirected to : Landing page - TODO
      </div>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);
