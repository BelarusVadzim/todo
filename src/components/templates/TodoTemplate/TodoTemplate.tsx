import { TodoList } from "components/organisms";
import style from "./TodoTemplate.module.scss";
type TodoTemplateProps = {};

const TodoTemplate: React.FC<TodoTemplateProps> = () => (
  <div className={style.template}>
    <div className={style.backgroud} />
    <div className={style.main}>
      <TodoList />
    </div>
  </div>
);

export default TodoTemplate;
