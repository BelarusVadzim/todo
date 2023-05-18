import { deleteTodo } from "./deleteTodo";
import { postTodo } from "./postTodo";
import { putTodo } from "./putTodo";
import { putTodos } from "./putTodos";
import { getTodosFiltered } from "./getTodosFiltered";
import { deleteCompletedTodos } from "./deleteCompletedTodos";

const todoDbService = {
    getTodosFiltered,
    putTodos,
    postTodo,
    putTodo,
    deleteTodo,
    deleteCompletedTodos,
}

export default todoDbService;