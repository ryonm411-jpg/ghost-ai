"use client";

import { useState, useCallback, useMemo } from "react";
import type { Project } from "@/lib/types";

type DialogType = "create" | "rename" | "delete" | null;

interface DialogState {
  type: DialogType;
  project: Project | null;
}

interface FormState {
  name: string;
  slug: string;
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const INITIAL_PROJECTS: Project[] = [
  { id: "1", name: "E-Commerce Platform", slug: "e-commerce-platform", isOwned: true },
  { id: "2", name: "Blog API", slug: "blog-api", isOwned: true },
  { id: "3", name: "Design System", slug: "design-system", isOwned: false },
];

export function useProjectDialogs() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [dialog, setDialog] = useState<DialogState>({ type: null, project: null });
  const [form, setForm] = useState<FormState>({ name: "", slug: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openCreate = useCallback(() => {
    setDialog({ type: "create", project: null });
    setForm({ name: "", slug: "" });
  }, []);

  const openRename = useCallback((project: Project) => {
    setDialog({ type: "rename", project });
    setForm({ name: project.name, slug: project.slug });
  }, []);

  const openDelete = useCallback((project: Project) => {
    setDialog({ type: "delete", project });
    setForm({ name: "", slug: "" });
  }, []);

  const close = useCallback(() => {
    setDialog({ type: null, project: null });
    setForm({ name: "", slug: "" });
    setIsSubmitting(false);
  }, []);

  const setName = useCallback((name: string) => {
    setForm({ name, slug: toSlug(name) });
  }, []);

  const submit = useCallback(() => {
    setIsSubmitting(true);

    if (dialog.type === "create") {
      const newProject: Project = {
        id: crypto.randomUUID(),
        name: form.name.trim(),
        slug: form.slug,
        isOwned: true,
      };
      setProjects((prev) => [...prev, newProject]);
    }

    if (dialog.type === "rename" && dialog.project) {
      setProjects((prev) =>
        prev.map((p) =>
          p.id === dialog.project!.id
            ? { ...p, name: form.name.trim(), slug: form.slug }
            : p
        )
      );
    }

    if (dialog.type === "delete" && dialog.project) {
      setProjects((prev) => prev.filter((p) => p.id !== dialog.project!.id));
    }

    close();
  }, [dialog, form, close]);

  const ownedProjects = useMemo(
    () => projects.filter((p) => p.isOwned),
    [projects]
  );

  const sharedProjects = useMemo(
    () => projects.filter((p) => !p.isOwned),
    [projects]
  );

  return {
    projects,
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
  };
}
