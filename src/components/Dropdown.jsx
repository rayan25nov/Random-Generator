import { React, useState } from "react";
import Styles from "./Dropdown.module.css";
import Constraint from "./Constraint";
const Dropdown = () => {
  const [selectNumber, setSelectNumber] = useState(false);
  const [selectAlphabet, setselectAlphabet] = useState(false);
  const selectFunction = (e) => {
    // alert(e.target.value);
    if (e.target.value == "number") {
      setSelectNumber(true);
      setselectAlphabet(false);
    } else if (e.target.value == "alphabet") {
      setselectAlphabet(true);
      setSelectNumber(false);
    }
  };
  return (
    <div>
      <label className={Styles.label} htmlFor="dropdown">
        Select Number or Alphabet :{" "}
      </label>
      <select
        className={Styles.select}
        name="dropdown"
        id="dropdown"
        onChange={selectFunction}
        required
      >
        <option value="" hidden>
          --select-- &#9661;
        </option>
        <option value="alphabet">Alphabet</option>
        <option value="number">Number</option>
      </select>
      {selectNumber && <Constraint />}
      {selectAlphabet && <Constraint />}
    </div>
  );
};

export default Dropdown;
