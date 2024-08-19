import Image from "next/image";
import Main from "./components/main";
import { Hero } from "./components/hero";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modyfikacje automatycznych skrzyń biegów DSG i S Tronic, Chiptuning",
  description:
    "Profesjonalne modyfikacje charakterystyki pracy automatycznych skrzyń biegów DSG i S Tronic dla poprawy osiągów, płynności zmiany biegów i komfortu jazdy.",
};

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Main>
        <h2 className="mx-auto text-justify relative max-w-7xl px-6 lg:px-8">
          W&nbsp;tym filmie dowiesz się w&nbsp;jakim celu wykonuje się
          chiptuning skrzyni biegów DSG i&nbsp;S Tronic grupy VAG, czyli inaczej
          modyfikację oprogramowania sterującego jej pracą. Dzięki temu Twoja
          skrzynia może znacznie lepiej zmieniać i&nbsp;redukować biegi,
          utrzymując wyższe obroty silnika w&nbsp;trybie D&nbsp;w&nbsp;trakcie
          codziennej jazdy! Fabryczne oprogramowanie w&nbsp;większości
          przypadków zarządza pracą skrzyni biegów w&nbsp;taki sposób, by silnik
          pracował na skrajnie niskich obrotach. Ma to destrukcyjny wpływ na
          szereg elementów wchodzących w&nbsp;skład układu napędowego, ale
          powoduje także dyskomfort w&nbsp;trakcie jazdy. Potrafi doprowadzać
          również do niebezpiecznych sytuacji na drodze. Jeśli chcesz dowiedzieć
          się jak mogę to wyeliminować i&nbsp;ile możesz dzięki temu
          zaoszczędzić - zdecydowanie warto byś poświęcił chwilę na ten
          materiał. Jeśli będziesz miał jakiekolwiek pytania -&nbsp;
          <Link
            href="/kontakt"
            className="font-semibold leading-7 text-indigo-600  dark:text-indigo-400 hover:opacity-75 "
          >
            napisz do mnie.
          </Link>{" "}
          Miłego oglądania!
          <span className="absolute -top-24 left-0" id="film"></span>
        </h2>
        <div className="mt-2 mb-16 flex">
          <Link
            href="/modyfikacje-oprogramowania-skrzyn-biegow-DSG-i-S-Tronic"
            className="text-base font-semibold leading-7 text-indigo-600  dark:text-indigo-400 hover:opacity-75 "
          >
            Sprawdź ofertę <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <iframe
          width="100%"
          height="100%"
          className="aspect-video relative"
          src="https://www.youtube.com/embed/s27Ledd4JAA?si=iVO50PiArph4zaJb"
          title="DSG i S Tronic PROBLEM - niskie obroty + rozwiązanie - chiptuning"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Main>
    </div>
  );
}
