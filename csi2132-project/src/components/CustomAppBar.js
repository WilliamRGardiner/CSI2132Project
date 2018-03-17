import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import _ from 'lodash';
import appConstants from '../AppConstants';

//Redux
import NavbarActions from '../redux/actions/NavbarActions';
import AppActions from '../redux/actions/AppActions';

//Components
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

//Icons
import SearchIcon from 'material-ui/svg-icons/action/search';

class CustomAppBar extends Component {
  constructor(props) {
    super(props);
  }

  handleSearch = (searchString) => {
    this.props.store.dispatch(NavbarActions.setSearchString(searchString));
  }

  handlePopoverOpen = (event) => {
    event.preventDefault();
    this.props.store.dispatch(NavbarActions.openPopover(event.currentTarget));
  }

  handlePopoverClose = () => {
    this.props.store.dispatch(NavbarActions.closePopover());
  }

  handlePopoverMenuSelect = (e, item, index) => {
    var value = item.props.value;
    if(value === "logout") this.props.store.dispatch(AppActions.logout());
    else this.props.store.dispatch(NavbarActions.selectPopoverItem(item.props.value));
    this.handlePopoverClose();
  }

  handleSignInOpen = () => {
    this.props.store.dispatch(NavbarActions.openSignInDialog());
  }

  handleSignInClose = () => {
    this.props.store.dispatch(NavbarActions.closeSignInDialog());
  }

  handleSignIn = () => {
    this.props.store.dispatch(AppActions.signIn());
    this.handleSignInClose();
  }

  handleUsernameUpdate = (e,value) => {
    this.props.store.dispatch(NavbarActions.updateUsername(value));
  }

  handlePasswordUpdate = (e,value) => {
    this.props.store.dispatch(NavbarActions.updatePassword(value));
  }

  render() {
    var state = this.props.store.getState();
    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <AutoComplete
              dataSource={state.navbar.dataSource}
              onUpdateInput={_.debounce(this.handleSearch, 2000)}
              onNewRequest={this.handleSearch}
              floatingLabelText="Search"
              style={{paddingBottom: "20px"}}
            />
          </ToolbarGroup>
          <ToolbarGroup>
            { !state.app.user ?
              <FlatButton label="Sign In" primary={true} onClick={this.handleSignInOpen}/> :
              (
                <div>
                  <FlatButton label="Account" primary={true} onClick={this.handlePopoverOpen}/>
                  <Popover
                    open={state.navbar.popoverOpen}
                    anchorEl={state.navbar.popoverAnchor}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                  >
                    <Menu onItemClick={this.handlePopoverMenuSelect}>
                      <MenuItem value={appConstants.PAGES.PROFILE} primaryText="Profile" />
                      <MenuItem value={"logout"} primaryText="Logout" />
                    </Menu>
                  </Popover>
                </div>
              )
            }
          </ToolbarGroup>
        </Toolbar>
        <Dialog
          title="Sign In"
          actions={ [<FlatButton label="Sign In" primary={true} onClick={this.handleSignIn}/>] }
          modal={false}
          open={ state.navbar.signInOpen }
          onRequestClose={ this.handleSignInClose }
        >
          <TextField value={state.navbar.username} floatingLabelText="Username" onChange={this.handleUsernameUpdate}/>
          <TextField value={state.navbar.password} floatingLabelText="Password" onChange={this.handlePasswordUpdate} type="password"/>
          <a onClick={this.handleSignUp}> Sign Up </a>
        </Dialog>
      </div>
    );
  };
}

export default muiThemeable()(CustomAppBar);
