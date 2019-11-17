import { EventEmitter } from "events";

import Dispatcher from "./dispatcher";
import Constants from "./constants";
import getSidebarNavItems from "../data/sidebar-nav-items";
import getSidebarNavItemsTeacher from "../data/sidebar-nav-itemsTeacher";
import constants from "./constants";
import * as actions from "./actions"
let _store = {
  menuVisible: false,
  navItems: getSidebarNavItems(),
  navItemsTeacher: getSidebarNavItemsTeacher(),
  loginSatus: false,
  loginEmail:""


};

class Store extends EventEmitter {
  constructor() {
    super();
  
    
    this.changeEmail = this.changeEmail.bind(this);
    this.getloginEmail = this.getloginEmail.bind(this);
    this.togglelogin = this.togglelogin.bind(this);
    this.updateAuth = this.updateAuth.bind(this);
    this.registerToActions = this.registerToActions.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.getloginstatus = this.getloginstatus.bind(this)
    Dispatcher.register(this.registerToActions.bind(this));

  }
  
  registerToActions({ actionType, payload }) {
    switch (actionType) {
      case Constants.TOGGLE_SIDEBAR:
        this.toggleSidebar();
       case Constants.TOGGLE_SiINGNIN:
      this.togglelogin()
       case Constants.SETEMAIL:
       this.changeEmail()

        break;
      default:
    }
  }

  updateAuth(){
    _store.loginSatus = true;
    this.emit("change")
  }
  changeEmail(){
_store.loginEmail = "Umar"
  }
  getloginstatus(){
    return _store.loginSatus
    
  }
  getloginEmail(){
    return _store.loginEmail
    
  }
  togglelogin() {
    _store.loginSatus = !_store.loginSatus;
    this.emit(Constants.TOGGLE_SiINGNIN);
  }


  toggleSidebar() {
    _store.menuVisible = !_store.menuVisible;
    this.emit(Constants.CHANGE);
  }

  getMenuState() {
    return _store.menuVisible;
  }

  getSidebarItems() {
    return _store.navItems;
  }
  getSidebarItemsTeacher() {
    return _store.navItemsTeacher;
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE, callback);
  }
}

export default new Store();
