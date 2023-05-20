import { createAsyncThunk } from "@reduxjs/toolkit"
import { todoDbService } from "services";
import { TodoNote } from "types"

export const createNewTodo = createAsyncThunk(
  'todos/createNewTodo',
  async (note: TodoNote) => {
    await todoDbService.postTodo(note);

    return await todoDbService.getTodos();
  }
)