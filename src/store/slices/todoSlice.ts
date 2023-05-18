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

// const USERNAME_KEY = 'USERNAME_KEY'
// const USER_ID = 'USER_ID'
// const TEST_TEXT = 'TEST_TEX'

type ISetUserType = {
  email: string;
  id?: string;
};

type TodoState = {
  todos: TodoNote[];
  appInitialised: boolean;
};

// const clearlocalStorage = (): void => {
//   localStorage.removeItem('USERNAME_KEY')
//   localStorage.removeItem('USER_ID')
// }

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
    // deleteUser (state) {
    //   // state.userName = ''
    //   // state.id = ''
    //   clearlocalStorage()
    // },
    // setUser (state, action: PayloadAction<ISetUserType>) {
    //   console.log('setUser')
    //   const { email, id } = action.payload
    //   // state.userName = email
    //   // state.id = id
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state, action) => {
        console.log("getAllTodos.pending");
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        console.log(action.payload);
        console.log("getAllTodos.fulfilled");
        state.todos = action.payload;
        state.appInitialised = true;
      })
      .addCase(createNewTodo.pending, (state, action) => {
        console.log("createNewTodo creating");
      })
      .addCase(createNewTodo.fulfilled, (state, action) => {
        console.log("createNewTodo.fulfilled");
        console.log(action.payload);
        state.todos.push(action.payload);
      })
      .addCase(setAllTodos.pending, (state, action) => {
        console.log("setAllTodos.pending");
        state.todos = action.meta.arg;
      })
      .addCase(setAllTodos.fulfilled, (state, action) => {
        console.log("setAllTodos.fulfilled");
        state.todos = action.payload;
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        console.log("editTodo.fulfilled");
        const newList = state.todos.map((x) =>
          x.id === action.payload.id 
            ? action.payload 
            : ({ ...x } as TodoNote)
        );

        state.todos = newList;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        const newList = state.todos.filter(x => x.id !== action.payload);

        state.todos = newList;
      })
      .addCase(deleteCompletedTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      });
  },
});

export default todoSlice.reducer;
