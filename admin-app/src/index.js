import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.jsx";

import AdminLayout from "layouts/Admin.jsx";

import "assets/scss/material-dashboard-pro-react.scss?v=1.5.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/auth" component={AuthLayout} />
      <Route path="/" component={AdminLayout} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
