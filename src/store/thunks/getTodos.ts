import { createAsyncThunk } from "@reduxjs/toolkit"
import { todoDbService } from "services";
import { TodoNote } from "types"

export const getTodos = createAsyncThunk(
    'todos/getTodos',
    async (filter?: string) => {
      console.log('getTodos thunk')

      const todoNotes: TodoNote[] = await todoDbService.getTodosFiltered(filter);
      
      return todoNotes;
    }
)