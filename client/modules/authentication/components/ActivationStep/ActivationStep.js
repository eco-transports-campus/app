// React
import React, { Component, PropTypes } from 'react';

// MaterialUI Stuff
import { withStyles } from 'material-ui/styles';

// Style
import { styles } from './ActivationStepStyle';


class ActivationStep extends Component {
  constructor(props) {
    super(props);
	}

  render() {
    const { classes } = this.props;

    return (
      <div>
        Votre profil est complété ! Vérifier vos informations puis validez votre inscription.
      </div>
    );
  }
}

ActivationStep.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withStyles(styles)(ActivationStep);
