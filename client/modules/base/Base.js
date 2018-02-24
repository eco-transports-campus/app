// React
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// MaterialUI
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

// MaterialUI Components
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';

// MaterialUI Icons
import NotificationsIcon from 'material-ui-icons/Notifications';
import MailIcon from 'material-ui-icons/Mail';
import ExpandMoreIcon from 'material-ui-icons/Dehaze';

// Style
import { styles } from './BaseStyle';

// Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import DrawerContent from './components/DrawerContent/DrawerContent';

// Page
import LandingPage from './pages/LandingPage/LandingPage';

// Actions
// import { } from './BaseActions';

export class Base extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      sMounted: false,
      isLoggedIn: true,
      mobileOpen: false
    };
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  handleDrawerClose = () => {
    this.setState({ mobileOpen: false });
  };

  render() {
    const { classes } = this.props;

    if (this.state.isLoggedIn) {
      return (
        <div>
          {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
          <div>
            <Helmet
              title="ETC App"
              titleTemplate="%s - ETC App"
              meta={[
                { charset: 'utf-8' },
                {
                  'http-equiv': 'X-UA-Compatible',
                  content: 'IE=edge',
                },
                {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1',
                },
              ]}
            />
  
            <div className={classes.appFrame}>
              <AppBar className={classes.appBar}>
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.navIconHide}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                  <Typography className={classes.typo} variant="title" color="inherit" noWrap>
                    ETC
                  </Typography>
  
                  <Link to="/sample" className = {classes.appBarButton}>
                    <IconButton color="inherit">
                      <NotificationsIcon />
                    </IconButton>
                  </Link>
                  <Link to="/sample" className = {classes.appBarButton}>
                    <IconButton color="inherit">
                      <MailIcon />
                    </IconButton>
                  </Link>
                </Toolbar>
              </AppBar>
  
              <Hidden mdUp>
                <Drawer variant="temporary" open={this.state.mobileOpen} classes={{paper: classes.drawerPaper}} onClick={this.handleDrawerClose} onClose={this.handleDrawerToggle} ModalProps={{keepMounted: true, }}>
                  <DrawerContent />
                </Drawer>
              </Hidden>
  
              <Hidden smDown implementation="css">
                <Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
                  <DrawerContent />
                </Drawer>
              </Hidden>
  
              <div className={classes.content}>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <LandingPage />
    }

  }
}

Base.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Base);
