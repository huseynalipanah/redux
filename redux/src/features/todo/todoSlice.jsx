import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload)
    },
    removeTodo: (state , action) => {
        state.value = state.value.filter(x => x.id !== action.payload)
    },
    editTodo: (state , action) => {
        const index = state.value.findIndex(x => x.id === action.payload.id);
        if (index !== -1) {
          state.value[index] = action.payload;
        }
    }
  }
})

export const {addTodo , removeTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer
