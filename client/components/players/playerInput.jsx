import React, {PropTypes} from "react";
import styles from "../../styles/base.css";

class PlayerInput extends React.Component {
  render() {
    const props = this.props;
    const {playerNumber, playerId} = props;
    let playerName = "";
    if(props.player) {
      playerName = props.player.name;
    }
    let removeBtn = "";
    if(playerNumber > 2) {
      removeBtn = (<button type="button" onClick={props.onRemovePlayer}>Remove</button>)
    }
    return (
      <div className={styles.halfCol}>
        <h2>Player {playerNumber}</h2>
        <label>
          Player Name :
          <input type="text" id={playerId} name={playerId} data-priority={playerNumber} onChange={props.onChange} value={playerName}/>
          {removeBtn}
        </label>
      </div>
    );
  }
}

PlayerInput.propTypes = {
  playerNumber: PropTypes.number.isRequired,
  playerName: PropTypes.string,
  player: PropTypes.object
};

export default PlayerInput;
