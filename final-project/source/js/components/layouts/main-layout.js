import AuthService from '../../utils/AuthService';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { browserHistory } from 'react-router';
import Drawer from 'material-ui/Drawer';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from "material-ui/RaisedButton";
import React, { PropTypes as T } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

injectTapEventPlugin();

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handlePlayGame = this.handlePlayGame.bind(this);
    this.handleTopPlayers = this.handleTopPlayers.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.renderProfile = this.renderProfile.bind(this);
    props.route.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile});
    });
    this.state = {
      open: false,
      profile: props.route.auth.getProfile()
    };
  }

  static contextTypes: {
    router: T.object
  }

  logout(){
    this.props.route.auth.logout();
    browserHistory.push('/login');
  }

  render () {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      });
    }
    return (
      <div className='app'>
        <Toolbar className='header'>
          <ToolbarGroup firstChild={true} className='header--left'>
            <IconButton onTouchTap={this.handleToggle}>
              <MenuIcon />
            </IconButton>
            Countries
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/5d/White_flag_icon.svg' alt='Flag' className='flag-ico'/>
          </ToolbarGroup>
          <ToolbarGroup lastChild={true} className='header--right'>
            { this.renderProfile() }
          </ToolbarGroup>
        </Toolbar>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleHome}>Home</MenuItem>
          <MenuItem onTouchTap={this.handleLogin}>Login</MenuItem>
          <MenuItem onTouchTap={this.handlePlayGame}>Play game</MenuItem>
          <MenuItem onTouchTap={this.handleTopPlayers}>Top players</MenuItem>
        </Drawer>
        <div className='content'>
          {children}
        </div>
      </div>
    );
    }

    getChildContext() {
      return { muiTheme: getMuiTheme(baseTheme) };
    }

    handleToggle () {
      this.setState({open: !this.state.open});
    }

    handleClose () {
      this.setState({open: false});
    }

    handleHome () {
      this.handleClose();
      browserHistory.push("/");
    }

    handlePlayGame () {
      this.handleClose();
      browserHistory.push("/playGame");
    }

    handleTopPlayers () {
      this.handleClose();
      browserHistory.push("/topPlayers");
    }

    handleLogin () {
      this.handleClose();
      browserHistory.push("/login");
    }

    renderProfile() {
      if(this.state.profile.name) {
        return(
          <div>
            {this.state.profile.name}
            <RaisedButton
              primary={true}
              onClick={this.logout.bind(this)}
              className='logout'
            >
              Logout
            </RaisedButton>
          </div>
        );
      }
    }
  }

  MainLayout.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  };

  MainLayout.propTypes = {
    auth: T.instanceOf(AuthService)
  };
