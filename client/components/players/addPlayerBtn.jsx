import React, {PropTypes} from "react";
import styles from "../../styles/base.css";

class AddPlayerBtn extends React.Component {
  render() {
    const props = this.props;
    const {playersQty, maxQty} = props;
    if(playersQty < maxQty) {
      return (<button type="button" data-qty={playersQty} onClick={props.onClick}>Add player</button>);
    } else {
      return null;
    }
  }
}

AddPlayerBtn.propTypes = {
  playersQty: PropTypes.number.isRequired,
  maxQty: PropTypes.number.isRequired
};

export default AddPlayerBtn;