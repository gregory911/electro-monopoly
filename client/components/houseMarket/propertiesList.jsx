// HOUSE MARKET
// PROPERTIES LIST
import React, {PropTypes} from "react";
import styles from "../../styles/base.css";
import AmountDisplay from "./amountDisplay";
import PropertyItem from "./propertyItem";
import Properties from "../../fakestores/properties";

class PropertiesList extends React.Component {
  renderPropertyItem (player) {
    let propertiesItems = [];
    let groupedByOwners = Properties.groupByOwner(player.id);
    for(let i = 0; i < groupedByOwners.length; i++) {
      let colorGroup = groupedByOwners[i];
      for(let j = 0; j < colorGroup.owned.length; j++) {
        console.log(colorGroup.owned[j]);
        let property = Properties.list[colorGroup.owned[j]];
        console.log(property);
        propertiesItems.push(<PropertyItem key={colorGroup.owned[j]} property={property}/>);
      }
    }
    console.log(propertiesItems)
    return propertiesItems;
  }
  render() {
    const props = this.props;
    const {player} = props;
    // TEST DATA
    const propList = Properties.list;
    propList.vancouverAirport.owner = "player1";
    propList.cabotTrail.owner = "player1";
    propList.peggysCove.owner = "player1";
    propList.grandPrix.owner = "player1";
    propList.montrealAirport.owner = "player2";
    propList.westEdmonton.owner = "player2";
    propList.perceRock.owner = "player2";
    propList.magneticSlope.owner = "player2";
    propList.rogersCenter.owner = "player2";
    // EO TEST DATA
    return (
      <form className={styles.playerBuildings}>
        <ul className={styles.houseMarketList}>
          <li className={styles.header}>
            {player.name} : <AmountDisplay amount={player.amount} /> <AmountDisplay amount={null} />
          </li>
          {this.renderPropertyItem(player)}
        </ul>
      </form>
    );
  }
}

PropertiesList.propTypes = {
  player: PropTypes.object
};

export default PropertiesList;
