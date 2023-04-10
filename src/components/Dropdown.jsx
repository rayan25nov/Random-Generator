import { React, useState } from "react";
import Styles from "./Dropdown.module.css";
import Constraint from "./Constraint";

const Dropdown = () => {
  // state to determine if user selects number
  const [selectNumber, setSelectNumber] = useState(false);
  // state to determine if user selects alphabet
  const [selectAlphabet, setselectAlphabet] = useState(false);

  // function to handle the select dropdown value change
  const selectFunction = (e) => {
    if (e.target.value == "number") {
      // set selectNumber state to true when user selects number
      setSelectNumber(true); 
      // set selectAlphabet state to false when user selects number
      setselectAlphabet(false);
    } else if (e.target.value == "alphabet") {
      // set selectAlphabet state to true when user selects alphabet
      setselectAlphabet(true); 
      // set selectNumber state to false when user selects alphabet
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
      {selectNumber && <Constraint selectNumber={selectNumber} />}{" "}
      {/* if selectNumber state is true, render the Constraint component passing selectNumber props*/}
      {selectAlphabet && <Constraint selectAlphabet={selectAlphabet} />}{" "}
      {/* if selectAlphabet state is true, render the Constraint component passing selectAlphabet props*/}
    </div>
  );
};

export default Dropdown;

