import type { TaskStatus } from "@/types/task";

export const KANBAN_COLUMNS: {
    id: TaskStatus;
    title: string;
    wipLimit: number;
}[] = [
        { id: "A_FAZER", title: "A Fazer", wipLimit: 5 },
        { id: "EM_PROGRESSO", title: "Em Progresso", wipLimit: 3 },
        { id: "EM_APROVACAO", title: "Em Aprovação", wipLimit: 2 },
        { id: "ATRASADO", title: "Atrasado", wipLimit: 999 },
        { id: "CONCLUIDO", title: "Concluído", wipLimit: 999 },
    ];
