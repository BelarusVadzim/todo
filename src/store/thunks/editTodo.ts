import { createAsyncThunk } from "@reduxjs/toolkit"
import { todoDbService } from "services";
import { AppDispatch, RootState } from "store/store";
import { TodoNote } from "types"

export const editTodo = createAsyncThunk<TodoNote[], TodoNote, 
{
  state: RootState, 
  dispatch?: AppDispatch
}>(
  'todos/editTodo',
  async (note: TodoNote, thunkAPI) => {
    await todoDbService.putTodo(note);
    
    const filter = thunkAPI.getState().todo.filter;

    return await todoDbService.getTodosFiltered(filter);
  }
)