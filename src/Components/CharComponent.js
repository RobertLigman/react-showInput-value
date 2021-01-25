import React from "react";
const CharComponent = (props) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAling: "center",
    margin: "16px",
    border: "1px solid black",
  };

  return (
    <li style={style} onClick={props.click}>
      {props.letter}
    </li>
  );
};
export default CharComponent;
