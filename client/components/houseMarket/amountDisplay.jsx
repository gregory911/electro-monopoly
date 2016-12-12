import React, {PropTypes} from "react";
import Utils from "../../utilities/utils";
import styles from "../../styles/base.css";

class AmountDisplay extends React.Component {
  checkAmount (amount) {
    if(amount) {
      return Utils.renderAmount(amount);
    }
    return "";
  }
  render() {
    const props = this.props;
    const {amount} = props;
    return (
      <span>{this.checkAmount(amount)}</span>
    );
  }
}

AmountDisplay.propTypes = {
  amount: PropTypes.number
};

export default AmountDisplay;