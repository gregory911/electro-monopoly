export const addTransaction = (amount, description, playerIn, playerOut) => {
  return {
    type: "ADD_TRANSACTION",
    payload: {
      amount: amount,
      description: description,
      playerIn: playerIn,
      playerOut: playerOut
    }
  };
};