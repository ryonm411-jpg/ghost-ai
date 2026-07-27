import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ghost AI",
  description: "AI-powered creative workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider
          appearance={{
            theme: dark,
            variables: {
              colorBackground: "var(--background)",
              colorForeground: "var(--foreground)",
              colorMutedForeground: "var(--muted-foreground)",
              colorPrimary: "var(--auth-accent)",
              colorDanger: "var(--destructive)",
              colorInputForeground: "var(--foreground)",
              colorInput: "var(--input)",
              colorBorder: "var(--border)",
              borderRadius: "var(--radius)",
            },
            elements: {
              cardBox: "bg-card border border-border shadow-none",
              card: "bg-card shadow-none",
              headerTitle: "text-foreground tracking-normal",
              headerSubtitle: "text-muted-foreground",
              formButtonPrimary:
                "bg-auth-accent text-auth-accent-foreground hover:bg-auth-accent/90 shadow-none",
              footerActionLink: "text-auth-accent hover:text-auth-accent",
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}