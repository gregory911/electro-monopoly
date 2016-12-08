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

export default combineReducers({
  gameStart,
  playersQty
});
