"use client";

import {
    DndContext,
    DragEndEvent,
} from "@dnd-kit/core";
import { useTasks } from "@/context/TaskContext";
import { KANBAN_COLUMNS } from "@/constants/kanban";
import { KanbanColumn } from "./KanbanColumn";
import type { Task } from "@/types/task";

export function KanbanBoard() {
    const { state, dispatch } = useTasks();

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (!over) return;

        const taskId = active.id as string;
        const newStatus = over.id as Task["status"];

        const task = state.tasks.find(
            (t) => t.id === taskId
        );
        if (!task) return;

        if (task.status === newStatus) return;

        const updatedTask: Task = {
            ...task,
            status: newStatus,
            completedAt:
                newStatus === "CONCLUIDO"
                    ? new Date().toISOString()
                    : undefined,
        };

        dispatch({
            type: "UPDATE_TASK",
            payload: updatedTask,
        });
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="flex gap-6 ">
                {KANBAN_COLUMNS.map((column) => (
                    <KanbanColumn
                        key={column.id}
                        column={column}
                        tasks={state.tasks.filter(
                            (task) => task.status === column.id
                        )}
                    />
                ))}
            </div>
        </DndContext>
    );
}
