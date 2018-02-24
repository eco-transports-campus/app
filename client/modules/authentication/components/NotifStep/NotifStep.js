// React
import React, { Component, PropTypes } from 'react';

// MaterialUI Stuff
import { withStyles } from 'material-ui/styles';

// Style
import { styles } from './NotifStepStyle';


class NotifStep extends Component {
  constructor(props) {
    super(props);
	}

  render() {
    const { classes } = this.props;

    return (
      <div> Todo </div>
    );
  }
}

NotifStep.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotifStep);
