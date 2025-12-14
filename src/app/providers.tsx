"use client";

import { ReactNode } from "react";
import { TaskProvider } from "@/context/TaskContext";

export function Providers({ children }: { children: ReactNode }) {
    return <TaskProvider>{children}</TaskProvider>;
}
