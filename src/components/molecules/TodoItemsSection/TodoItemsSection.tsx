import { TodoItem } from "components/molecules/TodoItem";
import { PropsWithClassName } from "types";
import { SortableContainer } from "react-sortable-hoc";
import { useDataService } from "hooks";

type TodoItemsSectionProps = PropsWithClassName;

const TodoItemsSection: React.FC<TodoItemsSectionProps> = () => {
  const { todosState } = useDataService();

  return (
    <div>
      {todosState.map((value, index) => (
        <TodoItem key={`item-${index}`} index={index} note={value} />
      ))}
    </div>
  );
};

export default SortableContainer<TodoItemsSectionProps>(TodoItemsSection);
