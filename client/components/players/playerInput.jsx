import React, {PropTypes} from "react";
import styles from "../../styles/base.css";

class PlayerInput extends React.Component {
  render() {
    const props = this.props;
    const playerNumber = props.value;
    const playerTag = "player"+playerNumber;
    console.log('LOADING PLAYER INPUT');
    console.log(props);
    let removeBtn = "";
    if(playerNumber > 2) {
      removeBtn = (<button type="button" onClick={props.onRemovePlayer}>Remove</button>)
    }
    return (
      <div className={styles.halfCol}>
        <h2>Player {playerNumber}</h2>
        <label>
          Player Name :
          <input type="text" id={playerTag} name={playerTag} data-priority={playerNumber}/>
          {removeBtn}
        </label>
      </div>
    );
  }
}

PlayerInput.propTypes = {
};

export default PlayerInput;
