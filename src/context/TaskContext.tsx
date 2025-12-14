"use client";
import {
    createContext,
    useContext,
    useReducer,
    ReactNode,
} from "react";
import type { Task } from "@/types/task";

type TaskState = {
    tasks: Task[];
};

type TaskAction =
    | { type: "SET_TASKS"; payload: Task[] }
    | { type: "ADD_TASK"; payload: Task }
    | { type: "UPDATE_TASK"; payload: Task };

const initialState: TaskState = {
    tasks: [],
};

function taskReducer(
    state: TaskState,
    action: TaskAction
): TaskState {
    switch (action.type) {
        case "SET_TASKS":
            return { tasks: action.payload };

        case "ADD_TASK":
            return { tasks: [...state.tasks, action.payload] };

        case "UPDATE_TASK":
            return {
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id
                        ? action.payload
                        : task
                ),
            };

        default:
            return state;
    }
}

const TaskContext = createContext<
    | {
        state: TaskState;
        dispatch: React.Dispatch<TaskAction>;
    }
    | undefined
>(undefined);

export function TaskProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [state, dispatch] = useReducer(
        taskReducer,
        initialState
    );

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTasks() {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error(
            "useTasks must be used within a TaskProvider"
        );
    }
    return context;
}
