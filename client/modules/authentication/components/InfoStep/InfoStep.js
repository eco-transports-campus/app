// React
import React, { Component, PropTypes } from 'react';

// MaterialUI Stuff
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';


// Style
import { styles } from './InfoStepStyle';


class InfoStep extends Component {
  constructor(props) {
    super(props);

    this.handleMailChange = this.handleMailChange.bind(this);
  }

  handleMailChange = (e) => {
    this.props.onMailChange(e.target.value);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="amount">Prénom</InputLabel>
          <Input
            value={this.props.userFromCAS.firstname}
            className={classes.input}
            disabled
            inputProps={{
              'aria-label': 'Prénom',
            }}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="amount">Nom</InputLabel>
          <Input
            value={this.props.userFromCAS.lastname}
            className={classes.input}
            disabled
            inputProps={{
              'aria-label': 'Nom',
            }}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="amount">Mail U-psud</InputLabel>
          <Input
            value={this.props.userFromCAS.mailUpsud}
            className={classes.input}
            disabled
            inputProps={{
              'aria-label': 'Mail U-psud',
            }}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="amount">Mail Personnel</InputLabel>
          <Input
            value={this.props.user.mail}
            onChange={this.handleMailChange}
            className={classes.input}
            inputProps={{
              'aria-label': 'Mail personnel',
            }}
            placeholder="Facultatif"
          />
        </FormControl>

      </div>
    );
  }
}

// TODO function callback ?
InfoStep.propTypes = {
  classes: PropTypes.object.isRequired,
  userFromCAS: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoStep);
