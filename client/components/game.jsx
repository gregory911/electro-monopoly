import React, {PropTypes} from "react";
import {connect} from "react-redux";
import PlayersBlock from "./players/playersBlock";
import styles from "../styles/base.css";
import {toggleGameStart} from "../actions/game";

const gameTitle = "Monopoly";

class Game extends React.Component {
  renderGreeting(gameStart) {
    // add various routes rendering
    let greeting = gameTitle;
    if(!gameStart) {
      greeting = "Welcome to "+gameTitle;
    }
    return (<h1>{greeting}</h1>);
  }
  render() {
    const props = this.props;
    const {gameStart, players} = props;
    return (
      <div className={styles.container}>
        {this.renderGreeting(gameStart)}
        <PlayersBlock gameStart={gameStart} onGameStart={props.onGameStart} players={players} location={props.location}/>
        {gameStart && props.location.pathname === "/game" && React.cloneElement(this.props.children, {props})}
      </div>
    );
  }
}

Game.propTypes = {
  gameStart: PropTypes.bool,
  players: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    gameStart: state.gameStart.value,
    players: state.players
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGameStart: () => {
      dispatch(toggleGameStart());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
