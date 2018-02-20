// React
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

// MaterialUI Stuff
import { withStyles } from 'material-ui/styles';

// Style
import { styles } from './SamplePageStyle';


class SamplePage extends Component {
  constructor(props) {
    super(props);
	}

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Helmet title="Sample" />
        Sample page - TODO
      </div>
    );
  }
}

SamplePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SamplePage);
