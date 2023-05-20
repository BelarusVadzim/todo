import { TodoList } from "components/organisms";
import style from "./TodoTemplate.module.scss";
type TodoTemplateProps = {};

const TodoTemplate: React.FC<TodoTemplateProps> = () => (
  <>
    <div className={style.background}></div>
    <div className={style.backgroudImage}></div>
    <div className={style.page}>
      <div className={style.main}>
        <TodoList />
      </div>
    </div>
  </>
);

export default TodoTemplate;
