/* Single Pattern */
class ZEDHealthService {
  baseData = {
    cyst: {
      health: { normal: 75, hard: 100, suicidal: 100, hoe: 100 },
      headHealth: { normal: 15, hard: 20, suicidal: 20, hoe: 20 }
    },
    alphaClot: {
      health: { normal: 75, hard: 100, suicidal: 100, hoe: 100 },
      headHealth: { normal: 15, hard: 20, suicidal: 20, hoe: 20 }
    },
    slasher: {
      health: { normal: 75, hard: 100, suicidal: 100, hoe: 100 },
      headHealth: { normal: 15, hard: 20, suicidal: 20, hoe: 20 }
    },
    bloat: {
      health: { normal: 303, hard: 405, suicidal: 486, hoe: 526 },
      headHealth: { normal: 56, hard: 75, suicidal: 78, hoe: 82 }
    },
    crawler: {
      health: { normal: 41, hard: 55, suicidal: 55, hoe: 55 },
      headHealth: { normal: 15, hard: 20, suicidal: 20, hoe: 20 }
    },
    gorefast: {
      health: { normal: 150, hard: 200, suicidal: 200, hoe: 200 },
      headHealth: { normal: 37, hard: 50, suicidal: 50, hoe: 50 }
    },
    gorefiend: {
      health: { normal: 300, hard: 400, suicidal: 400, hoe: 400 },
      headHealth: { normal: 112, hard: 150, suicidal: 150, hoe: 150 }
    },
    stalker: {
      health: { normal: 56, hard: 75, suicidal: 75, hoe: 75 },
      headHealth: { normal: 15, hard: 20, suicidal: 20, hoe: 20 }
    },
    husk: {
      health: { normal: 346, hard: 462, suicidal: 462, hoe: 600 },
      headHealth: { normal: 150, hard: 200, suicidal: 200, hoe: 220 }
    },
    siren: {
      health: { normal: 230, hard: 230, suicidal: 230, hoe: 230 },
      headHealth: { normal: 155, hard: 155, suicidal: 155, hoe: 155 }
    },
    scrake: {
      health: {
        normal: {
          1: 935,
          2: 1299,
          3: 1664,
          4: 2028,
          5: 2393,
          6: 2758
        },
        hard: {
          1: 1100,
          2: 1529,
          3: 1958,
          4: 2387,
          5: 2816,
          6: 3245
        },
        suicidal: {
          1: 1210,
          2: 1681,
          3: 2153,
          4: 2625,
          5: 3097,
          6: 3569
        },
        hoe: {
          1: 1210,
          2: 1681,
          3: 2153,
          4: 2625,
          5: 3097,
          6: 3569
        }
      },
      headHealth: {
        normal: {
          1: 510,
          2: 652,
          3: 795,
          4: 938,
          5: 1081,
          6: 1224
        },
        hard: {
          1: 600,
          2: 768,
          3: 936,
          4: 1104,
          5: 1272,
          6: 1440
        },
        suicidal: {
          1: 630,
          2: 806,
          3: 982,
          4: 1159,
          5: 1335,
          6: 1512
        },
        hoe: {
          1: 660,
          2: 844,
          3: 1029,
          4: 1214,
          5: 1399,
          6: 1584
        }
      }
    },
    fleshpound: {
      health: {
        normal: {
          1: 1125,
          2: 1563,
          3: 2002,
          4: 2441,
          5: 2880,
          6: 3318
        },
        hard: {
          1: 1500,
          2: 2085,
          3: 2670,
          4: 3355,
          5: 3840,
          6: 4425
        },
        suicidal: {
          1: 1650,
          2: 2293,
          3: 2937,
          4: 3580,
          5: 4224,
          6: 4867
        },
        hoe: {
          1: 1800,
          2: 2502,
          3: 3204,
          4: 3906,
          5: 4608,
          6: 5310
        }
      },
      headHealth: {
        normal: {
          1: 487,
          2: 623,
          3: 759,
          4: 896,
          5: 1032,
          6: 1168
        },
        hard: {
          1: 650,
          2: 832,
          3: 1014,
          4: 1196,
          5: 1378,
          6: 1560
        },
        suicidal: {
          1: 682,
          2: 872,
          3: 1063,
          4: 1254,
          5: 1445,
          6: 1636
        },
        hoe: {
          1: 715,
          2: 915,
          3: 1115,
          4: 1315,
          5: 1515,
          6: 1716
        }
      }
    }
  };

  calculateHealth(
    parameters = {
      difficulty: "normal",
      players: 1
    }
  ) {
    const { difficulty, players } = parameters;
    const types = Object.keys(this.baseData);

    const getHealthByType = type => {
      const diff = difficulty.toLowerCase();
      let healthObj = { name: type };
      healthObj[type] = {};
      healthObj[type]["health"] = this.baseData[type].health[diff];
      healthObj[type]["headHealth"] = this.baseData[type].headHealth[diff];

      return healthObj;
    };

    const convertForPlayers = zed => {
      const key = zed.name;

      const isHealthPlayerDependent = zed =>
        zed.health.hasOwnProperty(1) && zed.headHealth.hasOwnProperty(1);

      if (isHealthPlayerDependent(zed[key])) {
        let update = {};
        update[key] = {
          health: zed[key].health[players],
          headHealth: zed[key].headHealth[players]
        };
        return update;
      }

      delete zed.name;
      return zed;
    };

    const combineToResult = (acc, zed) => Object.assign({}, acc, zed);

    return types
      .map(getHealthByType)
      .map(convertForPlayers)
      .reduce(combineToResult, {});
  }
}

export default new ZEDHealthService();
