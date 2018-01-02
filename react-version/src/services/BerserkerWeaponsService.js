/* Single Pattern */
class BerserkerWeaponsService {
  baseData = {
    butch: 0.2,
    parry: 0.35,
    smash: 0.5,
    smashHead: 0.25,
    mass: 0.3,
    knifeli: 32,
    knifehe: 64,
    knifesta: 15,
    cstl: 49,
    csth: 86,
    cstm: 15,
    kat1: 68,
    kat2: 98,
    pull: 70,
    pulh: 145,
    pulm: 528,
    zwel: 85,
    zweh: 195,
    zwem: 63,
    evil: 480,
    evih: 29,
    evim: 90,
    bcl: 63,
    bch: 165,
    bcm: 175,
    vlad: 30
  };

  formulaParams = [
    {
      resultLabel: "cst1",
      baseLabel: "cstl",
      const: 1,
      considerButch: true,
      considerMass: true,
      considerSmash: false
    },
    {
      resultLabel: "cst2",
      baseLabel: "csth",
      const: 1,
      considerButch: true,
      considerMass: false,
      considerSmash: true
    },
    {
      resultLabel: "cst3",
      baseLabel: "cstm",
      const: 1,
      considerButch: true,
      considerMass: false,
      considerSmash: false
    },
    {
      resultLabel: "kat1",
      baseLabel: "kat1",
      const: 1,
      considerButch: true,
      considerMass: true,
      considerSmash: false
    },
    {
      resultLabel: "kat2",
      baseLabel: "kat2",
      const: 1,
      considerButch: true,
      considerMass: false,
      considerSmash: true
    },
    {
      resultLabel: "kat3",
      baseLabel: "kat1",
      const: 1,
      considerButch: true,
      considerMass: true,
      considerSmash: false
    },
    {
      resultLabel: "pulv1",
      baseLabel: "pull",
      const: 1,
      considerButch: true,
      considerMass: true,
      considerSmash: false
    },
    {
      resultLabel: "pulv2",
      baseLabel: "pulh",
      const: 1,
      considerButch: true,
      considerMass: false,
      considerSmash: true
    },
    {
      resultLabel: "pulv3",
      baseLabel: "pulm",
      const: 1,
      considerButch: true,
      considerMass: false,
      considerSmash: true
    },
    {
      resultLabel: "zwei1",
      baseLabel: "zwel",
      const: 1,
      considerButch: true,
      considerMass: true,
      considerSmash: false
    },
    {
      resultLabel: "zwei2",
      baseLabel: "zweh",
      const: 1,
      considerButch: true,
      considerMass: false,
      considerSmash: true
    },
    {
      resultLabel: "zwei3",
      baseLabel: "zwem",
      const: 1,
      considerButch: true,
      considerMass: false,
      considerSmash: false
    },
    {
      resultLabel: "evis1",
      baseLabel: "evil",
      const: 1,
      considerButch: true,
      considerMass: false,
      considerSmash: false
    },
    {
      resultLabel: "evis2",
      baseLabel: "evih",
      const: 1,
      considerButch: true,
      considerMass: false,
      considerSmash: false
    },
    {
      resultLabel: "evis3",
      baseLabel: "evim",
      const: 1,
      considerButch: true,
      considerMass: false,
      considerSmash: false
    },
    {
      resultLabel: "bc1",
      baseLabel: "bcl",
      const: 1,
      considerButch: true,
      considerMass: true,
      considerSmash: false
    },
    {
      resultLabel: "bc2",
      baseLabel: "bch",
      const: 1,
      considerButch: true,
      considerMass: false,
      considerSmash: true
    },
    {
      resultLabel: "bc3",
      baseLabel: "bcm",
      const: 1,
      considerButch: true,
      considerMass: false,
      considerSmash: false
    },
    {
      resultLabel: "ng1",
      baseLabel: "vlad",
      const: 1,
      considerButch: true,
      considerMass: false,
      considerSmash: false
    },
    {
      resultLabel: "ng2",
      baseLabel: "vlad",
      const: 7,
      considerButch: true,
      considerMass: false,
      considerSmash: false
    }
  ];

  _calculateBasicWeaponDamage(
    params = {
      currentValue: 0,
      perkLevel: 1,
      constant: 1,
      butch: 0,
      smash: 0,
      mass: 0
    }
  ) {
    const { currentValue, perkLevel, constant, butch, smash, mass } = params;

    return (
      constant *
      Math.round(
        currentValue +
          perkLevel * currentValue +
          butch * currentValue +
          smash * currentValue +
          mass * currentValue
      )
    );
  }

  calculateWeaponDamage(
    parameters = {
      perkLevel: 1,
      isButcher: false,
      isMassacre: false,
      isSmash: false
    }
  ) {
    const b = this.baseData;
    const { perkLevel, isButcher, isMassacre, isSmash } = parameters;
    const plvl = perkLevel * 0.01;

    const convertToResult = calc => {
      const params = {
        currentValue: b[calc.baseLabel],
        perkLevel: plvl,
        constant: calc.const,
        butch: isButcher && calc.considerButch ? b.butch : 0,
        smash: isSmash && calc.considerSmash ? b.smash : 0,
        mass: isMassacre && calc.considerMass ? b.mass : 0
      };

      return {
        resultLabel: calc.resultLabel,
        result: this._calculateBasicWeaponDamage(params)
      };
    };

    const combineToResult = (acc, res) => {
      acc[res.resultLabel] = res.result;
      return acc;
    };

    return this.formulaParams.map(convertToResult).reduce(combineToResult, {});
  }
}

export default new BerserkerWeaponsService();
