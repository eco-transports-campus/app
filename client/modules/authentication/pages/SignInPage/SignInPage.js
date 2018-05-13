// React
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

// MaterialUI Stuff
import { withStyles } from 'material-ui/styles';

// Style
import { styles } from './SignInPageStyle';


class SignInPage extends Component {
  constructor(props) {
    super(props);
	}

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Helmet title="SignIn" />
        SignIn page - TODO
      </div>
    );
  }
}

SignInPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignInPage);
