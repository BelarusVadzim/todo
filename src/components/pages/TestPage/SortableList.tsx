import React from "react";
import SortableItem from "./SortableItem";
import { SortableContainer } from "react-sortable-hoc";

type SortableListProps = {
  items: string[];
};

const SortableList: React.FC<SortableListProps> = ({ items }) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
};

export default SortableContainer<SortableListProps>(SortableList);
