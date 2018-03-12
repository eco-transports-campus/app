// React
import React, { Component, PropTypes } from 'react';

// Lib
// import pull from 'lodash-es/pull';
// TODO use lodash-es instead of lodash
import _ from 'lodash';

// MaterialUI Stuff
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';

// Material Icons
import AddIcon from 'material-ui-icons/Add';

// Components
import AddedTravel from '../AddedTravel/AddedTravel';

// Style
import { styles } from './TravelStepStyle';


class TravelStep extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tmpFrom: '',
      tmpTo: '',
      tmpTravelId: 0,
      tmpTravels: []
    }

    this.handleTravelsChange = this.handleTravelsChange.bind(this);
    this.addTravel = this.addTravel.bind(this);
    this.deleteTravel = this.deleteTravel.bind(this);
  }

  handleTravelsChange = (cb) => {
    this.props.onTravelsChange(this.state.tmpTravels);

    if (cb && typeof cb === 'function') {
      cb();
    }
  };

  handleFromChange = (e) => {
    this.setState({
      tmpFrom: e.target.value
    });
  };

  handleToChange = (e) => {
    this.setState({
      tmpTo: e.target.value
    });
  };

  // todo schema travel
  addTravel = () => {
    let tmpTravel = {
      from: this.state.tmpFrom,
      to: this.state.tmpTo,
      localId: this.state.tmpTravelId
    };

    this.state.tmpTravels.push(tmpTravel);

    this.handleTravelsChange(() => {
      this.setState({
        tmpFrom: '',
        tmpTo: '',
        tmpTravelId: this.state.tmpTravelId + 1
      });
    });
  };

  deleteTravel = (id) => {
    _.remove(this.state.tmpTravels, (t) => {
      return t.localId === id;
    });

    this.handleTravelsChange();
  };

  render() {
    const { classes } = this.props;

    let travelsList = this.props.user.travels.map((travel, index) => {
      return (<AddedTravel key={index} id={index} travel={travel} onDeleteTravel={this.deleteTravel} />);
    });

    return (
      <div>
        <Button 
          variant="fab"
          mini
          disabled={this.state.tmpFrom === '' || this.state.tmpTo === ''}
          color="secondary"
          aria-label="add"
          className={classes.button}
          onClick={this.addTravel}>
          <AddIcon />
        </Button>

        <FormControl className={classes.formControl}>
          <InputLabel>Départ</InputLabel>
          <Input
            value={this.state.tmpFrom}
            onChange={this.handleFromChange}
            className={classes.input}
            inputProps={{
              'aria-label': 'Départ'
            }}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel >Arrivée</InputLabel>
          <Input
            value={this.state.tmpTo}
            onChange={this.handleToChange}
            className={classes.input}
            inputProps={{
              'aria-label': 'Arrivée'
            }}
          />
        </FormControl>

        {travelsList}
      </div>
    );
  }
}

TravelStep.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onTravelsChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(TravelStep);
