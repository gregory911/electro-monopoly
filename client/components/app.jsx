import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import PlayersBlock from "./players/playersBlock";
import TransactionsList from "./transactions/transactionsList";
import styles from "../styles/base.css";
import {toggleGameStatus} from "../actions/app";
import {creditPlayer} from "../actions/players";
import {addTransaction} from "../actions/transactions";

const gameTitle = "Monopoly";
const startTransactionAmount = 15000000;

class App extends React.Component {
  renderGreeting(gameStatus, pathname) {
    // add various routes rendering
    let greeting = gameTitle;
    if(!gameStatus) {
      greeting = "Welcome to "+gameTitle;
    } else if (pathname === "/buildings") {
      greeting = gameTitle+" : Marché Immobilier";
    } else if (pathname === "/market") {
      greeting = gameTitle+" : Propriétés";
    }
    return (<h1>{greeting}</h1>);
  }
  startGameActor(props) {
    // Add init transactions for all players
    for(let i = 0; i < props.players.length; i++) {
      let player = props.players[i];
      if(player.id !== 'bank') {
        props.creditPlayer(i, startTransactionAmount);
        props.addTransaction(startTransactionAmount, "Solde de départ", player.id, 'bank');
      }
    }
    // toggle game status
    props.toggleGameStatus();
    // navigate to game
    browserHistory.push('/game');
  }
  render() {
    const props = this.props;
    const {gameStatus, players, location} = props;
    return (
      <div className={styles.container}>
        {this.renderGreeting(gameStatus, location.pathname)}
        <PlayersBlock gameStatus={gameStatus} toggleGameStart={() => this.startGameActor(props)} players={players} location={location}/>
        {gameStatus && React.cloneElement(this.props.children, {props})}
      </div>
    );
  }
}

App.propTypes = {
  gameStatus: PropTypes.bool,
  players: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    gameStatus: state.game.status,
    players: state.players
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleGameStatus: () => {
      dispatch(toggleGameStatus());
    },
    addTransaction: (amount, description, playerIn, playerOut) => {
      dispatch(addTransaction(amount, description, playerIn, playerOut));
    },
    creditPlayer: (index, amount) => {
      dispatch(creditPlayer(index, amount));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
