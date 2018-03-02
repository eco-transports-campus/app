// React
import React, { Component, PropTypes } from 'react';

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
      nbOfTravels: 0
    }

    this.handleTravelsChange = this.handleTravelsChange.bind(this);
    this.addTravel = this.addTravel.bind(this);
  }

  handleTravelsChange = (travel, cb) => {
    console.log(travel);
    let tmpTravels = this.props.user.travels;
    tmpTravels.push(travel);

    this.props.onTravelsChange(tmpTravels);
    cb();
  }

  handleFromChange = (e) => {
    this.setState({
      tmpFrom: e.target.value
    });
  }

  handleToChange = (e) => {
    this.setState({
      tmpTo: e.target.value
    });
  }

  // todo schema travel
  addTravel = () => {
    let tmpTravel = {
      id: this.state.nbOfTravels,
      from: this.state.tmpFrom,
      to: this.state.tmpTo
    };

    this.handleTravelsChange(tmpTravel, () => {
      this.setState({
        tmpFrom: '',
        tmpTo: '',
        nbOfTravels: this.state.nbOfTravels + 1
      });
    });
  }

  render() {
    const { classes } = this.props;

    let travelsList = this.props.user.travels.map((travel) => {
      return (<AddedTravel key={travel.id} travel={travel} />);
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
  onTravelsChange: PropTypes.func.isRequired
};

export default withStyles(styles)(TravelStep);
