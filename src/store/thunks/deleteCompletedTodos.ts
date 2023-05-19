import { createAsyncThunk } from "@reduxjs/toolkit"
import { todoDbService } from "services";
import { AppDispatch, RootState } from "store/store";
import { TodoNote } from "types";

export const deleteCompletedTodos = createAsyncThunk<TodoNote[], void, 
{
  state: RootState, 
  dispatch?: AppDispatch
}>(
  'todos/deleteCompletedTodos',
  async (_, thunkAPI) => {
    await todoDbService.deleteCompletedTodos();

    const filter = thunkAPI.getState().todo.filter;

    return await todoDbService.getTodosFiltered(filter);
  }
)