"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";




interface SortableItemProps {
  id: string;
  datas: object;
  active?: boolean;
  width?: number;
}

export const SortableItem: React.FC<SortableItemProps> = ({ id, active, width , datas}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "10px 20px",
    // border: "1px solid #999",
    borderRadius: "30px",
    background: "#fff",
    // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "grab",
    width: width ? `${width}px` : "33%",
    height: active ? "300px" : "100%",
    opacity: active ? "0.3" : "1",
    outline: "none"
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="dashboard-item">
      {/* {content} */}
      {datas?.chart}
    </div>
  );
};
