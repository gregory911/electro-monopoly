// HOUSE MARKET
// PROPERTY ITEM
import React, {PropTypes} from "react";
import Utils from "../../utilities/utils";
import styles from "../../styles/base.css";

class PropertyItem extends React.Component {
  render() {
    const props = this.props;
    const {property} = props;
    return (
      <li>
        <div className={styles.houseMarketColor}>
          <span className={styles[property.color.name+"_spot"]}>&nbsp;</span>
        </div>
        <div className={styles.houseMarketName}>{property.name}</div>
        <div className={styles.houseMarketBuildings}>
          {property.type === "property" ? "form" : ""}
        </div>
        <div className={styles.houseMarketAmount}>
          {property.building ? Utils.renderAmount(property.building.price) : ""}
        </div>
      </li>
    );
  }
}

PropertyItem.propTypes = {
  property: PropTypes.object
};

export default PropertyItem;