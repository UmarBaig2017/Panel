import React from "react";
import PropTypes from "prop-types";
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink } from "shards-react";

const SidebarNavItem = ({ item }) => (
  <NavItem>
    <NavLink style={{"color": "green"}}  tag={RouteNavLink} to={item.to}>
      {item.htmlBefore && (
        <div 
          className="d-inline-block primary text-white"
          dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
        />
      )}
      {item.title && <span>{item.title}</span>}
      {item.htmlAfter && (
        <div style={{"color": "red"}}
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
        />
      )}
    </NavLink>
  </NavItem>
);

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default SidebarNavItem;
