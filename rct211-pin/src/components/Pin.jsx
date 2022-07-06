import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Pinitem from "./Pinitem";

const Pin = ({ length, handleotp }) => {
  const inputref = useRef([]);
  const [inputbox] = useState(new Array(length).fill(1));
  const [inputotp, setinputotp] = useState(new Array(length).fill(""));

  const handleChange = (e, i) => {
    inputotp[i] = e.target.value;
    setinputotp(inputotp);

    if (e.target.value.length > 0 && i < length - 1) {
      inputref.current[i + 1].focus();
    }

    console.log(inputotp);
    handleotp(inputotp.join(""));
  };

  const handleBackspace = (e,i) => {
   
    if(i > 0){
      inputref.current[i-1].focus();
    } 
    inputotp[i] = e.target.value;
    setinputotp(inputotp);
    handleotp(inputotp.join(""));
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const data = e.clipboardData.getData("text").split("").filter((item,i) => i < length);
    data.forEach((value,i) => {
      inputotp[i] = value;
      inputref.current[i].value = value;
      if(i < length-1){
        inputref.current[i+1].focus();
    }
  });
  };

  return (
    <div onPaste={handlePaste} style={{ display: "flex", justifyContent: "center" }}>
      {inputbox.map((e, i) => {
        return (
          <Pinitem
            key={i}
            ref={(element) => {
              inputref.current[i] = element;
            }}
            onChange={(e) => handleChange(e, i)}
            onBackspace={(e) => handleBackspace(e, i)}
          />

          //   maxLength={1}
        );
      })}
    </div>
  );
};
Pin.protoTypes = {
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};

export default Pin;
