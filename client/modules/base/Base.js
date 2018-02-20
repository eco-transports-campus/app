import React, { Component, PropTypes } from 'react';

// Import Style
// import baseStyle from './BaseStyle';
import { Route, IndexRoute } from 'react-router';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import DrawerContent from './components/DrawerContent/DrawerContent';

import { Router, browserHistory } from 'react-router';

// MaterialUI stuff
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';

// MaterialUI Icons
import QuestionAnswerIcon from 'material-ui-icons/QuestionAnswer';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import FeedbackIcon from 'material-ui-icons/Feedback';
import ExpandMoreIcon from 'material-ui-icons/Dehaze';

// Import Actions
// import { } from './BaseActions';

const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
    
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'fixed',
    marginLeft: 240,
    width: '100%',
    zIndex: 1500,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: 240,
      position: 'fixed',
      height: '100vh',
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 240,
    },
  },
  typo :{
    flex: 1,
    paddingLeft: 20,
  },
});

export class Base extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }
  
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes } = this.props;

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

                <IconButton color="inherit">
                  <QuestionAnswerIcon />
                </IconButton>
                <IconButton color="inherit">
                  <FeedbackIcon />
                </IconButton>
              </Toolbar>
            </AppBar>

            <Hidden mdUp>
              <Drawer variant="temporary" open={this.state.mobileOpen} classes={{paper: classes.drawerPaper}} onClose={this.handleDrawerToggle} ModalProps={{keepMounted: true, }}>
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
  }
}

Base.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Base);
