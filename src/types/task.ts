export type TaskStatus =
    | "A_FAZER"
    | "EM_PROGRESSO"
    | "EM_APROVACAO"
    | "ATRASADO"
    | "CONCLUIDO";

export interface Responsible {
    id: string;
    name: string;
    email: string;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    responsible: Responsible;
    createdAt: string;
    dueDate: string;
    completedAt?: string;
}
