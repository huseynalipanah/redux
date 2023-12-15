import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
import calculatorReducer from "../features/calculator/calculatorSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    calculator: calculatorReducer,
  },
});
