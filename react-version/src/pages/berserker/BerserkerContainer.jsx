import * as React from "react";
import { Component } from "react";
import { Berserker } from "./Berserker";
import { BerserkerWeaponsService, ZEDHealthService } from "../../services";

export class BerserkerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        perkLevel: 1,
        isButcher: false,
        isMassacre: false,
        isSmash: false,
        difficulty: "normal",
        players: 1
      },
      calculatedWeaponDamage: {
        cst1: 0,
        cst2: 0,
        cst3: 0,
        kat1: 0,
        kat2: 0,
        kat3: 0,
        pulv1: 0,
        pulv2: 0,
        pulv3: 0,
        zwei1: 0,
        zwei2: 0,
        zwei3: 0,
        evis1: 0,
        evis2: 0,
        evis3: 0,
        bc1: 0,
        bc2: 0,
        bc3: 0,
        ng1: 0,
        ng2: 0
      },
      calculatedHealth: {
        cyst: {
          health: 0,
          headHealth: 0
        },
        alphaClot: {
          health: 0,
          headHealth: 0
        },
        slasher: {
          health: 0,
          headHealth: 0
        },
        bloat: {
          health: 0,
          headHealth: 0
        },
        crawler: {
          health: 0,
          headHealth: 0
        },
        gorefast: {
          health: 0,
          headHealth: 0
        },
        gorefiend: {
          health: 0,
          headHealth: 0
        },
        stalker: {
          health: 0,
          headHealth: 0
        },
        husk: {
          health: 0,
          headHealth: 0
        },
        siren: {
          health: 0,
          headHealth: 0
        },
        scrake: {
          health: 0,
          headHealth: 0
        },
        fleshpound: {
          health: 0,
          headHealth: 0
        }
      }
    };
  }

  componentWillMount() {
    this.setState({
      calculatedWeaponDamage: this._calculateWeaponDamage(this.state.formData),
      calculatedHealth: this._calculatHealth(this.state.formData)
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    /* FormData change doesn't require a re-render */
    /* re-render only when calculations have changed */

    return (
      this.state.calculatedWeaponDamage !== nextState.calculatedWeaponDamage
    );
  }

  _calculateWeaponDamage(formData) {
    return BerserkerWeaponsService.calculateWeaponDamage(formData);
  }

  _calculatHealth(formData) {
    return ZEDHealthService.calculateHealth(formData);
  }

  _updateFormData(update) {
    const updatedFormData = Object.assign({}, this.state.formData, update);
    this.setState({
      formData: updatedFormData,
      calculatedWeaponDamage: this._calculateWeaponDamage(updatedFormData),
      calculatedHealth: this._calculatHealth(updatedFormData)
    });
  }

  updateWeaponsSettings(update) {
    this._updateFormData(update);
  }

  updateZEDSettings(update) {
    this._updateFormData(update);
  }

  render() {
    const { formData, calculatedWeaponDamage, calculatedHealth } = this.state;

    return (
      <Berserker
        formData={formData}
        calculatedWeaponDamage={calculatedWeaponDamage}
        calculatedHealth={calculatedHealth}
        onZEDSettingsChanged={u => this.updateZEDSettings(u)}
        onWeaponsSettingsChanged={u => this.updateWeaponsSettings(u)}
      />
    );
  }
}
