import { createAsyncThunk } from "@reduxjs/toolkit"
import { todoDbService } from "services";
import { AppDispatch, RootState } from "store/store";
import { TodoNote } from "types"

export const getTodos = createAsyncThunk<TodoNote[], void, 
{
  state: RootState, 
  dispatch?: AppDispatch
}>
(
    'todos/getTodos',
    async (_, thunkAPI) => {
      console.log('getTodos thunk')

      const filter = thunkAPI.getState().todo.filter;

      console.log('filter: ' + filter);

      return await todoDbService.getTodosFiltered(filter);
    }
)