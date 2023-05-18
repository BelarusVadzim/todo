import { TodoNote } from "types";
import { getTodos } from "./getTodos";
import { putTodos } from "./putTodos";

export const postTodo = async (todo: TodoNote) => {
    const todos = await getTodos();
    const newId = todos.map(x=>x.id ?? 0)
                    .reduce((prev, current)=>{
        return prev <= current 
            ? current 
            : prev }, 0) + 1;
    const newTodo = {...todo, id:newId };
    todos.push(newTodo);
    
    console.log(todos);
    await putTodos(todos);

    return newTodo;
}