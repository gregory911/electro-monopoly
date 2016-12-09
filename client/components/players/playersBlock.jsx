import React, {PropTypes} from "react";
import {connect} from "react-redux";
import PlayerInput from "./playerInput";
import styles from "../../styles/base.css";
import {incPlayerQty, decPlayerQty, editPlayer} from "../../actions/players";

const minPLayersQty = 2;
const maxPlayersQty = 6;

const getPlayersFields = (qty, players, onEdit, onRemove) => {
  let playersFields = [];
  for(let i = 1; i <= qty; i++) {
    let playerId = "player"+i.toString();
    playersFields.push(<PlayerInput key={playerId} playerId={playerId} playerNumber={i} player={players["player"+i]} onChange={onEdit} onRemovePlayer={onRemove} />);
  }
  return playersFields;
}

const getAddPlayerBtn = (qty, onAdd) => {
  let addButton = (<button type="button" onClick={onAdd}>Add player</button>);
  if(qty === 6) {
    addButton = "";
  }
  return addButton;
}

const getRealPlayerQty = (qty, gameStatus, players) => {
  let newQty = 0;
  if(gameStatus) {
    for(let playerId in players) {
      if(playerId !== 'bank') {
        newQty++;
      }
    }
  } else {
    newQty = qty;
  }
  return newQty;
}

class PlayersBlock extends React.Component {
  render() {
    const props = this.props;
    const {gameStatus, playersQty, location} = props;
    console.log('PLAYERS -- ',props);
    if(!gameStatus) {
      let playersFields = getPlayersFields(playersQty, props.players, props.onEditPlayer, props.onRemovePlayer)
      let addButton = getAddPlayerBtn(playersQty, props.onAddPlayer);
      return (
        <form id="playersForm">
          <div id="playersFields">
            {playersFields}
          </div>
          <div className={styles.formButtons}>
            {/*<div className="hidden">
              <label>Jouer avec la Vente aux Enchères</label>
              <input type="checkbox" id="playWithAuction" name="playWithAuction"/>
            </div>*/}
            <div>
              {addButton}
              <input type="button" onClick={props.onGameStart} value="Start Game"/>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <div className={styles.playersInfos}>
        </div>
      );
    }
  }
}

PlayersBlock.propTypes = {
  playersQty: PropTypes.number.isRequired,
  players: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    playersQty: getRealPlayerQty(state.playersQty.value, ownProps.gameStatus, ownProps.players),
    players: state.players
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlayer: () => {
      dispatch(incPlayerQty());
    },
    onRemovePlayer: () => {
      dispatch(decPlayerQty());
    },
    onEditPlayer: (evt) => {
      dispatch(editPlayer(evt));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersBlock);
