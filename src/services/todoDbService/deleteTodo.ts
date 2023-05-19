import { getTodos } from "./getTodos";
import { putTodos } from "./putTodos";

export const deleteTodo = async (todoId: number) => {
    const todos = await getTodos();

    const newTodos = todos.filter(x => x.id !== todoId);

    await putTodos(newTodos);
}