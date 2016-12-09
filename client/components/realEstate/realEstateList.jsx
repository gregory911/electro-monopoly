// REAL ESTATE
//PROPERTIES LIST
import React, {PropTypes} from "react";
import RealEstateItem from "./realEstateItem";
import styles from "../../styles/base.css";
import Properties from "../../fakestores/properties";

class RealEstateList extends React.Component {
  renderRealEstateItems () {
    let groupedByColorArr = Properties.canSellByColor;
    let tester = [];
    for (let j = 0; j < groupedByColorArr.length; j++) {
      let colorGroup = groupedByColorArr[j];
      for(let i = 0; i < colorGroup.group.length; i++){
        let propertyItem = Properties.list[colorGroup.group[i]];
        tester.push(
          <RealEstateItem key={colorGroup.group[i]} canSell={colorGroup.canSell} item={propertyItem} action=""/>
        );
      }
    };
    return tester;
  }
  render() {
    const props = this.props;
    return (
      <ul className={styles.realEstateList}>
        <li className={styles.header}>
          <div className={styles.owner}>Owner</div>
          <div className={styles.color}>Color</div>
          <div className={styles.name}>Name</div>
          <div className={styles.buyValue}>Buy Value</div>
          <div className={styles.action}>Action</div>
        </li>
        {this.renderRealEstateItems()}
      </ul>
    );
  }
}

RealEstateList.propTypes = {
};

export default RealEstateList;
