//
// This is the server side entry point for the React app.
//

import ReduxRouterEngine from "electrode-redux-router-engine";
import {routes} from "../../client/routes";
import {createStore} from "redux";
import rootReducer from "../../client/reducers";
import Promise from "bluebird";
import Properties from "../../client/fakestores/properties";

function createReduxStore(req, match) { // eslint-disable-line
  const initialState = {
    game: {
      status: false,
      currentTurn: {
        dblCount: 0,
        diceRoll: null,
        playerIndex: null
      }
    },
    players: [
      {
        id: "bank",
        name: 'Banque',
        priority: 0,
      },
      {
        id: "player1",
        name: "Player 1",
        priority: 1,
        amount: 0,
        cards: null,
        position: 1,
        prison: {
          status: false,
          turns: 0
        }
      },
      {
        id: "player2",
        name: "Player 2",
        priority: 2,
        amount: 0,
        cards: null,
        position: 1,
        prison: {
          status: false,
          turns: 0
        }
      }
    ],
    transactions: [
      {
        amount: 0,
        playerIn: null,
        playerOut: null,
        description: ""
      }
    ],
    properties: Properties
  };

  const store = createStore(rootReducer, initialState);
  return Promise.resolve(store);
}

//
// This function is exported as the content for the webapp plugin.
//
// See config/default.json under plugins.webapp on specifying the content.
//
// When the Web server hits the routes handler installed by the webapp plugin, it
// will call this function to retrieve the content for SSR if it's enabled.
//
//

module.exports = (req) => {
  const app = req.server && req.server.app || req.app;
  if (!app.routesEngine) {
    app.routesEngine = new ReduxRouterEngine({routes, createReduxStore});
  }

  return app.routesEngine.render(req);
};
