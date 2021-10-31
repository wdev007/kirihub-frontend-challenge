import React from "react";
import { Switch, Route } from "react-router-dom";

import RouteWrapper from "./route.wrapper";

import Auth from "../../modules/auth";
import TodoList from "../../modules/todolist";

const Routes: React.FC = () => (
  <Switch>
    <RouteWrapper path="/" exact component={Auth} />
    <RouteWrapper path="/todolist" component={TodoList} isPrivate />
    <Route path="/dfs" component={() => <div></div>} />
  </Switch>
);

export default Routes;
