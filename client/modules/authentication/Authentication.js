// React
import React, { Component, PropTypes } from 'react';

// MaterialUI Stuff
import { withStyles } from 'material-ui/styles';

// Style
import { styles } from './AuthenticationStyle';

class Authentication extends Component {
  render() {
    return (<div> Authentication </div>);
  }
}

Authentication.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Authentication);
