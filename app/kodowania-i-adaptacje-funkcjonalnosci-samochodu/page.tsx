import Main from "../components/main";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kodowania i adaptacje funkcjonalnosci samochodu",
};

export default function About() {
  return (
    <Main>
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 dark:text-neutral-200">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-100 sm:text-4xl">
          Kodowania i adaptacje funkcjonalnosci samochodu
        </h1>
        <p className="mt-6 text-xl leading-8">
          Podstrona w budowie. Zapraszamy wkrótce.
        </p>
      </div>
    </Main>
  );
}
