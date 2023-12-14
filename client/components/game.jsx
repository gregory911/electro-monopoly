import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import styles from "../styles/base.css";
import TransactionsList from "./transactions/transactionsList";

class Game extends React.Component {
  render() {
    const props = this.props;
    return (
      <div>
        <div>GAME FORM</div>
        <TransactionsList transactions={props.transactions} players={props.players}/>
      </div>
    );
  }
}

Game.propTypes = {
  transactions: PropTypes.array.isRequired,
  players: PropTypes.array.isRequired, 
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
    players: state.players
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);