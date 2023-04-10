import React, { useState } from "react";
import "./Results.css";

const ResultsNumber = (props) => {
  const [randomValue, setRandomValue] = useState(null);
  const [rubbishInput, setRubbishInput] = useState("");
  const [hasRubbishInput, sethasRubbishInput] = useState(false);
  const [hasValue, setHasvalue] = useState(false);

  function generateRandomNumbers(start, end) {
    const countNum = end - start;
    const result = [];

    while (result.length <= countNum) {
      const randomNumber = Math.floor(Math.random() * (countNum + 1)) + start;

      if (!result.includes(randomNumber)) {
        result.push(randomNumber);
      }
    }
    return result;
  }

  const clickHandler = () => {
    if (props.selectNumber && props.showValue) {
      const end = props.uptoVal;
      const results = generateRandomNumbers(1, end);
      setRandomValue(results);
      setHasvalue(true);
      sethasRubbishInput(false);
    } else if (props.selectNumber && props.showMinMax) {
      const startVal = parseInt(props.minimumVal);
      const endVal = parseInt(props.maximumVal);
      if (startVal >= endVal) {
        setRubbishInput(
          "Maximum value should always be greater than minimum value"
        );
        sethasRubbishInput(true);
      } else {
        const results = generateRandomNumbers(startVal, endVal);
        setRandomValue(results);
        setHasvalue(true);
        sethasRubbishInput(false);
      }
    }
  };
  return (
    <div>
      <button onClick={clickHandler}>Generate</button>

      <p>
        {hasValue &&
          "All the Generated values are :" +
            randomValue.map((res) => `${res} `)}
        {hasRubbishInput && rubbishInput}
      </p>
    </div>
  );
};

export default ResultsNumber;
