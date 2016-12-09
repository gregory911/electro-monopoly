import {combineReducers} from "redux";

const gameStart = (store, action) => {
  if (action.type === "TOGGLE_GAMESTART") {
    return {
      value: !store.value
    };
  }

  return store || {value: false};
};

const playersQty = (store, action) => {
  if (action.type === "INC_PLAYER_QTY") {
    if(store.value < 6) {
      return {
        value: store.value + 1
      }; 
    }
  } else if (action.type === "DEC_PLAYER_QTY") {
    if(store.value > 2) {
      return {
        value: store.value - 1
      }; 
    }
  }

  return store || {value: 2};
};

const players = (store, action, value) => {
  if (action.type === "EDIT_PLAYER") {
    let players = Object.assign({}, store);
    if(action.value && action.playerId) {
      if(players[action.playerId]) {
        players[action.playerId].name = action.value
      } else {
        players[action.playerId] = {name: action.value}
      }
    } else if (!action.value && action.playerId) {
      delete players[action.playerId];
    }
    return players;
  }
  return store || {bank: {name: 'Banque'} };
};

export default combineReducers({
  gameStart,
  playersQty,
  players
});
