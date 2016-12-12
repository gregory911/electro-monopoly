import React, {PropTypes} from "react";
import TransactionItem from "./transactionItem";
import styles from "../../styles/base.css";

class TransactionsList extends React.Component {
  renderTransactionsItems (transactionsItemsArr, players) {
    return transactionsItemsArr.map((item, index) => {
      let playerIn = null;
      let playerOut = null;
      for(let i = 0; i < players.length; i++) {
        if(item.playerIn === players[i].id) {
          console.log('FOUND IN');
          playerIn = players[i];
        }
        if(item.playerOut === players[i].id) {
          console.log('FOUND OUT');
          playerOut = players[i];
        }
      }
      console.log(playerIn, playerOut);
      return (<TransactionItem key={index} index={index} transactionItem={item} playerIn={playerIn} playerOut={playerOut} />)
    });
  }
  render() {
    const props = this.props;
    return (
      <ul className={styles.transactionsList}>
        <li className={styles.header}>
          <div className={styles.index}>Trans. #</div>
          <div className={styles.playerIn}>Cash in</div>
          <div className={styles.description}>Description</div>
          <div className={styles.playerOut}>Cash out</div>
        </li>
        {this.renderTransactionsItems(props.transactions, props.players)}
      </ul>
    );
  }
}

TransactionsList.propTypes = {
  transactions: PropTypes.array.isRequired,
  players: PropTypes.array.isRequired
};

export default TransactionsList;
