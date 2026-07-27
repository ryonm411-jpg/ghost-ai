import { FileText, Network, UsersRound } from "lucide-react";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  const features = [
    {
      icon: Network,
      title: "AI Architecture Generation",
      description:
        "Describe your system, and Ghost AI maps it to a live canvas.",
    },
    {
      icon: UsersRound,
      title: "Real-time Collaboration",
      description:
        "Live cursors, presence indicators, and shared editing across your team.",
    },
    {
      icon: FileText,
      title: "Instant Spec Generation",
      description:
        "Export complete Markdown specs directly from the canvas graph.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground lg:grid lg:grid-cols-2">
      <section className="hidden min-h-screen flex-col justify-between border-r border-border bg-auth-panel px-12 py-12 lg:flex xl:px-20">
        <div className="flex items-center gap-4">
          <span className="flex size-9 items-center justify-center rounded-md bg-auth-accent text-auth-accent-foreground shadow-sm shadow-auth-accent/20">
            <span className="size-3 rounded-sm bg-current" />
          </span>
          <span className="text-lg font-semibold tracking-normal">Ghost AI</span>
        </div>

        <div className="max-w-2xl">
          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-normal text-foreground">
            Design systems at the speed of thought.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            Describe your architecture in plain English. Ghost AI maps it to a
            shared canvas your whole team can refine in real time.
          </p>

          <div className="mt-16 space-y-8">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="flex gap-5">
                  <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-md border border-auth-accent/25 bg-auth-accent/10 text-auth-accent">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-base font-semibold tracking-normal text-foreground">
                      {feature.title}
                    </h2>
                    <p className="mt-1 max-w-xl text-sm leading-6 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          (c) 2026 Ghost AI. All rights reserved.
        </p>
      </section>

      <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
        <div className="w-full max-w-[30rem]">
          <div className="mb-10 flex items-center justify-center gap-3 lg:hidden">
            <span className="flex size-9 items-center justify-center rounded-md bg-auth-accent text-auth-accent-foreground">
              <span className="size-3 rounded-sm bg-current" />
            </span>
            <span className="text-lg font-semibold tracking-normal">Ghost AI</span>
          </div>

          <div className="flex justify-center">{children}</div>
        </div>
      </section>
    </main>
  );
}