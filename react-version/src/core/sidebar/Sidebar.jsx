import * as React from "react";

import "./Sidebar.css";

export const Sidebar = ({
  path = "",
  entries = [
    { label: "Overview", path: "" },
    { label: "Berserker", path: "berserker" },
    { label: "Commando", path: "commando" },
    { label: "Demolitionist", path: "demolitionist" },
    { label: "Field Medic", path: "field-medic" },
    { label: "Firebug", path: "firebug" },
    { label: "Gunslinger", path: "gunslinger" },
    { label: "Sharpshooter", path: "sharpshooter" },
    { label: "Support", path: "support" },
    { label: "Survivalist", path: "survivalist" },
    { label: "SWAT", path: "swat" }
  ]
}) => {
  const isActive = currentLink => {
    return currentLink === path;
  };

  const highlightIfActive = currentLink => {
    return isActive(currentLink) ? "active" : "";
  };

  const renderEntry = entry => {
    const { label, path } = entry;

    return (
      <li className={highlightIfActive(path)} key={label}>
        <a href={"#"+path}>{label} </a>
      </li>
    );
  };

  return (
    <div className="col-sm-3 col-md-2 sidebar">
      <ul className="nav nav-sidebar">
        {entries.map(renderEntry)}
      </ul>
    </div>
  );
};
