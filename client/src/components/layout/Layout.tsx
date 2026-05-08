import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern -z-30 pointer-events-none" />
      <div className="absolute inset-0 bg-notebook-lines -z-20 pointer-events-none" />
      <div className="absolute top-[-18%] left-[-12%] w-[52%] h-[52%] rounded-full bg-primary/12 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[-18%] right-[-8%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
