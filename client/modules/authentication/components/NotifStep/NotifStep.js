// React
import React, { Component, PropTypes } from 'react';

// MaterialUI Stuff
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

// Style
import { styles } from './NotifStepStyle';

const mockNotifs = [
  'Demandes quotidiennes sur vos trajets',
  'Trajets trouvés',
  'Informations'
];

class NotifStep extends Component {
  constructor(props) {
    super(props);
  }

  handleToggle = (value) => {
    let newChecked = [...this.props.user.notifs];
    const currentIndex = this.props.user.notifs.indexOf(value);

    if (currentIndex !== -1) {
      newChecked.splice(currentIndex, 1);
    } else {
      newChecked.push(value);
    }

    this.handleNotifsChange(newChecked);
  };

  handleNotifsChange = (notifs) => {
    this.props.onNotifsChange(notifs);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <List>
      {mockNotifs.map((value) => (
        <ListItem
          key={value}
          role={undefined}
          onClick={() => this.handleToggle(value)}
          button
          className={classes.listItem}
        >
          <Checkbox
            checked={this.props.user.notifs.indexOf(value) !== -1}
            tabIndex={-1}
            disableRipple
          />
          <ListItemText primary={value} />
        </ListItem>
      ))}
    </List>
      </div>
    );
  }
}

NotifStep.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onNotifsChange: PropTypes.func.isRequired
};

export default withStyles(styles)(NotifStep);
