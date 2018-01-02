import * as React from "react";
import { Component } from "react";

export class BerserkerWeaponsSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      perkLevel: 1,
      isButcher: false,
      isMassacre: false,
      isSmash: false
    };
  }

  _updateStateAndParent(update) {
    const { onSettingsChanged } = this.props;
    this.setState(update);
    onSettingsChanged(update);
  }

  handleButcherChange(e) {
    this._updateStateAndParent({ isButcher: e.target.checked || false });
  }

  handleRadioChange(e, label) {
    const update = { isMassacre: false, isSmash: false };
    if (label !== "isNone") {
      update[label] = e.target.checked || false;
    }

    this._updateStateAndParent(update);
  }

  handlePerkLevelChange(e) {
    const update = { perkLevel: parseInt(e.target.value, 10) || 1 };

    this._updateStateAndParent(update);
  }

  _renderOptionRadio({ label, isChecked }) {
    return (
      <label className="radio-inline" key={label}>
        <input
          type="radio"
          name="options"
          checked={isChecked}
          value=""
          className="rButton"
          onChange={e => this.handleRadioChange(e, "is" + label)}
        />{" "}
        {label}
      </label>
    );
  }

  render() {
    const { perkLevel, isButcher, isMassacre, isSmash } = this.state;
    const radios = [
      { label: "None", isChecked: isMassacre === false && isSmash === false },
      { label: "Massacre", isChecked: isMassacre === true },
      { label: "Smash", isChecked: isSmash === true }
    ];
    return (
      <div className="container-fluid">
        <h3 className="sub-header">Set Perk Level and Skill Choices</h3>
        <div className="row">
          <div className="col-xs-6 col-sm-3 col-lg-2">
            <label>
              Perk Level
              <input
                type="number"
                className="equipCatValidation"
                name="perklevel"
                min="1"
                max="25"
                value={perkLevel}
                onChange={e => this.handlePerkLevelChange(e)} // you can either use an arrow function or bind(this) in the constructor and use the function name instead
              />
            </label>
          </div>
          <div className="col-xs-6 col-sm-2 col-lg-1">
            <label>
              <input
                type="checkbox"
                defaultValue={isButcher}
                onChange={e => this.handleButcherChange(e)}
              />Butcher
            </label>
          </div>

          <div className="col-xs-6 col-sm-3 col-lg-3 pull-right">
            <fieldset>{radios.map(o => this._renderOptionRadio(o))}</fieldset>
          </div>
        </div>
      </div>
    );
  }
}
