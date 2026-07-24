"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {/* Backdrop overlay — click to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={cn(
          "fixed top-12 left-0 z-50 flex h-[calc(100vh-3rem)] w-72 flex-col border-r border-border bg-background transition-transform duration-200 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-border px-4">
          <h2 className="text-sm font-medium text-foreground">Projects</h2>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X className="size-4" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex flex-1 flex-col overflow-hidden px-3 pt-3">
          <Tabs defaultValue="my-projects" className="flex flex-1 flex-col">
            <TabsList className="w-full">
              <TabsTrigger value="my-projects" className="flex-1">
                My Projects
              </TabsTrigger>
              <TabsTrigger value="shared" className="flex-1">
                Shared
              </TabsTrigger>
            </TabsList>

            <TabsContent value="my-projects" className="flex-1">
              <ScrollArea className="h-full">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-sm text-muted-foreground">
                    No projects yet
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground/60">
                    Create your first project to get started
                  </p>
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="shared" className="flex-1">
              <ScrollArea className="h-full">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-sm text-muted-foreground">
                    No shared projects
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground/60">
                    Projects shared with you will appear here
                  </p>
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer — New Project button */}
        <div className="shrink-0 border-t border-border p-3">
          <Button className="w-full gap-2" size="default">
            <Plus className="size-4" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  );
}
