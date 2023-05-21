import React from 'react';
import { TodoItem } from 'components/molecules/TodoItem';
import { PropsWithClassName } from 'types';
import { SortableContainer } from 'react-sortable-hoc';
import { useTodoStateService } from 'hooks';

type TodoItemsSectionProps = PropsWithClassName;

const SortableSection: React.FC<TodoItemsSectionProps> = () => {
  const { todos } = useTodoStateService();

  return (
    <div>
      {todos.map((value, index) => (
        <TodoItem key={`item-${index}`} index={index} note={value} />
      ))}
    </div>
  );
};

export default SortableContainer<TodoItemsSectionProps>(SortableSection);
