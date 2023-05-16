import { getTodos } from "./getTodos";
import { setTodos } from "./setTodos";

const todoDbService = {
    getTodos: getTodos,
    setTodos: setTodos,
}

export default todoDbService;