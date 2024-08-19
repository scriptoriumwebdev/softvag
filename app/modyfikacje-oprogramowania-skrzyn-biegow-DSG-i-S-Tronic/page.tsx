import { Fragment } from "react";
import { FaCheck, FaMinus } from "react-icons/fa";
import type { Metadata } from "next";
import Main from "../components/main";
import { formatCurrency } from "../utils";

export interface Pricing {
  title: string;
  subtitle: string;
  pricing: PricingElement[];
  note: Note[];
}

export interface Note {
  id: string;
  text: string;
}

export interface PricingElement {
  id: string;
  pricingTitle: string;
  offers: Offer[];
}

export interface Offer {
  id: string;
  offerTitle?: string;
  offerFeatures: OfferFeature[];
  offerPrefix?: string;
  offerPrice: number;
  offerCurrency: string;
  offerPriceText?: string;
  offerAsterisk?: string;
  offerAsteriskText?: string;
}

export interface OfferFeature {
  id?: string;
  text?: string;
  title?: string;
}

const meta = {
  title:
    "Modyfikacja oprogramowania sterowników automatycznych skrzyń biegów DSG, S Tronic",
  description:
    "Zoptymalizuj działanie skrzyń biegów DSG i S Tronic dzięki naszym modyfikacjom oprogramowania, które poprawiają osiągi, płynność zmiany biegów i komfort jazdy.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
  },
};

const pageData: Pricing = {
  title:
    "Modyfikacja oprogramowania sterowników automatycznych skrzyń biegów DSG i\u00A0S\u00A0Tronic",
  subtitle: "(kwoty brutto)",
  pricing: [
    {
      id: "1",
      pricingTitle: "Tryby: D (Drive), S (Sport), E (Eco / Efficiency)",
      offers: [
        {
          id: "offer1",
          offerTitle: "Modyfikacja podstawowa (pakiet):",
          offerFeatures: [
            {
              id: "1",
              text: "Modyfikacja wartości bazowych punktów zmian i\u00A0redukcji biegów",
            },
            {
              id: "2",
              text: "Weryfikacja i\u00A0optymalizacja ogólna zarządzania pracą skrzyni biegów",
            },
            {
              id: "3",
              title: "Jeśli konieczne:",
            },
            {
              id: "4",
              text: "Modyfikacja wartości maksymalnych obrotów silnika na\u00A0każdym biegu",
            },
          ],
          offerPrice: 850,
          offerCurrency: "PLN",
          offerPriceText: "(za jeden tryb)",
          offerAsterisk: "*",
          offerAsteriskText:
            "Przy wyborze przez Klienta modyfikacji podstawowej więcej niż jednego trybu (np. D+S) - koszt modyfikacji podstawowej każdego kolejnego trybu wynosi 600 zł (rabat 250 zł). Kwota dopłaty do modyfikacji pełnej charakterystyki obrotowej (zwiększenia responsywności/czułości skrzyni na żądania zadawane pedałem przyspieszenia) dla każdego trybu z\u00A0osobna jest stała i\u00A0nie podlega rabatowaniu.",
        },
        {
          id: "offer2",
          offerTitle:
            "Modyfikacja rozszerzona (dodatkowo do powyższego pakietu):",
          offerFeatures: [
            {
              id: "1",
              text: "Modyfikacja pełnej charakterystyki obrotowej tj. zwiększenie w\u00A0pełnym zakresie responsywności/czułości skrzyni na żądania zadawane pedałem przyspieszenia, zarówno dla zmian jak i\u00A0redukcji biegów",
            },
          ],
          offerPrefix: "+",
          offerPrice: 550,
          offerCurrency: "PLN",
          offerPriceText: "(za jeden tryb)",
        },
      ],
    },
    {
      id: "2",
      pricingTitle: "Pozostałe modyfikacje",
      offers: [
        {
          id: "offer3",
          offerTitle: "Możliwy zakres modyfikacji:",
          offerFeatures: [
            {
              id: "1",
              text: "Dezaktywacja funkcji żeglowania (coasting/sailing function)",
            },
            {
              id: "2",
              text: "Dezaktywacja wymuszonej redukcji biegu w trybie manualnym",
            },
            {
              id: "3",
              text: "Modyfikacja charakterystyki działania procedury startu (Launch Control)",
            },
            {
              id: "4",
              title: "Dla potrzeb późniejszej modyfikacji silnika:",
            },
            {
              id: "5",
              text: "Zwiększenie wartości limiterów momentu obrotowego",
            },
            {
              id: "6",
              text: "Zwiększenie wartości ciśnienia oleju dociskającego sprzęgła",
            },
          ],
          offerPrefix: "od",
          offerPrice: 100,
          offerCurrency: "PLN",
        },
      ],
    },
    {
      id: "3",
      pricingTitle: "Programowanie sterownika skrzyni biegów",
      offers: [
        {
          id: "offer4",
          offerFeatures: [
            {
              text: "Odczyt i/lub zapis, aktualizacja oprogramowania sterownika skrzyni",
            },
          ],
          offerPrice: 300,
          offerCurrency: "PLN",
          offerAsterisk: "**",
          offerAsteriskText:
            "Kwota ta doliczana jest jednorazowo tylko wtedy, kiedy Klient nie wybiera modyfikacji podstawowej przynajmniej jednego trybu (np. D\u00A0lub S) oraz przy ponownym wgrywaniu przeprowadzonej wcześniej modyfikacji, która została utracona z\u00A0winy Klienta lub podmiotów innych niż firma softVAG (np. w\u00A0wyniku aktualizacji oprogramowania sterownika automatycznej skrzyni biegów w\u00A0ASO).",
        },
      ],
    },
  ],
  note: [
    {
      id: "1",
      text: "Możliwość przeprowadzenia modyfikacji oraz jej zakres są zależne od typu skrzyni biegów, sterownika i\u00A0jego oprogramowania, a\u00A0także stanu technicznego pojazdu. Modyfikacje realizowane są dla skrzyń takich jak: DQ200, DQ250, DQ380, DQ381, DQ500, DL382, DL501, ale zdarzają się przypadki, w\u00A0których modyfikacja nie jest możliwa. Potwierdzenie możliwości przeprowadzenia modyfikacji, a\u00A0także ustalenie finalnego jej zakresu oraz charakterystyki dokonywane jest na miejscu indywidualnie po weryfikacji stanu rzeczy oraz po analizie potrzeb i\u00A0oczekiwań Klienta. W\u00A0przypadku znacznego zakresu modyfikacji lub zaistnienia sytuacji nieujetych w\u00A0cenniku, wycena dokonywana jest indywidualnie.",
    },
  ],
};

