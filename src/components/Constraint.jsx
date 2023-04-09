import { React, useState } from "react";
import Result from "./Result";

const Constraint = () => {
  const [showValue, setShowValue] = useState(false);
  const [showMinMax, setShowMinMax] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const [click, setClick] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const [minVal, setMin] = useState("");
  const [maxVal, setMax] = useState("");

  const onlyValue = () => {
    setShowValue(true);
    setShowMinMax(false);
    setHasResult(false);
  };
  const constraintValue = () => {
    setShowMinMax(true);
    setShowValue(false);
    setHasResult(false);
  };
  const handleChangeValue = (event) => {
    setinputValue(event.target.value);
  };
  const handleChangemin = (event) => {
    setMin(event.target.value);
  };
  const handleChangemax = (event) => {
    setMax(event.target.value);
  };
  const handleClick = () => {
    setClick(true);
    setHasResult(true);
  };
  return (
    <div>
      <form>
        <p>Please select your Constraint</p>
        <input
          type="radio"
          id="val"
          name="contraint"
          value="value"
          onClick={onlyValue}
        />{" "}
        <label htmlFor="val">Only Value</label>
        <input
          type="radio"
          id="alt"
          name="contraint"
          value="constraint"
          onClick={constraintValue}
        />{" "}
        <label htmlFor="alt">Min and Max Value</label>
      </form>
      {showValue && (
        <div>
          <label htmlFor="input_val">Total number of Inputs: </label>
          <input
            type="text"
            name="only_value"
            id="input_val"
            value={inputValue}
            onChange={handleChangeValue}
          />
          <br />
          <button onClick={handleClick}>Generate</button>
        </div>
      )}
      {showMinMax && (
        <div>
          <label htmlFor="min">Min Value: </label>
          <input
            type="text"
            name="min"
            id="min"
            value={minVal}
            onChange={handleChangemin}
          />
          <br />
          <label htmlFor="max">Max Value: </label>
          <input
            type="text"
            name="max"
            id="max"
            value={maxVal}
            onChange={handleChangemax}
          />
          <br />
          <button onClick={handleClick}>Generate</button>
        </div>
      )}
      {hasResult && (
        <Result
          uptoVal={inputValue}
          minimumVal={minVal}
          maximumVal={maxVal}
          showValue={showValue}
          showMinMax={showMinMax}
          click={click}
        />
      )}
    </div>
  );
};

export default Constraint;
