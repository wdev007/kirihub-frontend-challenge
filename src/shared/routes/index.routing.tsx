import React from "react";
import { Switch } from "react-router-dom";

import RouteWrapper from "./route.wrapper";

import Auth from "../../modules/auth";
import TodoList from "../../modules/todolist";

const AppRoutes: React.FC = () => (
  <Switch>
    <RouteWrapper path="/" component={Auth} exact />
    <RouteWrapper path="/home" component={TodoList} isPrivate />
  </Switch>
);

export default AppRoutes;
