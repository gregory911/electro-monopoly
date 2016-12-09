//PROPERTIES
const Properties = () => {
  const list = {
    stjohnsAirport: {
      name: "Aéroport International de St. John's",
      color: {
        id: 8,
        name: "airport"
      },
      type: "airport",
      value: 2000000,
      mortgage: {
        value: 1000000,
        status: false
      },
      owner: false
    },
    vancouverAirport: {
      name: "Aéroport International de Vancouver",
      color: {
        id: 8,
        name: "airport"
      },
      type: "airport",
      value: 2000000,
      mortgage: {
        value: 1000000,
        status: false
      },
      owner: false
    },
    montrealAirport: {
      name: "Aéroport International Trudeau de Montréal",
      color: {
        id: 8,
        name: "airport"
      },
      type: "airport",
      value: 2000000,
      mortgage: {
        value: 1000000,
        status: false
      },
      owner: false
    },
    torontoAirport: {
      name: "Aéroport International Pearson de Toronto",
      color: {
        id: 8,
        name: "airport"
      },
      type: "airport",
      value: 2000000,
      mortgage: {
        value: 1000000,
        status: false
      },
      owner: false
    },
    cellular: {
      name: "Cellulaire",
      color: {
        id: 9,
        name: "service"
      },
      type: "service",
      value: 1500000,
      mortgage: {
        value: 750000,
        status: false
      },
      owner: false
    },
    internet: {
      name: "Internet",
      color: {
        id: 9,
        name: "service"
      },
      type: "service",
      value: 1500000,
      mortgage: {
        value: 750000,
        status: false
      },
      owner: false
    },
    cabotTrail: {
      name: "Cabot Trail",
      color: {
        id: 0,
        name: "purple"
      },
      type: "property",
      value: 600000,
      rental: {
        0: 20000,
        1: 100000,
        2: 300000,
        3: 900000,
        4: 1600000,
        5: 2500000
      },
      building: {
        price: 500000,
        qty: 0,
      },
      mortgage: {
        value: 300000,
        status: false
      },
      owner: false
    },
    peggysCove: {
      name: "Peggy's Cove",
      color: {
        id: 0,
        name: "purple"
      },
      type: "property",
      value: 600000,
      rental: {
        0: 40000,
        1: 200000,
        2: 600000,
        3: 1800000,
        4: 3200000,
        5: 4500000
      },
      building: {
        price: 500000,
        qty: 0,
      },
      mortgage: {
        value: 300000,
        status: false
      },
      owner: false
    },
    confederationBridge: {
      name: "Pont de la Confédération",
      color: {
        id: 1,
        name: "paleblue"
      },
      type: "property",
      value: 1000000,
      rental: {
        0: 60000,
        1: 300000,
        2: 900000,
        3: 2700000,
        4: 4000000,
        5: 5500000
      },
      building: {
        price: 500000,
        qty: 0,
      },
      mortgage: {
        value: 500000,
        status: false
      },
      owner: false
    },
    grandPrix: {
      name: "Grand Prix du Canada",
      color: {
        id: 1,
        name: "paleblue"
      },
      type: "property",
      value: 1000000,
      rental: {
        0: 60000,
        1: 300000,
        2: 900000,
        3: 2700000,
        4: 4000000,
        5: 5500000
      },
      building: {
        price: 500000,
        qty: 0,
      },
      mortgage: {
        value: 500000,
        status: false
      },
      owner: false
    },
    westEdmonton: {
      name: "West Edmonton Mall",
      color: {
        id: 1,
        name: "paleblue"
      },
      type: "property",
      value: 1200000,
      rental: {
        0: 80000,
        1: 400000,
        2: 1000000,
        3: 3000000,
        4: 4500000,
        5: 6000000
      },
      building: {
        price: 500000,
        qty: 0,
      },
      mortgage: {
        value: 600000,
        status: false
      },
      owner: false
    },
    perceRock: {
      name: "Roché Percé",
      color: {
        id: 2,
        name: "rose"
      },
      type: "property",
      value: 1400000,
      rental: {
        0: 100000,
        1: 500000,
        2: 1500000,
        3: 4500000,
        4: 6250000,
        5: 7500000
      },
      building: {
        price: 1000000,
        qty: 0,
      },
      mortgage: {
        value: 700000,
        status: false
      },
      owner: false
    },
    magneticSlope: {
      name: "Côte Magnétique",
      color: {
        id: 2,
        name: "rose"
      },
      type: "property",
      value: 1400000,
      rental: {
        0: 100000,
        1: 500000,
        2: 1500000,
        3: 4500000,
        4: 6250000,
        5: 7500000
      },
      building: {
        price: 1000000,
        qty: 0,
      },
      mortgage: {
        value: 700000,
        status: false
      },
      owner: false
    },
    rogersCenter: {
      name: "Centre Rogers",
      color: {
        id: 2,
        name: "rose"
      },
      type: "property",
      value: 1600000,
      rental: {
        0: 120000,
        1: 600000,
        2: 1800000,
        3: 5000000,
        4: 7000000,
        5: 9000000
      },
      building: {
        price: 1000000,
        qty: 0,
      },
      mortgage: {
        value: 800000,
        status: false
      },
      owner: false
    },
    churchillManitoba: {
      name: "Churchill, Manitoba",
      color: {
        id: 3,
        name: "orange"
      },
      type: "property",
      value: 1800000,
      rental: {
        0: 140000,
        1: 700000,
        2: 2000000,
        3: 5500000,
        4: 7500000,
        5: 9500000
      },
      building: {
        price: 1000000,
        qty: 0,
      },
      mortgage: {
        value: 900000,
        status: false
      },
      owner: false
    },
    assiboinePark: {
      name: "Parc Assiboine",
      color: {
        id: 3,
        name: "orange"
      },
      type: "property",
      value: 1800000,
      rental: {
        0: 140000,
        1: 700000,
        2: 2000000,
        3: 5500000,
        4: 7500000,
        5: 9500000
      },
      building: {
        price: 1000000,
        qty: 0,
      },
      mortgage: {
        value: 900000,
        status: false
      },
      owner: false
    },
    mooseJaw: {
      name: "Tunnels de Moose Jaw",
      color: {
        id: 3,
        name: "orange"
      },
      type: "property",
      value: 2000000,
      rental: {
        0: 160000,
        1: 800000,
        2: 2200000,
        3: 6000000,
        4: 8000000,
        5: 10000000
      },
      building: {
        price: 1000000,
        qty: 0,
      },
      mortgage: {
        value: 1000000,
        status: false
      },
      owner: false
    },
    calgaryStampede: {
      name: "Stampede de Calgary",
      color: {
        id: 4,
        name: "red"
      },
      type: "property",
      value: 2200000,
      rental: {
        0: 180000,
        1: 900000,
        2: 2500000,
        3: 7000000,
        4: 8750000,
        5: 10500000
      },
      building: {
        price: 1500000,
        qty: 0,
      },
      mortgage: {
        value: 1100000,
        status: false
      },
      owner: false
    },
    banffPark: {
      name: "Parc National de Banff",
      color: {
        id: 4,
        name: "red"
      },
      type: "property",
      value: 2200000,
      rental: {
        0: 180000,
        1: 900000,
        2: 2500000,
        3: 7000000,
        4: 8750000,
        5: 10500000
      },
      building: {
        price: 1500000,
        qty: 0,
      },
      mortgage: {
        value: 1100000,
        status: false
      },
      owner: false
    },
    stanleyPark: {
      name: "Parc Stanley",
      color: {
        id: 4,
        name: "red"
      },
      type: "property",
      value: 2400000,
      rental: {
        0: 200000,
        1: 1000000,
        2: 3000000,
        3: 7500000,
        4: 9250000,
        5: 11000000
      },
      building: {
        price: 1500000,
        qty: 0,
      },
      mortgage: {
        value: 1200000,
        status: false
      },
      owner: false
    },
    rideauCanal: {
      name: "Canal Rideau",
      color: {
        id: 5,
        name: "yellow"
      },
      type: "property",
      value: 2600000,
      rental: {
        0: 220000,
        1: 1100000,
        2: 3300000,
        3: 8000000,
        4: 9750000,
        5: 11500000
      },
      building: {
        price: 1500000,
        qty: 0,
      },
      mortgage: {
        value: 1300000,
        status: false
      },
      owner: false
    },
    yorkville: {
      name: "Yorkville",
      color: {
        id: 5,
        name: "yellow"
      },
      type: "property",
      value: 2600000,
      rental: {
        0: 220000,
        1: 1100000,
        2: 3300000,
        3: 8000000,
        4: 9750000,
        5: 11500000
      },
      building: {
        price: 1500000,
        qty: 0,
      },
      mortgage: {
        value: 1300000,
        status: false
      },
      owner: false
    },
    parliament: {
      name: "Colline Parlementaire",
      color: {
        id: 5,
        name: "yellow"
      },
      type: "property",
      value: 2800000,
      rental: {
        0: 240000,
        1: 1200000,
        2: 3600000,
        3: 8500000,
        4: 10250000,
        5: 12000000
      },
      building: {
        price: 1500000,
        qty: 0,
      },
      mortgage: {
        value: 1400000,
        status: false
      },
      owner: false
    },
    robsonStreet: {
      name: "Rue Robson",
      color: {
        id: 6,
        name: "green"
      },
      type: "property",
      value: 3000000,
      rental: {
        0: 260000,
        1: 1300000,
        2: 3900000,
        3: 9000000,
        4: 11000000,
        5: 12750000
      },
      building: {
        price: 2000000,
        qty: 0,
      },
      mortgage: {
        value: 1500000,
        status: false
      },
      owner: false
    },
    stCathStreet: {
      name: "Rue Sainte-Catherine",
      color: {
        id: 6,
        name: "green"
      },
      type: "property",
      value: 3000000,
      rental: {
        0: 260000,
        1: 1300000,
        2: 3900000,
        3: 9000000,
        4: 11000000,
        5: 12750000
      },
      building: {
        price: 2000000,
        qty: 0,
      },
      mortgage: {
        value: 1500000,
        status: false
      },
      owner: false
    },
    yongeStreet: {
      name: "Rue Yonge",
      color: {
        id: 6,
        name: "green"
      },
      type: "property",
      value: 3200000,
      rental: {
        0: 280000,
        1: 1500000,
        2: 4500000,
        3: 10000000,
        4: 12000000,
        5: 14000000
      },
      building: {
        price: 2000000,
        qty: 0,
      },
      mortgage: {
        value: 1600000,
        status: false
      },
      owner: false
    },
    niagaraFalls: {
      name: "Chutes Niagara",
      color: {
        id: 7,
        name: "blue"
      },
      type: "property",
      value: 3500000,
      rental: {
        0: 350000,
        1: 1750000,
        2: 5000000,
        3: 11000000,
        4: 13000000,
        5: 15000000
      },
      building: {
        price: 2000000,
        qty: 0,
      },
      mortgage: {
        value: 1750000,
        status: false
      },
      owner: false
    },
    cnTower: {
      name: "Tour du CN",
      color: {
        id: 7,
        name: "blue"
      },
      type: "property",
      value: 4000000,
      rental: {
        0: 500000,
        1: 2000000,
        2: 6000000,
        3: 14000000,
        4: 17000000,
        5: 20000000
      },
      building: {
        price: 2000000,
        qty: 0,
      },
      mortgage: {
        value: 2000000,
        status: false
      },
      owner: false
    }
  };
  const canSellByColor = () => {
    let propertiesByColor = [];
    for(let propertyId in list) {
      let property = list[propertyId];
      if(typeof(propertiesByColor[property.color.id]) === 'undefined') {
        propertiesByColor[property.color.id] = {
          canSell: true,
          group: []
        }
      }
      propertiesByColor[property.color.id].group.push(propertyId);
      if(property.type === 'property'){
        if(property.building.qty > 0) {
          propertiesByColor[property.color.id].canSell = false;
        }
      }
    }
    return propertiesByColor;
  };
  return {
    list: list,
    canSellByColor: canSellByColor()
  }
}
export default Properties();