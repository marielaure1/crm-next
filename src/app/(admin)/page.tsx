"use client"; // Important : active le rendu côté client uniquement

import React, { useMemo, useState } from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "@ui/features/dashboard-item/dashboard-item";
import { ChartDonuts } from "@ui/features/charts/donuts";
import { ChartBar } from "@ui/features/charts/bar";
import { ChartRadial } from "@ui/features/charts/radial";

interface Box {
  id: string;
  content: string;
  row: number;
  position: number;
  chart?: React.ReactNode;
}

const Home: React.FC = () => {
  const [active, setActive] = useState<Box | null>(null);
  const [rows, setRows] = useState(3);
  const [boxs, setBoxs] = useState<Box[]>([
    { id: "1", content: "Box 1", row: 1, position: 1, chart: <ChartRadial/> },
    { id: "2", content: "Box 2", row: 1, position: 2, chart: <ChartDonuts/> },
    { id: "3", content: "Box 3", row: 1, position: 3, chart: <ChartBar/> },
    { id: "4", content: "Box 4", row: 2, position: 4, chart: <ChartRadial/> },
    { id: "5", content: "Box 5", row: 2, position: 5, chart: <ChartBar/> },
    { id: "6", content: "Box 6", row: 2, position: 6, chart: <ChartDonuts/> },
    { id: "7", content: "Box 7", row: 3, position: 7, chart: <ChartBar/> },
    { id: "8", content: "Box 8", row: 3, position: 8, chart: <ChartDonuts/> },
    { id: "9", content: "Box 9", row: 3, position: 9, chart: <ChartRadial/> },
  ]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragStart = (event: any) => {
    const activeBox = boxs.find((box) => box.id === event.active.id);
    setActive(activeBox || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActive(null);

    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const activeBox = boxs.find((box) => box.id === active.id);
    const overBox = boxs.find((box) => box.id === over.id);

    if (!activeBox || !overBox) return;

    setBoxs((prev) => {
      const updatedBoxes = [...prev];

      if (activeBox.row === overBox.row) {
        const currentRowBoxes = updatedBoxes.filter(
          (box) => box.row === activeBox.row
        );
        const updatedRow = arrayMove(
          currentRowBoxes,
          activeBox.position - 1,
          overBox.position - 1
        ).map((box, index) => ({ ...box, position: index + 1 }));

        return [
          ...updatedBoxes.filter((box) => box.row !== activeBox.row),
          ...updatedRow,
        ];
      }

      updatedBoxes.find((box) => box.id === active.id)!.row = overBox.row;
      updatedBoxes.find((box) => box.id === active.id)!.position =
        updatedBoxes.filter((box) => box.row === overBox.row).length + 1;

      return updatedBoxes.map((box) =>
        box.row === overBox.row
          ? {
              ...box,
              position:
                updatedBoxes
                  .filter((b) => b.row === box.row)
                  .findIndex((b) => b.id === box.id) + 1,
            }
          : box
      );
    });
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {[...Array(rows)].map((_, rowIndex) => (
        <SortableContext
          key={rowIndex}
          items={boxs
            .filter((box) => box.row === rowIndex + 1)
            .map((box) => box.id)}
          strategy={verticalListSortingStrategy}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "20px",
              padding: "10px",
              // border: "1px solid #ccc",
              borderRadius: "4px",
              // background: "#f9f9f9",
              height: "400px",
            }}
          >
            {boxs
              .filter((box) => box.row === rowIndex + 1)
              .sort((a, b) => a.position - b.position)
              .map((box) => (
                <SortableItem key={box.id} id={box.id} datas={box} />
              ))}
          </div>
        </SortableContext>
      ))}
      <DragOverlay>
        {active ? (
          <SortableItem key={active.id} id={active.id} datas={active} width={400}/>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Home;
