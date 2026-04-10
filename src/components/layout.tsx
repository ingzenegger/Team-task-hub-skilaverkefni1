import { Link } from "react-router";
import taskLogo from "/src/assets/tasklogo.svg";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="bg-linear-to-b from-stone-200 to-stone-100 mb-3">
        <nav className="flex w-full gap-3 m-4">
          <img src={taskLogo} className="h-6" />
          <Link
            className="hover:text-green-700 font-medium"
            to="/"
            reloadDocument
          >
            Dashboard
          </Link>
          <Link className="hover:text-green-700 font-medium" to="/projects">
            Projects
          </Link>
        </nav>
      </header>
      <main className="w-full">{children}</main>
      <footer className="bg-linear-to-t from-stone-200 to-stone-100 w-full mt-auto flex justify-center p-1">
        <img src={taskLogo} className="h-15" />
      </footer>
    </div>
  );
}
