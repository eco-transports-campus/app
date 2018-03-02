// React
import React, { Component, PropTypes } from 'react';

// MaterialUI Stuff
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import { ListItemText } from 'material-ui/List';
import Select from 'material-ui/Select';
import Checkbox from 'material-ui/Checkbox';

// Style
import { styles } from './TransportStepStyle';

const mockVehicles = [
  'Vélo',
  'Voiture',
  'Camion',
  'Moto'
];

const mockCommunityTransports = [
  'Train',
  'RER',
  'Bus',
  'Pieds',
  'Tram',
  'Métro'
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

class TransportStep extends Component {
  constructor(props) {
    super(props);

    this.handleOwnVehiclesChange = this.handleOwnVehiclesChange.bind(this);
    this.handleCommunityTransportsChange = this.handleCommunityTransportsChange.bind(this);
  }

  handleOwnVehiclesChange = (e) => {
    this.props.onOwnVehiclesChange(e.target.value);
  }

  handleCommunityTransportsChange = (e) => {
    this.props.onCommunityTransportsChange(e.target.value);
  }

  render() {
    const { classes } = this.props;

    return (
      <div> 
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-checkbox">Véhicules</InputLabel>
          <Select
            multiple
            value={this.props.user.ownVehicles}
            onChange={this.handleOwnVehiclesChange}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {mockVehicles.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={this.props.user.ownVehicles.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-checkbox">Transports en commun</InputLabel>
          <Select
            multiple
            value={this.props.user.comTransports}
            onChange={this.handleCommunityTransportsChange}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {mockCommunityTransports.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={this.props.user.comTransports.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

TransportStep.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onOwnVehiclesChange: PropTypes.func.isRequired,
  onCommunityTransportsChange: PropTypes.func.isRequired
};

export default withStyles(styles)(TransportStep);
