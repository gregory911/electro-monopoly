import React, {PropTypes} from "react";
import {connect} from "react-redux";
import PlayersBlock from "./players/playersBlock";
import {toggleGameStart} from "../actions/game";

const gameTitle = "Monopoly";
const getGreeting = (gameStart) => {
  return "Welcome to "+gameTitle;
}

class Game extends React.Component {
  render() {
    const props = this.props;
    const {gameStart} = props;
    if(!gameStart) {
      let gameTitle = getGreeting(gameTitle);
    }
    return (
      <div>
        <h1>{gameTitle}</h1>
        <PlayersBlock gameStart={gameStart} onGameStart={props.onGameStart}/>
        {gameStart && props.location.pathname === "/game" && React.cloneElement(this.props.children, {props})}
      </div>
    );
  }
}

Game.propTypes = {
  gameStart: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    gameStart: state.gameStart.value,
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
