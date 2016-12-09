export const incPlayerQty = () => {
  return {
    type: "INC_PLAYER_QTY"
  };
};

export const decPlayerQty = () => {
  return {
    type: "DEC_PLAYER_QTY"
  };
};

export const editPlayer = (evt) => {
  let target = evt.target;
  return {
    type: "EDIT_PLAYER",
    playerId: target.getAttribute('id'),
    value: target.value
  };
};