import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

export default function Main({ children }: MainProps) {
  return (
    <main className="flex flex-col max-w-7xl mx-auto px-4 py-16">
      <div className="overflow-hidden mt-12 px-4 py-16 flex flex-col bg-gray-50 dark:bg-zinc-800 shadow-lg rounded-md pb-8 md:pb-16 min-h-[80vh]  items-center justify-between antialiased">
        {children}
      </div>
    </main>
  );
}
