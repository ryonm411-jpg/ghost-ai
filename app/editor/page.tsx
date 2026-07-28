"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";
import { CreateProjectDialog } from "@/components/editor/create-project-dialog";
import { RenameProjectDialog } from "@/components/editor/rename-project-dialog";
import { DeleteProjectDialog } from "@/components/editor/delete-project-dialog";
import { Button } from "@/components/ui/button";
import { useProjectDialogs } from "@/hooks/use-project-dialogs";

export default function EditorPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {
    ownedProjects,
    sharedProjects,
    dialog,
    form,
    isSubmitting,
    openCreate,
    openRename,
    openDelete,
    close,
    setName,
    submit,
  } = useProjectDialogs();

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <EditorNavbar
        isSidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
      />

      <ProjectSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        ownedProjects={ownedProjects}
        sharedProjects={sharedProjects}
        onCreateProject={openCreate}
        onRenameProject={openRename}
        onDeleteProject={openDelete}
      />

      {/* Editor home — center content */}
      <main className="flex flex-1 items-center justify-center p-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Create a project or open an existing one
          </h1>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Start a new architecture workspace, or choose a project from the
            sidebar.
          </p>
          <Button className="mt-6 gap-2" onClick={openCreate}>
            <Plus className="size-4" />
            New Project
          </Button>
        </div>
      </main>

      {/* Dialogs */}
      <CreateProjectDialog
        open={dialog.type === "create"}
        name={form.name}
        slug={form.slug}
        isSubmitting={isSubmitting}
        onNameChange={setName}
        onSubmit={submit}
        onClose={close}
      />

      <RenameProjectDialog
        open={dialog.type === "rename"}
        currentName={dialog.project?.name ?? ""}
        name={form.name}
        isSubmitting={isSubmitting}
        onNameChange={setName}
        onSubmit={submit}
        onClose={close}
      />

      <DeleteProjectDialog
        open={dialog.type === "delete"}
        projectName={dialog.project?.name ?? ""}
        isSubmitting={isSubmitting}
        onSubmit={submit}
        onClose={close}
      />
    </div>
  );
}
