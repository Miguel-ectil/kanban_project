import type { Task} from "@/types/task";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Criar layout do Kanban",
    description: "Definir colunas e responsividade",
    status: "A_FAZER",
    responsible: {
      id: "r1",
      name: "Miguel",
      email: "miguel@email.com",
    },
    createdAt: "2025-01-10",
    dueDate: "2025-01-12",
  },
  {
    id: "2",
    title: "Implementar drag and drop",
    description: "Usar dnd-kit no quadro",
    status: "EM_PROGRESSO",
    responsible: {
      id: "r2",
      name: "Ana",
      email: "ana@email.com",
    },
    createdAt: "2025-01-09",
    dueDate: "2025-01-11",
  },
  {
    id: "3",
    title: "Criar componente de Task",
    description: "Componente reutilizável para cards",
    status: "A_FAZER",
    responsible: {
      id: "r3",
      name: "João",
      email: "joao@email.com",
    },
    createdAt: "2025-01-08",
    dueDate: "2025-01-13",
  },
  {
    id: "4",
    title: "Adicionar filtro por responsável",
    description: "Filtrar tasks pelo usuário selecionado",
    status: "EM_PROGRESSO",
    responsible: {
      id: "r2",
      name: "Ana",
      email: "ana@email.com",
    },
    createdAt: "2025-01-07",
    dueDate: "2025-01-14",
  },
  {
    id: "5",
    title: "Implementar status concluído",
    description: "Exibir coluna de tarefas finalizadas",
    status: "CONCLUIDO",
    responsible: {
      id: "r1",
      name: "Miguel",
      email: "miguel@email.com",
    },
    createdAt: "2025-01-05",
    dueDate: "2025-01-09",
  },
  {
    id: "6",
    title: "Criar modal de edição",
    description: "Editar título, descrição e responsável",
    status: "A_FAZER",
    responsible: {
      id: "r4",
      name: "Carla",
      email: "carla@email.com",
    },
    createdAt: "2025-01-11",
    dueDate: "2025-01-16",
  },
  {
    id: "7",
    title: "Persistir dados no localStorage",
    description: "Salvar tarefas localmente no navegador",
    status: "EM_APROVACAO",
    responsible: {
      id: "r3",
      name: "João",
      email: "joao@email.com",
    },
    createdAt: "2025-01-10",
    dueDate: "2025-01-15",
  },
  {
    id: "8",
    title: "Revisar UX do quadro",
    description: "Melhorar espaçamentos e feedback visual",
    status: "CONCLUIDO",
    responsible: {
      id: "r4",
      name: "Carla",
      email: "carla@email.com",
    },
    createdAt: "2025-01-06",
    dueDate: "2025-01-10",
  }
];
