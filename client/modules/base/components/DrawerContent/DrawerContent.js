// React
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// MaterialUI
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

// MaterialUI Components
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

// MaterialUI Ions
import LiveHelpIcon from 'material-ui-icons/LiveHelp';
import StarIcon from 'material-ui-icons/Star';
import DirectionsCarIcon from 'material-ui-icons/DirectionsCar';
import TransferWithinAStationIcon from 'material-ui-icons/TransferWithinAStation';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';
import ShowChartIcon from 'material-ui-icons/ShowChart';
import BugReportIcon from 'material-ui-icons/BugReport';
import HomeIcon from 'material-ui-icons/Home'

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
					<Link to="/home" className = {classes.menuItems}>
						<ListItem button>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary="Accueil" />
						</ListItem>
					</Link>

					<Link to="/sample" className = {classes.menuItems}>
						<ListItem button>
							<ListItemIcon>
								<AccountCircleIcon />
							</ListItemIcon>
							<ListItemText primary="Mon compte" />
						</ListItem>
					</Link>

					<Divider />

					<Link to="/sample" className = {classes.menuItems}>
						<ListItem button>
							<ListItemIcon>
								<DirectionsCarIcon />
							</ListItemIcon>
							<ListItemText primary="Proposer un trajet" />
						</ListItem>
					</Link>

					<Link to="/sample" className = {classes.menuItems}>
						<ListItem button>
							<ListItemIcon>
								<TransferWithinAStationIcon />
							</ListItemIcon>
							<ListItemText primary="Demander un trajet" />
						</ListItem>
					</Link>

					<Link to="/sample" className = {classes.menuItems}>
						<ListItem button>
							<ListItemIcon>
								<StarIcon />
							</ListItemIcon>
							<ListItemText primary="Recommandations" />
						</ListItem>
					</Link>

					<Divider />

					<Link to="/sample" className = {classes.menuItems}>
						<ListItem button>
							<ListItemIcon>
								<ShowChartIcon />
							</ListItemIcon>
							<ListItemText primary="Statistiques" />
						</ListItem>
					</Link>

					<Divider />

					<Link to="/sample" className = {classes.menuItems}>
						<ListItem button>
							<ListItemIcon>
								<BugReportIcon />
							</ListItemIcon>
							<ListItemText primary="Reporter un bug" />
						</ListItem>
					</Link>

					<Link to="/about" className = {classes.menuItems}>
						<ListItem button>
							<ListItemIcon>
								<LiveHelpIcon />
							</ListItemIcon>
							<ListItemText primary="About" />
						</ListItem>
					</Link>
		
					<Link to="/posts" className = {classes.menuItems}>
							<ListItem button>
								<ListItemIcon>
									<StarIcon />
								</ListItemIcon>
								<ListItemText primary="Sample - Posts" />
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
