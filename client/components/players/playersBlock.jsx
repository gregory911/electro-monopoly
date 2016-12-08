import React, {PropTypes} from "react";
import {connect} from "react-redux";
import PlayerInput from "./playerInput";
import styles from "../../styles/base.css";
import {incPlayerQty, decPlayerQty} from "../../actions/players";

const maxNumberOfPlayers = 6;

class PlayersBlock extends React.Component {
  render() {
    const props = this.props;
    const {gameStart, playersQty} = props;
    console.log('LOADING PLAYERS BLOCK');
    console.log(props);
    let playersFields = [];
    for(let i = 1; i <= playersQty; i++) {
      playersFields.push(<PlayerInput key={"player"+i.toString()} value={i} onRemovePlayer={props.onRemovePlayer} />);
    }
    let addButton = (<button type="button" onClick={props.onAddPlayer}>Add player</button>);
    if(playersQty === 6) {
      addButton = "";
    }
    if(!gameStart) {
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
              <input type="submit" value="Start Game"/>
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
  playersQty: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    playersQty: state.playersQty.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlayer: () => {
      dispatch(incPlayerQty());
    },
    onRemovePlayer: () => {
      dispatch(decPlayerQty());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersBlock);
