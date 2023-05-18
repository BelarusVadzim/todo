import { TodoNote } from "types";
import { TODOS } from "./constants";
import { delayEmulator } from "./delayEmulator";

export const putTodos = async (todos: TodoNote[]) => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
    await delayEmulator.sleep(100);
}