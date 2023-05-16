import { TodoItemsListMenu } from "components/molecules/TodoItemsListMenu";
import style from "./TodoList.module.scss";
import {
  NoteEditor,
  ScrolableSection,
  TodoListFooter,
  TodoTitle,
} from "components/molecules";

// const TodoList: React.FC = () => {
//   return (
//     <div className={style.todoList}>
//       <div className={style.fixedHeader}>
//         <TodoTitle className={style.todoTtitle}>TODO</TodoTitle>
//         <NoteEditor className={style.noteEditor} />
//       </div>
//       <div className={style.container}>
//         <TodoItemsList />
//         <TodoItemsListMenu />
//       </div>
//       <div className={style.parent}>
//         <div className={style.child1} />
//         <div className={style.child2} />
//       </div>
//       <TodoListFooter />
//     </div>
//   );
// };

const TodoList: React.FC = () => {
  return (
    <div className={style.todoList}>
      <TodoTitle className={style.todoTtitle}>TODO</TodoTitle>
      <NoteEditor className={style.noteEditor} />
      <div className={style.listContainer}>
        <ScrolableSection />
        <TodoItemsListMenu />
      </div>
      <TodoListFooter />
    </div>
  );
};

export default TodoList;