const offersWithAsterisk = pageData.pricing
  .filter((i) => i.offers.some((j) => j.offerAsterisk))
  .map((k) => k.offers[0]);

export default function Example() {
  return (
    <Main>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {pageData.title}
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-center text-md leading-8 text-gray-600 dark:text-neutral-400">
            {pageData.subtitle}
          </p>
        </div>
        {pageData.pricing.map((pricing) => (
          <div
            key={pricing.id}
            className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 dark:ring-gray-600 sm:mt-20 lg:mx-0 lg:max-w-none"
          >
            <div className="p-4 md:p-10 lg:flex-auto">
              <h3 className="text-md font-bold tracking-tight text-gray-900 dark:text-neutral-200">
                {pricing.pricingTitle}
              </h3>

              {pricing.offers.map((offer) => (
                <div
                  key={offer.id}
                  className="mx-auto lg:mx-0 md:grid md:grid-cols-2 gap-2 mb-4"
                >
                  <div>
                    {offer.offerTitle ? (
                      <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400">
                          {offer.offerTitle}
                        </h4>
                        <div className="h-px flex-auto bg-gray-100 dark:bg-gray-600" />
                      </div>
                    ) : null}
                    <ul
                      role="list"
                      className="mt-8 text-sm leading-6 text-gray-600 dark:text-neutral-200 list-disc list-outside"
                    >
                      {offer.offerFeatures.map((feature) => {
                        if (feature.title)
                          return (
                            <li
                              key={feature.id}
                              className="gap-x-3 list-item mt-4 -ml-4 italic list-none"
                            >
                              {feature.title}
                            </li>
                          );
                        return (
                          <li key={feature.id} className="gap-x-3 list-item">
                            {feature.text}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="pt-8 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex lg:justify-center">
                    <div className="text-center lg:flex lg:flex-col lg:justify-center lg:align-middle">
                      <div className="mx-auto max-w-xs px-8">
                        <p className="flex items-baseline justify-center  ">
                          <span className="text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-100">
                            {offer.offerPrefix}{" "}
                            {offer.offerAsterisk ? (
                              <sup>
                                <a href={`#${offer.offerAsterisk}`}>
                                  {offer.offerAsterisk}{" "}
                                </a>
                              </sup>
                            ) : null}
                            {formatCurrency(
                              offer.offerPrice,
                              offer.offerCurrency
                            )}{" "}
                          </span>
                        </p>
                        {offer.offerPriceText ? (
                          <p className="mt-2 text-xs leading-5 text-gray-600 dark:text-neutral-400">
                            {offer.offerPriceText}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-2 lg:px-16">
        {offersWithAsterisk.map((offer) => (
          <p key={offer.id} className="mt-16 text-justify relative">
            <span
              className="absolute -top-24 left-0"
              id={offer.offerAsterisk}
            ></span>
            <sup>{offer.offerAsterisk}</sup> {offer.offerAsteriskText}
          </p>
        ))}
        {pageData.note.map((item) => (
          <p key={item.id} className="mt-16 text-justify">
            {item.text}
          </p>
        ))}
      </div>
    </Main>
  );
}
