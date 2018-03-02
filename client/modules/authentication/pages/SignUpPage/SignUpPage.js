// React
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

// MaterialUI Stuff
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

// Components
import InfoStep from '../../components/InfoStep/InfoStep';
import TransportStep from '../../components/TransportStep/TransportStep';
import TravelStep from '../../components/TravelStep/TravelStep';
import NotifStep from '../../components/NotifStep/NotifStep';
import ActivationStep from '../../components/ActivationStep/ActivationStep';

// Style
import { styles } from './SignUpPageStyle';

const mockUserFromCAS = {
  mailUpsud: 'john.doe@u-psud.fr',
  firstname: 'John',
  lastname: 'Doe'
};

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      disabledStep: false,
      user: {
        mail: '',
        ownVehicles: [],
        comTransports: [],
        travels: []
      }
    };
  }

  isNextButtonDisabled = () => {
    let tmpChoice = true;

    switch (this.state.activeStep) {
      case 0: tmpChoice = false;
        break;
      case 1: tmpChoice = (this.state.user.ownVehicles.length === 0 && this.state.user.comTransports.length === 0);
        break;
      default: tmpChoice = true;
    }

    this.handleNextButton(false);
  }

  handleMailChange = (_mail) => {
    this.setState({
      user: {
        ...this.state.user,
        mail: _mail
      }
    });
  }

  handleOwnVehiclesChange = (_ownVehicles) => {
    this.setState({
      user: {
        ...this.state.user,
        ownVehicles: _ownVehicles
      } 
    }, () => this.isNextButtonDisabled());
  }

  handleCommunityTransportsChange = (_comTransports) => {
    this.setState({
      user: {
        ...this.state.user,
        comTransports: _comTransports
      } 
    }, () => this.isNextButtonDisabled());
  }

  handleTravelsChange = (_travels) => {
    this.setState({
      user: {
        ...this.state.user,
        travels: _travels
      }
    }, () => this.isNextButtonDisabled());
  }

  getSteps = () => {
    return ['Valider vos informations', 'Ajouter vos modes de déplacement', 'Ajouter vos trajets', 'Régler vos préférences de notification', 'Activer votre compte'];
  };

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <InfoStep 
          userFromCAS={mockUserFromCAS} 
          user={this.state.user} 
          onMailChange={this.handleMailChange} />;
      case 1:
        return <TransportStep 
          user={this.state.user} 
          onOwnVehiclesChange={this.handleOwnVehiclesChange} 
          onCommunityTransportsChange={this.handleCommunityTransportsChange} />;
      case 2:
        return <TravelStep 
          user={this.state.user}
          onTravelsChange={this.handleTravelsChange} />;
      case 3:
        return <NotifStep />;
      case 4:
        return <ActivationStep />;
      default:
        return 'Unknown step';
    }
  };

  handleNextButton = (val) => {
    this.setState({
      disabledStep: val
    });
  }

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    }, () => this.isNextButtonDisabled());
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    }, () => this.isNextButtonDisabled());
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    }, () => this.isNextButtonDisabled());
  };

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <div>{this.getStepContent(index)}</div>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Retour
                      </Button>
                      <Button
                        variant="raised"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                        disabled={this.state.disabledStep}
                      >
                        {activeStep === steps.length - 1 ? 'Valider' : 'Suivant'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }

}

SignUpPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpPage);
