// TRANSACTION ITEM
import React, {PropTypes} from "react";
import Utils from "../../utilities/utils";
import styles from "../../styles/base.css";

class TransactionItem extends React.Component {
  render() {
    const props = this.props;
    const {index, transactionItem, playerIn, playerOut} = props;
    if(playerIn && playerOut) {
      return (
        <li>
          <div className={styles.index}>{index}</div>
          <div className={styles.playerIn}>{playerIn.name}</div>
          <div className={styles.description}>{transactionItem.description}<br/>Montant : {Utils.renderAmount(transactionItem.amount)}</div>
          <div className={styles.playerOut}>{playerOut.name}</div>
        </li>
      );
    } else {
      return null;
    }
  }
}

TransactionItem.propTypes = {
  index: PropTypes.number.isRequired,
  transactionItem: PropTypes.object.isRequired,
  playerIn: PropTypes.object.isRequired,
  playerOut: PropTypes.object.isRequired
};

export default TransactionItem;