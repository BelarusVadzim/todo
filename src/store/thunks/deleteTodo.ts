import { createAsyncThunk } from "@reduxjs/toolkit"
import { todoDbService } from "services";

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (noteId: number) => {
    await todoDbService.deleteTodo(noteId);
    
    return noteId;
  }
)