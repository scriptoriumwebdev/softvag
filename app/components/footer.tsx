"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export interface Link {
  id: string;
  href: string;
  name: string;
}
const links: Link[] = [
  {
    id: "1",
    href: "",
    name: "Strona Główna",
  },
  {
    id: "2",
    href: "o-firmie",
    name: "O Firmie",
  },
  {
    id: "3",
    href: "modyfikacje-oprogramowania-skrzyn-biegow-DSG-i-S-Tronic",
    name: "Modyfikacje skrzyń DSG i\u00A0S\u00A0Tronic",
  },
  {
    id: "4",
    href: "kodowania-i-adaptacje-funkcjonalnosci-samochodu",
    name: "Kodowania i\u00A0adaptacje",
  },
  {
    id: "5",
    href: "pytania-i-odpowiedzi",
    name: "Pytania i\u00A0odpowiedzi",
  },
  {
    id: "6",
    href: "opinie",
    name: "Opinie",
  },
  {
    id: "7",
    href: "kontakt",
    name: "Kontakt",
  },
];
export function Footer() {
  const [isOpen, setOpen] = useState(false);
  return (
    <footer className="lg:grid lg:grid-cols-5">
      <div className="relative h-32 lg:col-span-2 lg:h-full flex items-center justify-center">
        <Image
          className="h-16 hidden dark:block"
          src="/logoDark.svg"
          alt="softVAG Logo"
          width="300"
          height="60"
        />
        <Image
          className="h-16  block dark:hidden"
          src="logo.svg"
          alt="softVAG Logo"
          width="300"
          height="60"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-400">
                {" "}
                Telefon{" "}
              </span>

              <a
                href="tel:+48698699982"
                className="block text-xl font-medium text-gray-900 dark:text-neutral-200 hover:opacity-75 sm:text-2xl"
                id="phoneFooter"
              >
                698 699 982
              </a>
            </p>

            <p className="mt-8">
              <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-400">
                {" "}
                E-mail{" "}
              </span>

              <a
                href="mailto:info@softvag.com"
                className="block text-xl font-medium text-gray-900 dark:text-neutral-200 hover:opacity-75 sm:text-2xl"
                id="mailFooter"
              >
                info@softvag.com
              </a>
            </p>

            <p className="mt-8">
              <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-400">
                {" "}
                Adres{" "}
              </span>

              <a
                href="https://maps.google.com/maps?q=50.08744215727235,19.940346676705616&t=&z=13&ie=UTF8&iwloc="
                rel="noreferrer nofollow"
                target="_blank"
                className="block text-xl font-medium text-gray-900 dark:text-neutral-200 hover:opacity-75 sm:text-2xl"
                id="addressFooter"
              >
                ul. Siemaszki 37/G6 <br /> 31-207 Kraków
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-700 dark:text-neutral-200 ">
              <li>Poniedziałek - Piątek: 8:00 - 18:00</li>
              <li>Sobota: 8:00 - 14:00</li>
            </ul>
            <div className="mt-8">
              <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-400">
                {" "}
                Odwiedź mnie na:{" "}
              </span>
              <ul className=" mt-2 flex gap-6">
                <li>
                  <Link
                    href="https://www.facebook.com/softvag"
                    rel="noreferrer nofollow"
                    target="_blank"
                    className="transition"
                    title="Facebook"
                    id="facebookFooter"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebook className="h-6 w-6 duration-300 hover:scale-110 hover:opacity-75 text-gray-700 dark:text-neutral-200 " />
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://www.youtube.com/@softVAG"
                    rel="noreferrer nofollow"
                    target="_blank"
                    className="transition"
                    title="YouTube"
                    id="youtubeFooter"
                  >
                    <span className="sr-only">Youtube</span>
                    <FaYoutube className="h-6 w-6 duration-300 hover:scale-110 hover:opacity-75 text-gray-700 dark:text-neutral-200 " />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-gray-900 dark:text-neutral-100">
                SoftVAG
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={`/${link.href}`}
                      className="text-gray-700 dark:text-neutral-200 transition hover:opacity-75"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <Link
                  href="/polityka-prywatnosci"
                  className="text-gray-500 dark:text-neutral-200  transition hover:opacity-75"
                >
                  {" "}
                  Polityka prywatności{" "}
                </Link>
              </li>
            </ul>

            <p className="mt-8 text-xs text-gray-500 dark:text-neutral-200  sm:mt-0">
              &copy; 2023. SoftVAG. Designed & Coded by{" "}
              <Link
                href="https://scriptorium.dev"
                target="_blank"
                className="underline"
              >
                Scriptorium
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
