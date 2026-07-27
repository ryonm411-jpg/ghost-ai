# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- In progress

## Current Goal

- TBD — next feature spec

## Completed

- 01-design-system: shadcn/ui initialized (base-nova preset), cn() utility created, all 7 components installed (Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea), lucide-react installed, dark mode enforced via `dark` class on html element. `npm run build` passes.
- 02-editor: Editor chrome components created. `EditorNavbar` (fixed-height top bar with sidebar toggle using PanelLeftOpen/PanelLeftClose icons, left/center/right sections). `ProjectSidebar` (overlay sidebar that slides in from left without pushing content, Projects header with close button, shadcn Tabs for My Projects/Shared with empty placeholder states, full-width New Project button with Plus icon). Dialog pattern ready for future use via existing shadcn Dialog component (supports title, description, footer actions). `npm run build` passes.
- 03-auth: Clerk wired into the Next.js app. `@clerk/ui` installed. `ClerkProvider` wraps root layout body with `dark` theme from `@clerk/ui/themes`, appearance variables mapped to app CSS custom properties (no hardcoded colors). `proxy.ts` at project root uses `clerkMiddleware` with `createRouteMatcher` to protect all routes except sign-in/sign-up (defined via env vars). Sign-in and sign-up pages created at `/sign-in/[[...sign-in]]` and `/sign-up/[[...sign-up]]` using Clerk components inside a shared `AuthLayout` (two-panel on large screens: branding left, form right; form-only on small screens; minimal, no gradients). Root `/` redirects authenticated users to `/editor`, unauthenticated to `/sign-in`. Editor moved to `/editor` route. `UserButton` added to editor navbar right section. Env vars added: `NEXT_PUBLIC_CLERK_SIGN_IN_URL`, `NEXT_PUBLIC_CLERK_SIGN_UP_URL`. `npm run build` passes.

## In Progress

- None.

## Next Up

- TBD based on feature specs

## Open Questions

- None.

## Architecture Decisions

- Using shadcn/ui base-nova preset with Tailwind v4 CSS-first configuration (no tailwind.config.js)
- Dark mode enforced via `dark` class on `<html>` element in layout.tsx
- shadcn components use `@base-ui/react` primitives (not Radix)
- Icon library: lucide-react (configured in components.json)
- Auth: Clerk v7 with `middleware.ts`. Route protection via `clerkMiddleware` + `createRouteMatcher` with catch-all routes `/sign-in(.*)` and `/sign-up(.*)`. ClerkProvider inside `<body>` per v7 requirement.

## Session Notes

- Project uses Next.js 16, Tailwind v4, TypeScript
- tsconfig has `@/*` path alias mapping to project root
- components.json lives at project root with standard aliases
- Do not modify generated `components/ui/*` files
- Clerk env vars: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `NEXT_PUBLIC_CLERK_SIGN_IN_URL`, `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
- 03-auth verification: `npm run build` passes. Build emits a non-blocking Next.js warning that a parent lockfile at `C:\Users\Ryon\Downloads\package-lock.json` caused workspace-root inference; set `turbopack.root` in `next.config.ts` or remove the parent lockfile if this becomes noisy.
