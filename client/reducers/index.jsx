import {combineReducers} from "redux";
import Properties from "../fakestores/properties";

const game = (store, action) => {
  let game = Object.assign({}, store);
  switch(action.type) {
    case "TOGGLE_GAMESTATUS":
      game.status= !store.status;
      break;
    default:
      game = store || {
                        status: false,
                        currentTurn: {
                          dblCount: 0,
                          diceRoll: null,
                          playerIndex: null
                        }
                      };
  };
  return game;
};

const players = (store, action, value) => {
  let players = !store ? store : store.map((player)=>(player));
  let payload = action.payload || {};
  switch (action.type) {
    case "ADD_PLAYER":
      if(payload.index) {
        players[payload.index] =  {
                id: "player"+payload.index,
                name: "Player "+payload.index,
                priority: payload.index,
                amount: 0,
                cards: {},
                position: 1,
                prison: {
                  status: false,
                  turns: 0
                }
              };
      }
      break;
    case "REMOVE_PLAYER":
      if(payload.index) {
        players.splice(payload.index, 1);
      }
      break;
    case "EDIT_PLAYER_NAME":
      if(payload.value && payload.playerIndex) {
        players[payload.playerIndex].name = payload.value;
      }
      break
    case "CREDIT_PLAYER":
      if(payload.index && payload.amount) {
        players[payload.index].amount = players[payload.index].amount+payload.amount;
      }
      break
    case "DEBIT_PLAYER":
      if(payload.index && payload.amount) {
        players[payload.index].amount = players[payload.index].amount-payload.amount;
      }
      break
    default:
      players = store || [
                        {
                          id: "bank",
                          name: "Banque",
                          priority: 0
                        },
                        {
                          id: "player1",
                          name: "Player 1",
                          priority: 1,
                          amount: 0,
                          cards: {},
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
                          cards: {},
                          position: 1,
                          prison: {
                            status: false,
                            turns: 0
                          }
                        }
                      ];
  }
  return players;
};

const transactions = (store, action) => {
  let transactions = !store ? store : store.map((transaction)=>(transaction));
  switch (action.type) {
    case "ADD_TRANSACTION":
      if(action.payload) {
        transactions.push(action.payload);
      }
      break;
    default:
      transactions = store || [
                        {
                          amount: 0,
                          playerIn: null,
                          playerOut: null,
                          description: ""
                        }
                      ];
  }
  return transactions;
};

const properties = (store, action) => {
  switch (action.type) {
    default:
      return store || Properties;
  }
};

export default combineReducers({
  game,
  players,
  transactions,
  properties
});
