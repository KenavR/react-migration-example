import * as React from "react";

export const DifficultySelector = ({
  selected = "normal",
  difficulties = [
    { title: "Normal", value: "normal" },
    { title: "Hard", value: "hard" },
    { title: "Suicidal", value: "suicidal" },
    { title: "HOE", value: "hoe" }
  ],
  onUpdate = () => {}
}) => {
  const renderDifficultyRadio = difficulty => {
    const { title, value } = difficulty;

    return (
      <label className="radio-inline" key={value}>
        <input
          type="radio"
          name="difficulty"
          id="normaldiff"
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
      <legend>Difficulty</legend>
      {difficulties.map(renderDifficultyRadio)}
    </fieldset>
  );
};

/*DifficultySelector.propTypes = {
  difficulties: PropTypes.array,
  onUpdate: PropTypes.func
};*/
