// React
import React, { Component, PropTypes } from 'react';

// MaterialUI Stuff
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

// Material Icons
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';
import DeleteIcon from 'material-ui-icons/Delete';

// Style
import { styles } from './AddedTravelStyle';


class AddedTravel extends Component {
  constructor(props) {
    super(props);
	}

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.container}>
          <Avatar className={classes.purpleAvatar}>
            {this.props.travel.id + 1}
          </Avatar>

          <div className={classes.place}>
            {this.props.travel.from }
          </div>

          <ArrowForwardIcon className={classes.arrow} />

          <div className={classes.place}>
            {this.props.travel.to}
          </div>

          <DeleteIcon className={classes.trash} />

        </div>
      </div>
    );
  }
}

AddedTravel.propTypes = {
  classes: PropTypes.object.isRequired,
  travel: PropTypes.object.isRequired
};

export default withStyles(styles)(AddedTravel);
