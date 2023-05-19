import { useAppDispatch, useAppSelector } from "store";
import { setFilter } from "store/slices/todoSlice";
import {
  getTodos,
  createNewTodo,
  setAllTodos,
  editTodo,
  deleteTodo,
  deleteCompletedTodos,
} from "store/thunks";
import { TodoNote } from "types";

const useDataService = () => {
  const appDispatch = useAppDispatch();

  const dispatchGetTodoList = () => {
    appDispatch(getTodos());
  };

  const dispatchSetTodoList = (todoList: TodoNote[]) => {
    appDispatch(setAllTodos(todoList));
  };

  const dispatchCreateNewTodoItem = (text: string) => {
    appDispatch(createNewTodo({ text }));
  };

  const dispatchEditTodoItem = (todoItem: TodoNote) => {
    appDispatch(editTodo(todoItem));
  };

  const dispatchDeleteTodoItem = (todoItemId: number) => {
    appDispatch(deleteTodo(todoItemId));
  };

  const dispatchSetFilter= (filter?: string) => {
    appDispatch(setFilter(filter));
  };

  const dispatchDeleteCompletedTodos = () => {
    appDispatch(deleteCompletedTodos());
  };

  const todosState = useAppSelector((state) => {
    return state.todo.todos;
  });

  const todoFilter = useAppSelector((state) => {
    return state.todo.filter;
  });

  const isAppInitialised = useAppSelector((state) => {
    return state.todo.appInitialised;
  });

  return {
    dispatchGetTodoList,
    dispatchSetTodoList,
    dispatchCreateNewTodoItem,
    dispatchEditTodoItem,
    dispatchDeleteTodoItem,
    dispatchDeleteCompletedTodos,
    dispatchSetFilter,
    todosState,
    todoFilter,
    isAppInitialised,
  };
};

export default useDataService;
