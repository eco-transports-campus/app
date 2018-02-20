// React
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// MaterialUI
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

// MaterialUI Components
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

// MaterialUI Ions
import IconButton from 'material-ui/IconButton';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import StarIcon from 'material-ui-icons/Star';

// Style
import { styles } from './DrawerContentStyle'; 


class DrawerContent extends Component {
	constructor(props) {
    super(props);
	}

	render() {
		const { classes } = this.props;

		return (
			<div>
				<div className={classes.drawerHeader} />
				<div>
					<Link to="/about" className = {classes.menuItems}>
						<ListItem button>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="About" />
						</ListItem>
					</Link>
		
					<Link to="/posts" className = {classes.menuItems}>
							<ListItem button>
								<ListItemIcon>
									<StarIcon />
								</ListItemIcon>
								<ListItemText primary="Posts" />
							</ListItem>
					</Link>
				</div>
		</div>
		);
	}
}

DrawerContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerContent);
