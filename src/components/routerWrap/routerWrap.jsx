import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { getCookie } from "../../utils/utils";
function ISlOGIN() {
  return !!getCookie("token");
}
class RouteWrapper extends Component {
  constructor() {
    super();
  }
  render() {
    const { routes } = this.props;
    return (
      <Switch>
        {routes.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              render={location => {
                return item.authorization && !ISlOGIN() ? (
                  <Redirect to={{pathname:"/login",state:{from:item.path}}} />//state由进来的路由所决定
                ) : (
                  <item.component {...location} routes={item.children} />
                );
              }}
            />
          );
        })}
      </Switch>
    );
  }
}
export default RouteWrapper;
