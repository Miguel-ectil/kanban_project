"use client";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    MenuItem,
} from "@mui/material";
import { useState } from "react";
import { useTasks } from "@/context/TaskContext";
import type { Task, TaskStatus } from "@/types/task";
import { v4 as uuid } from "uuid";

type Props = {
    open: boolean;
    onClose: () => void;
    task?: Task; 
};

const STATUS_OPTIONS: { value: TaskStatus; label: string }[] = [
    { value: "A_FAZER", label: "A Fazer" },
    { value: "EM_PROGRESSO", label: "Em Progresso" },
    { value: "ATRASADO", label: "Atrasado" },
    { value: "CONCLUIDO", label: "Concluído" },
];

export function TaskModal({ open, onClose, task }: Props) {
    const { dispatch } = useTasks();

    const [form, setForm] = useState({
        title: task?.title ?? "",
        description: task?.description ?? "",
        status: task?.status ?? "A_FAZER",
        responsible: task?.responsible.name ?? "",
        email: task?.responsible.email ?? "",
        dueDate: task?.dueDate ?? "",
    });

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit() {
        if (!form.title || !form.responsible || !form.dueDate) return;

        const newTask: Task = {
            id: task?.id ?? uuid(),
            title: form.title,
            description: form.description,
            status: form.status as TaskStatus,
            responsible: {
                id: task?.responsible.id ?? uuid(),
                name: form.responsible,
                email: form.email,
            },
            createdAt: task?.createdAt ?? new Date().toISOString(),
            dueDate: form.dueDate,
            completedAt:
                form.status === "CONCLUIDO"
                    ? new Date().toISOString()
                    : undefined,
        };

        dispatch({
            type: task ? "UPDATE_TASK" : "ADD_TASK",
            payload: newTask,
        });

        onClose();
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            PaperProps={{
                className: "rounded-xl",
            }}
        >
            <DialogTitle className="font-semibold text-lg px-6 pt-5">
                {task ? "Editar Tarefa" : "Nova Tarefa"}
            </DialogTitle>

            <DialogContent className="px-6 py-4">
                <div className="flex flex-col gap-4">
                    <TextField
                        label="Responsável"
                        name="responsible"
                        value={form.responsible}
                        onChange={handleChange}
                        required
                        fullWidth
                        size="small"
                    />
                    <TextField
                        label="Título"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        fullWidth
                        required
                        size="small"
                    />

                    <TextField
                        label="Descrição"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        rows={3}
                        size="small"
                    />

                    <TextField
                        label="Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        fullWidth
                        size="small"
                    />

                    {/* Grid responsivo */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <TextField
                            select
                            label="Status"
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            fullWidth
                            size="small"
                        >
                            {STATUS_OPTIONS.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            label="Data Limite"
                            name="dueDate"
                            type="date"
                            value={form.dueDate}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            required
                            size="small"
                        />
                    </div>
                </div>
            </DialogContent>

            <DialogActions className="px-6 pb-5 pt-2 flex flex-col-reverse sm:flex-row gap-2 sm:gap-3">
                <Button
                    onClick={onClose}
                    color="error"
                    fullWidth
                    className="sm:w-auto"
                    variant="outlined"
                >
                    Cancelar
                </Button>

                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    fullWidth
                    className="sm:w-auto"
                    color="success"
                >
                    {task ? "Salvar" : "Criar"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
