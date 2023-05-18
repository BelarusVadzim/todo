import { getTodos } from "./getTodos";
import { putTodos } from "./putTodos";

export const deleteCompletedTodos = async () => {
    const todos = await getTodos();

    const newTodos = todos.filter(x => !x.done);

    console.log(todos);

    await putTodos(newTodos);

    return newTodos;
}