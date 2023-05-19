import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  createNewTodo,
  deleteTodo,
  editTodo,
  getTodos,
  setAllTodos,
} from "store/thunks";
import { deleteCompletedTodos } from "store/thunks/deleteCompletedTodos";
import { TodoNote } from "types";

// const USERNAME_KEY = 'USERNAME_KEY'
// const USER_ID = 'USER_ID'
// const TEST_TEXT = 'TEST_TEX'

// type ISetUserType = {
//   email: string;
//   id?: string;
// };

type TodoState = {
  todos: TodoNote[];
  appInitialised: boolean;
  filter?: string;
};

function getInitialState(): TodoState {
  return {
    todos: [],
    appInitialised: false,
  };
}

const initialState = getInitialState();

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setFilter (state, action: PayloadAction<string|undefined>) {
      console.log('setFilter');
      console.log(action.payload);

      state.filter = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state, action) => {
        console.log("getAllTodos.pending");
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        console.log("getAllTodos.fulfilled");
        state.todos = action.payload;
        state.appInitialised = true;
      })
      .addCase(createNewTodo.pending, (state, action) => {
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
        // const newList = state.todos.map((x) =>
        //   x.id === action.payload.id 
        //     ? action.payload 
        //     : ({ ...x } as TodoNote)
        // );

        state.todos = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        //const newList = state.todos.filter(x => x.id !== action.payload);

        state.todos = state.todos = action.payload;
      })
      .addCase(deleteCompletedTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      });
  },
});

export const { setFilter } = todoSlice.actions
export default todoSlice.reducer;
