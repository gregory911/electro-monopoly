import React, {PropTypes} from "react";
import TransactionItem from "./transactionItem";
import styles from "../../styles/base.css";

class TransactionsList extends React.Component {
  renderTransactionsItems (transactionsItemsArr) {
    return transactionsItemsArr.map((item, index) => (
      <TransactionItem key={index} index={index} transactionItem={item} />
    ));
  }
  render() {
    const props = this.props;
    // TEST DATA
    props.transactions = [
      {
        description: "Solde de départ",
        amount: 500000,
        playerIn: {
          name: "Player 1"
        },
        playerOut: {
          name: "Banque"
        }
      },
      {
        description: "Solde de départ",
        amount: 500000,
        playerIn: {
          name: "Player 2"
        },
        playerOut: {
          name: "Banque"
        }
      },
      {
        description: "Achat de maison - Carp Grove",
        amount: 1000000,
        playerIn: {
          name: "Banque"
        },
        playerOut: {
          name: "Player 1"
        }
      }
    ];
    // EO TEST DATA
    return (
      <ul className={styles.transactionsList}>
        <li className={styles.header}>
          <div className={styles.index}>Trans. #</div>
          <div className={styles.playerIn}>Cash in</div>
          <div className={styles.description}>Description</div>
          <div className={styles.playerOut}>Cash out</div>
        </li>
        {this.renderTransactionsItems(props.transactions)}
      </ul>
    );
  }
}

TransactionsList.propTypes = {
};

export default TransactionsList;
