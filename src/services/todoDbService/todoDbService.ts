import { deleteTodo } from "./deleteTodo";
import { postTodo } from "./postTodo";
import { putTodo } from "./putTodo";
import { putTodos } from "./putTodos";
import { deleteCompletedTodos } from "./deleteCompletedTodos";
import { getTodos } from "./getTodos";

const todoDbService = {
    putTodos,
    postTodo,
    putTodo,
    deleteTodo,
    deleteCompletedTodos,
    getTodos,
}

export default todoDbService;