import { React, useState } from "react";

const Constraint = () => {
  const [showValue, setShowValue] = useState(false);
  const [showMinMax, setShowMinMax] = useState(false);
  const onlyValue = () => {
    setShowValue(true);
    setShowMinMax(false);
  };
  const constraintValue = () => {
    setShowMinMax(true);
    setShowValue(false);
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
          <input type="text" name="only_value" id="input_val" />
        </div>
      )}
      {showMinMax && (
        <div>
          <label htmlFor="min">Min Value: </label>
          <input type="text" name="min" id="min" />
          <br />
          <label htmlFor="max">Max Value: </label>
          <input type="text" name="max" id="max" />
        </div>
      )}
    </div>
  );
};

export default Constraint;
