import Link from "next/link";
import Main from "../components/main";
import Image from "next/image";
import type { Metadata } from "next";
import { ExecuteGraphql } from "@/api/graphQLApi";

export const metadata: Metadata = {
  title: "O Firmie",
  description:
    "Poznaj naszą firmę, która specjalizuje się w profesjonalnych modyfikacjach automatycznych skrzyń biegów DSG i S Tronic. Zaufaj naszemu doświadczeniu i pasji do motoryzacji.",
};

export default async function About() {
  // const data = await ExecuteGraphql(PagesGetListDocument, {});
  // console.log(data.pages?.data);

  return (
    <Main>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="/ofirmie.webp"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-700 mix-blend-multiply" />
              <div
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#170E13] to-[#7A7ADB] opacity-40"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
              <figure className="relative isolate">
                <Image
                  className="h-8 block"
                  src="/logoDark.svg"
                  alt="softVAG Logo"
                  width="150"
                  height="30"
                />
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                  <p>
                    Modyfikacje charakterystyki pracy automatycznych skrzyń
                    biegów DSG i&nbsp;S Tronic, kodowania i&nbsp;adaptacje.
                  </p>
                </blockquote>
              </figure>
            </div>
          </div>
          <div>
            <div className="text-base leading-7 lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                O Firmie
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Modyfikacje charakterystyki pracy automatycznych skrzyń biegów
                  DSG i&nbsp;S Tronic, kodowania i&nbsp;adaptacje.
                </p>
                <p className="mt-6">Podstrona w budowie. Zapraszamy wkrótce.</p>
              </div>
            </div>
            <div className="mt-10 flex">
              <Link
                href="/modyfikacje-oprogramowania-skrzyn-biegow-DSG-i-S-Tronic"
                className="text-base font-semibold leading-7 text-indigo-600  dark:text-indigo-400 hover:opacity-75 "
              >
                Sprawdź ofertę <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
