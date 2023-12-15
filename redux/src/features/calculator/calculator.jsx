import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  sumNum } from "./calculatorSlice";

const Calculator = () => {
    const calculator = useSelector((state) => state.calculator.value);
    const dispatch = useDispatch();
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
  return (
    <div>
      <input type="text" value={num1} onChange={(e)=> setNum1(e.target.value)}/>
      <input type="text"value={num2} onChange={(e)=> setNum2(e.target.value)}/>
      <button onClick={() => dispatch(sumNum([num1,num2]))}>+</button>
      <button onClick={() => dispatch(minus([num1,num2]))}>-</button>
      <button onClick={() => dispatch(divide([num1,num2]))}>/</button>
      <button onClick={() => dispatch(multiply([num1,num2]))}>*</button>
      <p>{calculator}</p>
    </div>
  );
};

export default Calculator;
