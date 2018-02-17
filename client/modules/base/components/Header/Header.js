import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';

// Material UI
import { withStyles } from 'material-ui/styles';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, IndexRoute } from 'react-router';


import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import FeedbackIcon from 'material-ui/svg-icons/action/feedback';
import QuestionAnswerIcon from 'material-ui/svg-icons/action/question-answer';
import ExpandMoreIcon from 'material-ui/svg-icons/image/dehaze';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      open: false
    };
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title = "ETC"
            iconElementLeft = {
              <IconButton>
                <ExpandMoreIcon />
              </IconButton>
            }
            onLeftIconButtonClick	= {this.handleToggle}
            iconElementRight = {
              <div>
                <IconButton>
                  <FeedbackIcon />
                </IconButton>
                <IconButton>
                  <QuestionAnswerIcon />
                </IconButton>
              </div>
            }
            className = {styles.appBarStyle}
          />

          <Drawer open={this.state.open} docked={false} width={300} onRequestChange={(open) => this.setState({open})}>
            <AppBar title="ETC" showMenuIconButton={false} className = {styles.appBarStyle} />
            <MenuItem className = {styles.menuTopic} disabled={true} >Infos</MenuItem>
            
            <Link to="/about" onClick={() => this.handleClose()}>
              <MenuItem leftIcon = {
                <ExpandMoreIcon />
              } className = {styles.menuItem}>About</MenuItem>
            </Link>
            <Link to="/faq" onClick={() => this.handleClose()}>
              <MenuItem leftIcon = {
                <ExpandMoreIcon />
              } className = {styles.menuItem}>FAQ</MenuItem>
            </Link>
            
            <MenuItem className = {styles.menuTopic} disabled={true} >Sample</MenuItem>
            <Link to="/posts" onClick={() => this.handleClose()}>
              <MenuItem leftIcon = {
                <ExpandMoreIcon />
              } className = {styles.menuItem}>Posts</MenuItem>
            </Link>
          </Drawer>
        </div>
      </ MuiThemeProvider>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object,
};