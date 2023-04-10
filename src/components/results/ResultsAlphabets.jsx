import React, { useState } from "react";
import "./Results.css";

const ResultsAlphabets = (props) => {
  const [randomValue, setRandomValue] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasValue, setHasValue] = useState(false);

  function generateRandomAlphabets(start, end) {
    // Check if start and end values are valid strings containing only alphabetical characters
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(start) || !regex.test(end)) {
      throw new Error(
        "Start and end values must be valid strings containing only alphabetical characters"
      );
    }

    let startCharCode = start.toUpperCase().charCodeAt(0);
    let endCharCode = end.toUpperCase().charCodeAt(0);

    // Ensure start is less than or equal to end
    if (startCharCode > endCharCode) {
      [startCharCode, endCharCode] = [endCharCode, startCharCode];
    }

    const countAlphabets = endCharCode - startCharCode + 1;
    const result = [];

    while (result.length < countAlphabets) {
      const randomCharCode =
        Math.floor(Math.random() * countAlphabets) + startCharCode;

      if (!result.includes(String.fromCharCode(randomCharCode))) {
        const randomAlphabet = String.fromCharCode(randomCharCode);
        result.push(randomAlphabet);
      }
    }

    return result;
  }

  const clickHandler = () => {
    if (props.selectAlphabet && props.showValue) {
      const end = props.uptoVal;
      try {
        const results = generateRandomAlphabets("A", end);
        setRandomValue(results);
        setHasValue(true);
        setErrorMessage("");
      } catch (error) {
        setRandomValue(null);
        setHasValue(false);
        setErrorMessage(error.message);
      }
    } else if (props.selectAlphabet && props.showMinMax) {
      const startVal = props.minimumVal;
      const endVal = props.maximumVal;
      try {
        const results = generateRandomAlphabets(startVal, endVal);
        setRandomValue(results);
        setHasValue(true);
        setErrorMessage("");
      } catch (error) {
        setRandomValue(null);
        setHasValue(false);
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div>
      <button onClick={clickHandler}>Generate</button>
      {hasValue && (
        <p>
          All the Generated values are: {randomValue.map((res) => `${res} `)}
        </p>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default ResultsAlphabets;
