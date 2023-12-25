import Image from "next/image";
import type { Metadata } from "next";
import Main from "./components/main";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      {/* <Main>
        <h1 className="text-8">
          SoftVAG - Modyfikacje charakterystyki pracy automatycznych skrzyń
          biegów DSG i S Tronic, kodowania i adaptacje.
        </h1>
      </Main> */}
    </div>
  );
}
