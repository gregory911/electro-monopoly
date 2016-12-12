import React, {PropTypes} from "react";
import styles from "../../styles/base.css";

class PlayerInput extends React.Component {
  render() {
    const props = this.props;
    const {playerIndex, player} = props;
    let removeBtn = "";
    if(playerIndex > 2) {
      removeBtn = (<button type="button" data-index={playerIndex} onClick={props.onRemovePlayer}>Remove</button>)
    }
    return (
      <div className={styles.halfCol}>
        <h2>Player {playerIndex}</h2>
        <label>
          Player Name :
          <input type="text" name={player.id} data-index={playerIndex} onChange={this.props.onChange} value={player.name}/>
          {removeBtn}
        </label>
      </div>
    );
  }
}

PlayerInput.propTypes = {
  playerIndex: PropTypes.number.isRequired,
  player: PropTypes.object
};

export default PlayerInput;
