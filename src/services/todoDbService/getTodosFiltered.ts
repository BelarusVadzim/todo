import { TodoNote } from "types";
import { getTodos } from "./getTodos";
import { filterTypes } from "constants/filterTypes";

export const getTodosFiltered = async (filter?: string): Promise<TodoNote[]> => {
    const allTodos = await getTodos();

    switch (filter) {
        case filterTypes.Active:
            return allTodos.filter(x => !x.done);
        case filterTypes.Completed:
            return allTodos.filter(x => x.done);
        default:
            return allTodos;
    }
}