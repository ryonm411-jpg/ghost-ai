"use client";

import { useState } from "react";
import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";

export default function EditorPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <EditorNavbar
        isSidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
      />

      <ProjectSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Editor canvas area */}
      <main className="flex flex-1 items-center justify-center p-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground/80">
            Welcome to ghost AI
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Open the sidebar to create or manage your projects.
          </p>
        </div>
      </main>
    </div>
  );
}
