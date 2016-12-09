//UTILS//PROPERTIES
const Utils = () => {
  const renderAmount = (amount) => {
    var negAmount = false;
    if(amount < 0) {
      negAmount = true;
      amount *= -1;
    }
    var amountTypeText = "M";
    var amountType = 1000000;
    var amountNumber = amount/amountType;
    if(amount/amountType < 1) {
      amountTypeText = "K";
      amountType = 1000;
      amountNumber = amount/amountType;
    }
    if(negAmount === true) {
      amountNumber *= -1;
    }
    return amountNumber+' '+amountTypeText+' $';
  }
  return {
    renderAmount: renderAmount
  }
}
export default Utils();