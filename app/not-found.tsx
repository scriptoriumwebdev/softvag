import Link from "next/link";
import Main from "./components/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  openGraph: {
    title: "404",
  },
};

export default function NotFound() {
  return (
    <Main>
      <div className="prose mx-auto prose-a:text-indigo-600 prose-a:text-base prose-a:font-semibold prose-a:leading-7   dark:prose-a:text-indigo-400 hover:prose-a:opacity-75 dark:prose-invert">
        <h2 className="flex  flex-col justify-center align-middle items-center ">
          Błąd 404 - nie znaleziono strony
        </h2>{" "}
        <br />
        Sprawdź czy nie masz błędów w skrzyni biegów 😜 <br />
        <Link
          className="flex  flex-col justify-center align-middle items-center  text-base font-semibold leading-7 text-indigo-600  dark:text-indigo-400 hover:opacity-75"
          href="/"
        >
          Wróć do strony głównej
        </Link>
      </div>
    </Main>
  );
}
