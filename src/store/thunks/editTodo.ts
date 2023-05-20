import { createAsyncThunk } from "@reduxjs/toolkit"
import { todoDbService } from "services";
import { TodoNote } from "types"

export const editTodo = createAsyncThunk(
  'todos/editTodo',
  async (note: TodoNote) => {
    await todoDbService.putTodo(note);
    
    return await todoDbService.getTodos();
  }
)