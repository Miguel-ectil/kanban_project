"use client";

import { useDroppable } from "@dnd-kit/core";
import { KanbanCard } from "./KanbanCard";
import type { Task } from "@/types/task";

type Props = {
    column: {
        id: Task["status"];
        title: string;
        wipLimit: number;
    };
    tasks: Task[];
};

export function KanbanColumn({
    column,
    tasks,
}: Props) {
    const { setNodeRef } = useDroppable({
        id: column.id,
    });

    const isWipExceeded =
        tasks.length >= column.wipLimit;

    return (
        <div
            ref={setNodeRef}
            className={`w-72 p-4 rounded-lg border 
        ${isWipExceeded ? "border-red-500" : "border-gray-300"}
      `}
        >
            <h2 className="font-semibold mb-2">
                {column.title} ({tasks.length})
            </h2>

            {isWipExceeded && (
                <p className="text-red-500 text-sm mb-2">
                    Limite WIP atingido
                </p>
            )}

            <div className="flex flex-col gap-2">
                {tasks.map((task) => (
                    <KanbanCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
}
