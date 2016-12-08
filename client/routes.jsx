import React from "react";
import {Route} from "react-router";
import Game from "./components/game";
import Wanderer from "./components/wanderer";

export const routes = (
  <Route path="/" component={Game}>
    <Route path="/game" component={Wanderer}/>
  </Route>
);
