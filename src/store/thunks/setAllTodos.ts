import { createAsyncThunk } from "@reduxjs/toolkit"
import { todoDbService } from "services";
import { TodoNote } from "types"

export const setAllTodos = createAsyncThunk(
    'todos/setAllTodos',
    async (todoList: TodoNote[]) => {
      console.log('setAllTodos thunk')

      await todoDbService.putTodos(todoList);
      
      return todoList
    }
)