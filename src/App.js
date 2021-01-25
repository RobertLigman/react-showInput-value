// import logo from "./logo.svg";
import React, { useState } from "react";
import ValidationComponent from "./Components/ValidationComponent";
import CharComponent from "./Components/CharComponent";
import "./App.css";

function App() {
  const [inputLength, setInputLength] = useState("");
  const [inputText, setInputText] = useState("");
  // console.log(number);
  const inputTextChangeHandler = (e) => {
    setInputLength(e.target.value.length);
    setInputText(e.target.value);
  };
  const deleteHandler = (index) => {
    const text = inputText.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    setInputText(updatedText);
  };
  console.log(inputText.split(""));
  return (
    <>
      <input onChange={inputTextChangeHandler} />
      <p>{inputLength}</p>
      <ValidationComponent textLength={inputLength} />
      {inputText.split("").map((element, index) => {
        return (
          <CharComponent letter={element} click={() => deleteHandler(index)} />
        );
      })}
    </>
  );
}

export default App;
