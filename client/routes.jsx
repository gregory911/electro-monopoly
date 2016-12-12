import React from "react";
import {Route} from "react-router";
import App from "./components/app";
import Game from "./components/game";
import RealEstateList from "./components/realEstate/realEstateList";
import HouseMarket from "./components/houseMarket/houseMarket";

export const routes = (
  <Route path="/" component={App}>
    <Route path="/game" component={Game}/>
    <Route path="/buildings" component={HouseMarket}/>
    <Route path="/market" component={RealEstateList}/>
  </Route>
);
