// TRANSACTION ITEM
import React, {PropTypes} from "react";
import Utils from "../../utilities/utils";
import styles from "../../styles/base.css";

class TransactionItem extends React.Component {
  render() {
    const props = this.props;
    const {index, transactionItem} = props;
    return (
      <li>
        <div className={styles.index}>{index+1}</div>
        <div className={styles.playerIn}>{transactionItem.playerIn.name}</div>
        <div className={styles.description}>{transactionItem.description}<br/>Montant : {Utils.renderAmount(transactionItem.amount)}</div>
        <div className={styles.playerOut}>{transactionItem.playerOut.name}</div>
      </li>
    );
  }
}

TransactionItem.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object
};

export default TransactionItem;