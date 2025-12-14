"use client";

import {
    AppBar,
    Toolbar,
    Button,
} from "@mui/material";

type HeaderProps = {
    onNewTask: () => void;
};

export default function Header() {
    return (
        <AppBar
            position="sticky"
            elevation={0}
            className="bg-[var(--surface)] border-b border-[var(--border)] text-[var(--foreground)]"
        >
            <Toolbar className="flex justify-between h-16">
                {/* Logo / Título */}
                <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold">
                        Kanban Board
                    </span>
                </div>

                {/* Ações */}
                <div className="flex items-center gap-2">
                    <Button
                        variant="contained"
                        // onClick={onNewTask}
                    >
                        + Nova Tarefa
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}
