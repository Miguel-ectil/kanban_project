"use client";
import { useEffect, useState } from "react";
import { useTasks } from "@/context/TaskContext";
import { mockTasks } from "@/mocks/tasks";
import { KanbanBoard } from "@/components/kanban/KanbanBoard";
import { Button } from "@mui/material";
import { TaskModal } from "@/components/form/TaskForm";

export default function KanbanPage() {
    const { state, dispatch } = useTasks();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch({ type: "SET_TASKS", payload: mockTasks });
    }, [dispatch]);

    return (
        <div className="h-full px-6 py-4 space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">
                    Kanban
                </h1>

                <Button
                    variant="contained"
                    onClick={() => setOpen(true)}
                >
                    Nova Tarefa
                </Button>
            </div>

            <div className="flex items-center justify-center font-sans">
                <KanbanBoard />
            </div>
            <TaskModal
                open={open}
                onClose={() => setOpen(false)}
            />
        </div>
    );
}
