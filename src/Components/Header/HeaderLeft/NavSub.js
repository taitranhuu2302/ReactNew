import { Link, Route } from "react-router-dom";

import React, { Component } from "react";

class NavSub extends Component {
  render() {
    var { item } = this.props;
    var html = null;
    if (item.image) {
      html = (
        <Route path={item.to} exact={item.exact}>
          <li className="drop-item">
            <Link to={item.to}>
              <img src={item.image} alt="" />
            </Link>
            <div className="item-title">{item.label}</div>
          </li>
        </Route>
      );
    } else {
      html = (
        <Route path={item.to} exact={item.exact}>
          <li className="drop-item">
            <Link to={item.to} className="nav-link">
              {item.label}
            </Link>
          </li>
        </Route>
      );
    }
    return html;
  }
}

export default NavSub;
