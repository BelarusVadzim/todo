import { createAsyncThunk } from "@reduxjs/toolkit"
import { todoDbService } from "services";
import { AppDispatch, RootState } from "store/store";
import { TodoNote } from "types"

export const createNewTodo = createAsyncThunk<TodoNote[], TodoNote, 
{
  state: RootState, 
  dispatch?: AppDispatch
}>(
  'todos/createNewTodo',
  async (note: TodoNote, thunkAPI) => {
    await todoDbService.postTodo(note);

    const filter = thunkAPI.getState().todo.filter;

    return await todoDbService.getTodosFiltered(filter);
  }
)