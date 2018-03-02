// React
import React, { Component, PropTypes } from 'react';

// MaterialUI Stuff
import { withStyles } from 'material-ui/styles';

// Style
import { styles } from './TravelStepStyle';


class TravelStep extends Component {
  constructor(props) {
    super(props);
	}

  render() {
    const { classes } = this.props;

    return (
      <div>  
        
      </div>
    );
  }
}

TravelStep.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TravelStep);
