import React, {PropTypes} from "react";
import {connect} from "react-redux";
import PlayerInput from "./playerInput";
import AddPlayerBtn from "./addPlayerBtn";
import Utils from "../../utilities/utils";
import styles from "../../styles/base.css";
import {addPlayer, removePlayer, editPlayerName, testerFunc} from "../../actions/players";
const maxPlayersQty = 6;

class PlayersBlock extends React.Component {
  getPlayersQty(players) {
    let newQty = 0;
    for(let i = 0; i < players.length; i++) {
      if(players[i].id !== 'bank') {
        newQty++;
      }
    }
    return newQty;
  }
  renderPlayersFields(players, onEdit, onRemove) {
    return players.map((player, index) => {
      if(player.id !== 'bank') {
        return (<PlayerInput key={player.id} playerIndex={index} player={player} onChange={onEdit} onRemovePlayer={onRemove} />);
      }
    });
  }
  renderPlayersInfos(players) {
    return players.map((player, index) => {
      if(player.id !== 'bank') {
        return (<div>{player.name} : {Utils.renderAmount(player.amount)}</div>);
      }
    });
  }
  render() {
    this.props.playersQty = this.getPlayersQty(this.props.players);
    const props = this.props;
    const {gameStatus, playersQty, players, location} = props;
    if(!gameStatus) {
      let playersFields = this.renderPlayersFields(players, props.onEditPlayerName, props.onRemovePlayer);
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
              <AddPlayerBtn playersQty={playersQty} data-qty={playersQty} onClick={props.onAddPlayer} maxQty={maxPlayersQty} />
              <input type="button" onClick={props.toggleGameStart} value="Start Game"/>
            </div>
          </div>
        </form>
      );
    } else if(location.pathname !== "/buildings") {
      return (
        <div className={styles.playersInfos}>
          {this.renderPlayersInfos(players)}
        </div>
      );
    } else {
      return null;
    }
  }
}

PlayersBlock.propTypes = {
  gameStatus: PropTypes.bool,
  players: PropTypes.array,
  location: PropTypes.object.isRequired
};

// export default PlayersBlock;

const mapStateToProps = (state, ownProps) => {
  return {
    players: state.players
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlayer: (evt) => {
      dispatch(addPlayer(evt));
    },
    onRemovePlayer: (evt) => {
      dispatch(removePlayer(evt));
    },
    onEditPlayerName: (evt) => {
      dispatch(editPlayerName(evt));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersBlock);
