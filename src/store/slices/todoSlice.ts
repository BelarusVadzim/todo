import { createSlice } from "@reduxjs/toolkit";
import {
  createNewTodo,
  deleteTodo,
  editTodo,
  getTodos,
  setAllTodos,
} from "store/thunks";
import { deleteCompletedTodos } from "store/thunks/deleteCompletedTodos";
import { TodoNote } from "types";

type TodoState = {
  todos: TodoNote[];
};

function getInitialState(): TodoState {
  return {
    todos: [],
  };
}

const initialState = getInitialState();

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(createNewTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(setAllTodos.pending, (state, action) => {
        state.todos = action.meta.arg;
      })
      .addCase(setAllTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos = action.payload;
      })
      .addCase(deleteCompletedTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      });
  },
});

export default todoSlice.reducer;
