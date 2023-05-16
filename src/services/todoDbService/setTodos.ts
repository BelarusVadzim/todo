import { TodoNote } from "types";
import { TODOS } from "./constants";
import { delayEmulator } from "./delayEmulator";

export const setTodos = async (todos: TodoNote[]) => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
    await delayEmulator.sleep(500);
}