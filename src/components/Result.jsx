import React, { useState } from "react";

const Result = (props) => {
  const [randomValue, setRandomValue] = useState(null);
  const [hasValue, setHasvalue] = useState(false);

  function generateRandomNumbers(start, end) {
    const countNum = end - start;
    const result = [];

    while (result.length <= countNum) {
      const randomNumber =
        Math.floor(Math.random() * (end - start + 1)) + start;

      if (!result.includes(randomNumber)) {
        result.push(randomNumber);
      }
    }
    return result;
  }
  // if (props.click) {
  const clickHandler = () => {
    if (props.showValue) {
      const end = props.uptoVal;
      const results = generateRandomNumbers(1, end);
      setRandomValue(results);
    } else if (props.showMinMax) {
      const startVal = parseInt(props.minimumVal);
      const endVal = parseInt(props.maximumVal);
      const results = generateRandomNumbers(startVal, endVal);
      setRandomValue(results);
    }
    setHasvalue(true);
    console.log(
      props.minimumVal + " " + props.maximumVal + " " + props.uptoVal
    );
  };
  return (
    <div>
      <button onClick={clickHandler}>Generate</button>
      <p>
        {hasValue &&
          "All the Generated values are :" +
            randomValue.map((res) => `${res} `)}
      </p>
    </div>
  );
};

export default Result;
