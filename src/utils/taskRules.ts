import type { Task } from "@/types/task";

export function isOverdue(task: Task): boolean {
    if (task.status === "CONCLUIDO") return false;
    return new Date(task.dueDate) < new Date();
}

export function calculateDelayDays(task: Task): number {
    if (!isOverdue(task)) return 0;

    const diff =
        new Date().getTime() - new Date(task.dueDate).getTime();

    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
