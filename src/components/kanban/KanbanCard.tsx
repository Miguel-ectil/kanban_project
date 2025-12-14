"use client";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { Task } from "@/types/task";

export function KanbanCard({ task }: { task: Task }) {
    const { attributes, listeners, setNodeRef, transform } =
        useDraggable({
            id: task.id,
        });

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="bg-gray-900 p-3 rounded shadow cursor-grab"
        >
            <h3 className="font-medium">{task.title}</h3>
            <p className="text-sm text-gray-800">
                {task.description}
            </p>

            <span className="text-xs text-gray-400">
                {task.responsible.name}
            </span>
        </div>
    );
}
