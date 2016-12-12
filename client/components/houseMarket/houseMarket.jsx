// HOUSE MARKET
import React, {PropTypes} from "react";
import PropertiesList from "./propertiesList";
import styles from "../../styles/base.css";

class HouseMarket extends React.Component {
  renderPropertiesByOwner (playersArr) {
    return playersArr.map((player, index) => {
      if(player.id !== 'bank') {
        return (<PropertiesList key={player.id} player={player} />);
      }
    });
  }
  render() {
    const props = this.props;
    // TEST DATA
    props.players = [
      {
        id: 'bank',
        name: 'Banque'
      },
      {
        id: 'player1',
        name: "Rox",
        amount: 16280000,
        cards: {},
        position: 5,
        /*priority: 1 // Switch priority with array index */
        prison: {
          status: false,
          turns: 0
        }
      },
      {
        id: 'player2',
        name: "Greg",
        amount: 14000000,
        cards: {},
        position: 9,
        /*priority: 2 // Switch priority with array index */
        prison: {
          status: false,
          turns: 0
        }
      }
    ];
    // EO TEST DATA
    return (
      <div>
      {this.renderPropertiesByOwner(props.players)}
      </div>
    );
  }
}

HouseMarket.propTypes = {
};

export default HouseMarket;
