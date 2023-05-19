import { createAsyncThunk } from "@reduxjs/toolkit"
import { todoDbService } from "services";
import { AppDispatch, RootState } from "store/store";
import { TodoNote } from "types";

export const deleteTodo = createAsyncThunk<TodoNote[], number, 
{
  state: RootState, 
  dispatch?: AppDispatch
}>(
  'todos/deleteTodo',
  async (noteId: number, thunkAPI) => {
    await todoDbService.deleteTodo(noteId);
    
    const filter = thunkAPI.getState().todo.filter;

    return await todoDbService.getTodosFiltered(filter);
  }
)