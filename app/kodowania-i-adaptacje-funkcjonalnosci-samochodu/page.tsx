import Main from "../components/main";
import type { Metadata } from "next";

const meta = {
  title: "Kodowanie, adaptacje funkcjonalności samochodu",
  description:
    "Profesjonalne kodowania i adaptacje funkcjonalności samochodu, które pozwalają na pełne wykorzystanie możliwości Twojego pojazdu i dostosowanie go do Twoich potrzeb.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
  },
};

export default function About() {
  return (
    <Main>
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 dark:text-neutral-200">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-100 sm:text-4xl">
          Kodowania i adaptacje funkcjonalności samochodu
        </h1>
        <p className="mt-6 text-xl leading-8">
          Podstrona w budowie. Zapraszamy wkrótce.
        </p>
      </div>
    </Main>
  );
}
