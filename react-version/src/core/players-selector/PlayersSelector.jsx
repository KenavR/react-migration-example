import * as React from "react";

export const PlayersSelector = ({
  selected = "1play",
  players = [
    { title: "1", value: "1play" },
    { title: "2", value: "2play" },
    { title: "3", value: "3play" },
    { title: "4", value: "4play" },
    { title: "5", value: "5play" },
    { title: "6", value: "6play" }
  ],
  onUpdate = () => {}
}) => {
  const renderPlayerRadio = player => {
    const { title, value } = player;

    return (
      <label className="radio-inline" key={value}>
        <input
          type="radio"
          name="numberofplayers"
          value={value}
          checked={value === selected}
          className="rButton"
          onChange={() => onUpdate(value)}
        />{" "}
        {title}
      </label>
    );
  };

  return (
    <fieldset>
      <legend>Choose Number of players</legend>
      {players.map(renderPlayerRadio)}
    </fieldset>
  );
};
