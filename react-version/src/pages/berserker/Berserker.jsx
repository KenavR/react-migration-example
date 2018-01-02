import * as React from "react";
import { Fragment } from "react";
import {
  AdditionalInfo,
  DifficultySelector,
  PlayersSelector,
  ZEDTable
} from "../../core";
import { BerserkerWeaponsSettings } from "./BerserkerWeaponsSettings";

export const Berserker = ({
  formData,
  calculatedWeaponDamage,
  calculatedHealth,
  onZEDSettingsChanged,
  onWeaponsSettingsChanged
}) => {
  const renderMeleeWeapons = () => (
    <section>
      <h3 className="sub-header">Melee Weapons</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Weapon Name</th>
              <th>Base Damages for Light/Heavy/Alt Swings</th>
              <th>Light Attack w/ perks</th>
              <th>Heavy Attack w/ perks</th>
              <th>Alt Attack w/ perks</th>
            </tr>
          </thead>
          <tbody>
            <tr
              data-toggle="tooltip"
              data-placement="top"
              title="Primary - Slashing<br />Alt - Bludgeon"
            >
              <td>Crovel Survival Tool</td>
              <td>49/86/15</td>
              <td>
                <span>{calculatedWeaponDamage.cst1}</span>
              </td>
              <td>
                <span>{calculatedWeaponDamage.cst2}</span>
              </td>
              <td>
                <span>{calculatedWeaponDamage.cst3}</span> Bash Attack
              </td>
            </tr>
            <tr
              data-toggle="tooltip"
              data-placement="top"
              title="Primary - Slashing <br />Stab - Piercing"
            >
              <td>Katana</td>
              <td>68/90/68</td>
              <td>
                <span>{calculatedWeaponDamage.kat1}</span>
              </td>
              <td>
                <span>{calculatedWeaponDamage.kat2}</span>
              </td>
              <td>
                <span>{calculatedWeaponDamage.kat3}</span> Stab Attack
              </td>
            </tr>
            <tr
              data-toggle="tooltip"
              data-placement="top"
              title="Primary - Bludgeon <br />Alt - Explosive"
            >
              <td>Pulverizer</td>
              <td>70/145/528</td>
              <td>
                <span>{calculatedWeaponDamage.pulv1}</span>
              </td>
              <td>
                <span>{calculatedWeaponDamage.pulv2}</span>
              </td>
              <td>
                <span>{calculatedWeaponDamage.pulv3}</span> Heavy w/ explosive
              </td>
            </tr>
            <tr data-toggle="tooltip" data-placement="top" title="Bludgeon">
              <td>Bone Crusher</td>
              <td>63/165/175</td>
              <td>
                <span>{calculatedWeaponDamage.bc1}</span>
              </td>
              <td>
                <span>{calculatedWeaponDamage.bc2}</span>
              </td>
              <td>
                <span>{calculatedWeaponDamage.bc3}</span> Bash Attack
              </td>
            </tr>
            <tr
              data-toggle="tooltip"
              data-placement="top"
              title="Primary - Slashing <br />Stab - Piercing"
            >
              <td>Zweihander</td>
              <td>85/195/63</td>
              <td>
                <span>{calculatedWeaponDamage.zwei1}</span>
              </td>
              <td>
                <span>{calculatedWeaponDamage.zwei2}</span>
              </td>
              <td>
                <span>{calculatedWeaponDamage.zwei3}</span> Stab Attack
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );

  const renderProjectileWeapons = () => (
    <section>
      <h3 className="sub-header">Projectile Weapons</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Shotgun</th>
              <th>Base Damage</th>
              <th>Number of pellets</th>
              <th>Scaled Perk Damage</th>
              <th>Full Damage w/ All Pellets</th>
            </tr>
          </thead>
          <tbody>
            <tr
              data-toggle="tooltip"
              data-placement="top"
              title="Primary: Ballistic_Shotgun"
            >
              <td>VLAD-1000 Nailgun</td>
              <td>30</td>
              <td>7</td>
              <td>
                <span className="ng1">{calculatedWeaponDamage.ng1}</span>
              </td>
              <td>
                <span className="ng2">{calculatedWeaponDamage.ng2}</span>
              </td>
            </tr>
            <tr>
              <th>Sawblade Launcher</th>
              <th>Base Damage</th>
              <th>Primary</th>
              <th>Chainsaw Altfire</th>
              <th>Stab</th>
            </tr>
            <tr
              data-toggle="tooltip"
              data-placement="top"
              title="Primary: Slashing"
            >
              <td>Eviscerator</td>
              <td>480/29/90</td>
              <td>
                <span className="evis1">{calculatedWeaponDamage.evis1}</span>
              </td>
              <td>
                <span className="evis2">{calculatedWeaponDamage.evis2}</span>
              </td>
              <td>
                <span className="evis3">{calculatedWeaponDamage.evis3}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );

  const renderHealthSettings = () => (
    <div className="container-fluid">
      <div className="row">
        <DifficultySelector
          selected={formData.difficulty}
          onUpdate={v => onZEDSettingsChanged({ difficulty: v })}
        />
      </div>

      <div className="row">
        <PlayersSelector
          selected={formData.players + "play"}
          onUpdate={v =>
            onZEDSettingsChanged({ players: parseInt(v, 10) || 1 })
          }
        />
      </div>
    </div>
  );

  return (
    <Fragment>
      <BerserkerWeaponsSettings onSettingsChanged={onWeaponsSettingsChanged} />
      {renderMeleeWeapons()}
      {renderProjectileWeapons()}
      <AdditionalInfo>
        <ul>
          <li>Berserker's damage is rounded</li>
          <li>
            All Berserker damage numbers are taken here at their highest value
          </li>
          <li>
            Actual in-game damage dependent on melee tracers see
            <a href="https://docs.google.com/spreadsheets/d/1GDpg2mN1l_86U_RaDug0glFx8cZCuErwxZLiBKl9SyY/edit#gid=2068776317&range=A213:B213">
              here
            </a>
          </li>
        </ul>
      </AdditionalInfo>

      {renderHealthSettings()}
      <ZEDTable data={calculatedHealth} />

      <AdditionalInfo>
        <h3>Applying Damage to ZED formula</h3>
        <ol>
          <li>
            Calculate damage in weapon-specific formula applies to melee weapon
            swing direction
          </li>
          <li> The damage is then rounded down based on the hitzone.</li>
          For example, if you shoot a Bloat's cleavers the formula would be
          NewDmg = (BaseWeaponDmg * .2) in most cases this causes a base damage
          reduction
          <li>
            ZED Vulnerability or Resistance to Damage types is then applied
          </li>
          <li>Check if ZED is blocking, and if so, adjust Damage value</li>
          <li>Perk damage values are applied at this step.</li>
          <li>
            Check for Field Medic Injection buff Damage = Roundup (Damage x
            Focus Injection Mod)
          </li>
          <li>
            Zed
            <a href="https://docs.google.com/spreadsheets/d/1GDpg2mN1l_86U_RaDug0glFx8cZCuErwxZLiBKl9SyY/edit#gid=2068776317&range=A122:B122">
              Decapitation{" "}
            </a>Decapitation
            <a href="https://docs.google.com/spreadsheets/d/1GDpg2mN1l_86U_RaDug0glFx8cZCuErwxZLiBKl9SyY/edit#gid=2068776317&range=A281:E281">
              check
            </a>{" "}
            is done
          </li>
        </ol>
        <strong>TLDR</strong>: Start with weapon base damage
        <ol>
          <li>
            <strong>Skip</strong> if using a
            <strong>Ranged Weapon</strong>
          </li>
          <li>Hitzone Modifier</li>
          <li>Apply dmg type resistances/weaknesses</li>
          <li>
            <strong>Skip</strong> if ZED
            <strong>Isn't Blocking</strong>
          </li>
          <li>Perks applied to base damage here</li>
          <li>Check if you have medic buff</li>
          <li>Checks for ZED head pop</li>
        </ol>
        Other Notes
        <ul>
          <li>
            Information above paraphrased from the spreadsheet at this
            <a href="https://docs.google.com/spreadsheets/d/1GDpg2mN1l_86U_RaDug0glFx8cZCuErwxZLiBKl9SyY/edit#gid=2068776317&range=A271:B271">
              section
            </a>
          </li>
          <li>
            The damage type Resistances and Vulnerabilities are applied BEFORE
            perk bonuses (This can be very significant to the actual damage
            done)
          </li>
          <li>
            Slashing Damage Resistance does not apply to Class knives on cyst,
            Alpha Clot and Slasher
          </li>
          <li>
            Exact damage type for each weapon found on corresponding class pages
          </li>
          <li>
            If the ZED isn't Resistant or Vulnerable to a damage type, you can
            skip step 3 as the modifier is a neutral x 1.0 (nothing changes){" "}
          </li>
          <li>Sirens and Bloats have no vulnerable Damage Types</li>
          <li>
            If the tooltip for each ZED does not list a damage type for
            Resistances or Vulnerabilities, it is neutral
          </li>
        </ul>
      </AdditionalInfo>
    </Fragment>
  );
};
