"use client";
import { useEffect } from "react";
import { useTasks } from "@/context/TaskContext";
import { mockTasks } from "@/mocks/tasks";
import { KanbanBoard } from "@/components/kanban/KanbanBoard";

export default function KanbanPage() {
    const { state, dispatch } = useTasks();

    useEffect(() => {
        dispatch({ type: "SET_TASKS", payload: mockTasks });
    }, [dispatch]);

    return (
        <div className=" px-6 py-4">
            <h1 className="text-2xl font-bold mb-20">
                Quadro Kanban
            </h1>

            {/* <pre className="bg-gray-100 p-4 rounded">
                {JSON.stringify(state.tasks, null, 2)}
            </pre> */}
            <div className="flex  items-center justify-center font-sans">
                <KanbanBoard />
            </div>
        </div>
    );
}
