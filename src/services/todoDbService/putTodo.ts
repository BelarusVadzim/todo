import { TodoNote } from "types";
import { getTodos } from "./getTodos";
import { putTodos } from "./putTodos";

export const putTodo = async (todo: TodoNote) => {
    const todos = await getTodos();

    const todosNewList = todos.map((x) =>
        x.id === todo.id 
            ? todo 
            : x
    );
    
    console.log(todosNewList);
    await putTodos(todosNewList);
}