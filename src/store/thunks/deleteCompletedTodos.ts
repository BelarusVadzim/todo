import { createAsyncThunk } from "@reduxjs/toolkit"
import { todoDbService } from "services";

export const deleteCompletedTodos = createAsyncThunk(
  'todos/deleteCompletedTodos',
  async () => {
    return await todoDbService.deleteCompletedTodos();
  }
)