// REAL ESTATE
// PROPERTY ITEM
import React, {PropTypes} from "react";
import Utils from "../../utilities/utils";
import styles from "../../styles/base.css";

class RealEstateItem extends React.Component {
  render() {
    const props = this.props;
    const {item} = props;
    console.log('RENDERING ITEM');
    return (
      <li>
        <div className={styles.owner}>Owner</div>
        <div className={styles.realEstateColor}>
          <span className={styles[item.color.name+"_spot"]}>&nbsp;</span>
        </div>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.buyValue}>{Utils.renderAmount(item.value)}</div>
        <div className={styles.action}>Action</div>
      </li>
    );
  }
}

RealEstateItem.propTypes = {
};

export default RealEstateItem;