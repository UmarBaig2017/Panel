import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink,
  Button
} from "shards-react";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);
    
   
    this.state = {
      visible: false
    };
    this.handleLogout=this.handleLogout.bind(this)
    this.toggleUserActions = this.toggleUserActions.bind(this);
  }
  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }
  handleLogout(e){
      e.preventDefault()
    console.log("ll")
    }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src="https://scontent-sin6-2.cdninstagram.com/vp/ba897beb712bb4f8c1940c89f19441b4/5E429BBB/t51.2885-19/s150x150/53396441_367497184097338_483845318778028032_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com"
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">Umar Baig</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
         { /*<DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="file-manager-list">
            <i className="material-icons">&#xE2C7;</i> Files
          </DropdownItem>
          <DropdownItem tag={Link} to="transaction-history">
            <i className="material-icons">&#xE896;</i> Transactions
    </DropdownItem>
          <DropdownItem divider />*/}
          <DropdownItem tag={Link}   to="/" className="text-danger">
            <i onClick={this.handleLogout} className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
