export const addPlayer = (evt) => {
  let target = evt.target;
  return {
    type: "ADD_PLAYER",
    payload: {
      index: parseInt(target.getAttribute('data-qty'))+1
    }
  };
};

export const removePlayer = (evt) => {
  let target = evt.target;
  return {
    type: "REMOVE_PLAYER",
    payload: {
      playerIndex: target.getAttribute('data-index')
    }
  };
};

export const setPlayerQty = (qty) => {
  return {
    type: "SET_PLAYER_QTY",
    payload: {
      value: qty
    }
  };
};

export const editPlayerName = (evt) => {
  let target = evt.target;
  return {
    type: "EDIT_PLAYER_NAME",
    payload: {
      index: target.getAttribute('data-index'),
      value: target.value
    }
  };
};

export const creditPlayer = (index, amount) => {
  return {
    type: "CREDIT_PLAYER",
    payload: {
      index: index,
      amount: amount
    }
  };
};

export const debitPlayer = (index, amount) => {
  return {
    type: "DEBIT_PLAYER",
    payload: {
      index: index,
      amount: amount
    }
  };
};