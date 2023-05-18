import { createAsyncThunk } from "@reduxjs/toolkit"
import { todoDbService } from "services";
import { TodoNote } from "types"

export const createNewTodo = createAsyncThunk(
  'todos/createNewTodo',
  async (note: TodoNote) => {
    return await todoDbService.postTodo(note);
  }
)