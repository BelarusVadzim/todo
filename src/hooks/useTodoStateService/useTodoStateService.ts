import { filterTypes } from "constants/filterTypes";
import { useAppDispatch, useAppSelector } from "store";
import {
  getTodos,
  createNewTodo,
  setAllTodos,
  editTodo,
  deleteTodo,
  deleteCompletedTodos,
} from "store/thunks";
import { TodoNote } from "types";

const useTodoStateService = () => {
  const appDispatch = useAppDispatch();

  const dispatchTodoListLoaded = () => {
    appDispatch(getTodos());
  };

  const dispatchTodoListUpdated = (todoList: TodoNote[]) => {
    appDispatch(setAllTodos(todoList));
  };

  const dispatchTodoItemCreated = (text: string) => {
    appDispatch(createNewTodo({ text }));
  };

  const dispatchTodoItemEdited = (todoItem: TodoNote) => {
    appDispatch(editTodo(todoItem));
  };

  const dispatchTodoItemDeleted = (todoItemId: number) => {
    appDispatch(deleteTodo(todoItemId));
  };

  const dispatchCompletedTodosDeleted = () => {
    appDispatch(deleteCompletedTodos());
  };

  const todos = useAppSelector((state) => {
    const filter = state.application.filter;
    switch (filter) {
      case filterTypes.Active:
          return state.todo.todos.filter(x => !x.done);
      case filterTypes.Completed:
          return state.todo.todos.filter(x => x.done);
      default:
          return state.todo.todos;
    }
  });

  return {
    dispatchTodoListLoaded,
    dispatchTodoListUpdated,
    dispatchTodoItemCreated,
    dispatchTodoItemEdited,
    dispatchTodoItemDeleted,
    dispatchCompletedTodosDeleted,
    todos,
  };
};

export default useTodoStateService;
