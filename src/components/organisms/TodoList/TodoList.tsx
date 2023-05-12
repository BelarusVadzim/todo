import style from "./TodoList.module.scss";
import {
  NoteEditor,
  TodoItemsList,
  TodoListFooter,
  TodoTitle,
} from "components/molecules";

const TodoList: React.FC = () => (
  <div className={style.todoList}>
    <div className={style.fixedHeader}>
      <TodoTitle className={style.todoTtitle}>TODO</TodoTitle>
      <NoteEditor className={style.noteEditor} />
    </div>
    <TodoItemsList />
    <TodoListFooter />
  </div>
);

export default TodoList;
