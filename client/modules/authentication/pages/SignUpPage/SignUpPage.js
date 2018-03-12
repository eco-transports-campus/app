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
        travels: [],
        notifs: []
      }
    };
  };

  isNextButtonDisabled = () => {
    let tmpChoice = true;

    switch (this.state.activeStep) {
      case 0: tmpChoice = false;
        break;
      case 1: tmpChoice = (this.state.user.ownVehicles.length === 0 && this.state.user.comTransports.length === 0);
        break;
      case 2: tmpChoice = (this.state.user.travels.length === 0);
        break;
      case 3: tmpChoice = false;
        break;
      case 4: tmpChoice = false;
        break;
      default: tmpChoice = true;
    }

    this.handleNextButton(tmpChoice);
  };

  // TODO Deal with this function
  getSteps = () => {
    return [
      'Valider vos informations', 
      'Ajouter vos modes de déplacement', 
      'Ajouter vos trajets', 
      'Régler vos préférences de notification', 
      'Vérifier vos informations'];
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
        return <NotifStep 
          user={this.state.user}
          onNotifsChange={this.handleNotifsChange} />;
      case 4:
        return <ActivationStep 
          user={this.state.user} />;
      default:
        return 'Unknown step';
      }
    };

  handleMailChange = (_mail) => {
    this.setState({
      user: {
        ...this.state.user,
        mail: _mail
      }
    });
  };

  handleOwnVehiclesChange = (_ownVehicles) => {
    this.setState({
      user: {
        ...this.state.user,
        ownVehicles: _ownVehicles
      } 
    }, () => this.isNextButtonDisabled());
  };

  handleCommunityTransportsChange = (_comTransports) => {
    this.setState({
      user: {
        ...this.state.user,
        comTransports: _comTransports
      } 
    }, () => this.isNextButtonDisabled());
  };

  handleTravelsChange = (_travels) => {
    this.setState({
      user: {
        ...this.state.user,
        travels: _travels
      }
    }, () => this.isNextButtonDisabled());
  };

  handleNotifsChange = (_notifs) => {
    this.setState({
      user: {
        ...this.state.user,
        notifs: _notifs
      }
    }, () => this.isNextButtonDisabled());
  };

  handleNextButton = (val) => {
    this.setState({
      disabledStep: val
    });
  }

  handleNext = () => {
    if (this.state.activeStep !== this.getSteps().length -1) {
      this.setState({
        activeStep: this.state.activeStep + 1
      }, () => this.isNextButtonDisabled());
    } else {
      this.handleValidation();
    }
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    }, () => this.isNextButtonDisabled());
  };

  handleValidation = () => {
    console.log('Send user : ', this.state.user);
  }

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
      </div>
    );
  }

}

SignUpPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpPage);
