import * as React from "react";
import { Fragment } from "react";
import ZombieInfo from "./ZombieInfo";

export const ZEDTable = ({
  data = {
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
}) => {
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const renderHealthRow = rowData => {
    return (
      <tr
        key={rowData.name}
        data-toggle="tooltip"
        data-placement="top"
        title={ZombieInfo[rowData.name].tooltip}
      >
        <td>{capitalizeFirstLetter(rowData.name)}</td>
        <td>
          <span>{rowData.health}</span>
        </td>
        <td>
          <span>{rowData.headHealth}</span>
        </td>
      </tr>
    );
  };

  return (
    <Fragment>
      <h3 className="sub-header">ZEDS</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ZED</th>
              <th>Health</th>
              <th>Head Health</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data)
              .map(key => ({ name: key, ...data[key] }))
              .map(renderHealthRow)}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
