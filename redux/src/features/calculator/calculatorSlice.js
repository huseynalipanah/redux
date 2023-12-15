import { createSlice } from '@reduxjs/toolkit'

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: 0
  },
  reducers: {
    sumNum: (state, action) => {
        state.value = +action.payload[0] + +action.payload[1]
      },
      minus: (state, action) => {
        state.value = +action.payload[0] - +action.payload[1]
      },
      divide: (state, action) => {
        state.value = +action.payload[0] / +action.payload[1]
      },
      multiply: (state, action) => {
        state.value = +action.payload[0] * +action.payload[1]
      },
  }
})

export const { sumNum , minus ,divide , multiply}= calculatorSlice.actions

export default calculatorSlice.reducer
