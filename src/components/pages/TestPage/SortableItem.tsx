import React from "react";
import { SortableElement } from "react-sortable-hoc";

type SortableItemProps = {
  value: string;
};

const SortableItem: React.FC<SortableItemProps> = ({ value }) => {
  return <div>{value}</div>;
};

export default SortableElement<SortableItemProps>(SortableItem);
