"use client";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { Task } from "@/types/task";

export function KanbanCard({ task }: { task: Task }) {
    const { attributes, listeners, setNodeRef, transform, isDragging } =
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
            className={`
        bg-[var(--surface)]
        border border-[var(--border)]
        p-4
        rounded-xl
        shadow-sm
        cursor-grab
        transition
        space-y-2
        ${isDragging
                    ? "opacity-80 shadow-md"
                    : "hover:shadow-md"
                }
      `}
        >
            {/* Título */}
            <h3 className="text-sm font-semibold leading-snug text-[var(--foreground)]">
                {task.title}
            </h3>

            {/* Descrição */}
            {task.description && (
                <p className="text-xs leading-relaxed text-gray-500 line-clamp-3">
                    {task.description}
                </p>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between pt-2">
                <span className="text-[10px] text-gray-400">
                    {task.responsible.name}
                </span>

                {task.status === "ATRASADO" && (
                    <span className="text-[10px] font-medium text-[var(--danger)]">
                        Atrasado
                    </span>
                )}
            </div>
        </div>
    );
}
