// React
import React, { Component, PropTypes } from 'react';

// MaterialUI Stuff
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Hidden from 'material-ui/Hidden';

// Material Icons
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';
import DeleteIcon from 'material-ui-icons/Delete';

// Style
import { styles } from './AddedTravelStyle';


class AddedTravel extends Component {
  constructor(props) {
    super(props);
	}

  deleteTravel = () => {
    this.props.onDeleteTravel(this.props.travel.localId);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.container}>
          <Avatar className={classes.purpleAvatar}>
            {this.props.id + 1}
          </Avatar>

          <div className={classes.place}>
            {this.props.travel.from}
          </div>

          <Hidden smDown>
            <ArrowForwardIcon className={classes.arrow} />
          </Hidden>

          <div className={classes.place}>
            {this.props.travel.to}
          </div>

          <DeleteIcon className={classes.trash} onClick={this.deleteTravel} />

        </div>
      </div>
    );
  }
}

AddedTravel.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  travel: PropTypes.object.isRequired,
  onDeleteTravel: PropTypes.func.isRequired
};

export default withStyles(styles)(AddedTravel);
