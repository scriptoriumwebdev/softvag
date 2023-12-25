"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
  const [isOpen, setOpen] = useState(false);

  return (
    // <footer className="bg-gray-50 dark:bg-zinc-900 dark:border-t-2 dark:border-gray-500">
    //   <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    //     <Link href="/" className="flex justify-center">
    //       {" "}
    //       <Image
    //         className="h-16 hidden dark:block"
    //         src="/logoDark.svg"
    //         alt="SoftVAG Logo"
    //         width="300"
    //         height="60"
    //       />
    //       <Image
    //         className="h-16  block dark:hidden"
    //         src="logo.svg"
    //         alt="SoftVAG Logo"
    //         width="300"
    //         height="60"
    //       />
    //     </Link>

    //     <p className="mx-auto mt-6 max-w-md text-center leading-relaxed">
    //       Modyfikacje charakterystyki pracy automatycznych skrzyń biegów DSG
    //       i&nbsp;S Tronic, kodowania i&nbsp;adaptacje.
    //     </p>

    //     <p className="mx-auto mt-2 max-w-md text-center leading-relaxed">
    //       ul. Siemaszki 37/G6 <br /> 31-207 Kraków
    //     </p>

    //     <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
    //       <li>
    //         <Link
    //           className="group transition duration-300 hover:font-bold"
    //           href="/kontakt"
    //         >
    //           {" "}
    //           Kontakt{" "}
    //           <span className="block max-w-0 group-hover:max-w-full  transition-all duration-500 h-0.5 bg-slate-700 dark:bg-white"></span>
    //         </Link>
    //       </li>
    //     </ul>

    //     <ul className="mt-12 flex justify-center gap-6 md:gap-8">
    //       <li>
    //         <Link
    //           href="https://www.facebook.com/softvag"
    //           rel="noreferrer nofollow"
    //           target="_blank"
    //           title="Facebook"
    //         >
    //           <span className="sr-only">Facebook</span>
    //           <FaFacebook className="h-6 w-6 duration-300 hover:scale-110" />
    //         </Link>
    //       </li>

    //       <li>
    //         <Link
    //           href="https://www.youtube.com/@softVAG"
    //           rel="noreferrer nofollow"
    //           target="_blank"
    //           title="YouTube"
    //         >
    //           <span className="sr-only">Instagram</span>
    //           <FaYoutube className="h-6 w-6 duration-300 hover:scale-110" />
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="pb-4">
    //     <p className="text-center text-xs/relaxed text-gray-700 dark:text-gray-300">
    //       © SoftVAG 2023. Designed & Coded by{" "}
    //       <Link
    //         href="https://scriptorium.dev"
    //         rel="noreferrer nofollow"
    //         target="_blank"
    //         className="underline"
    //       >
    //         Scriptorium
    //       </Link>
    //       <br />
    //       <Link href="/polityka-prywatnosci" className="underline">
    //         <span className="sr-only">Polityka Prywatności</span>
    //         Polityka Prywatności
    //       </Link>
    //     </p>
    //   </div>
    // </footer>
    <footer className="lg:grid lg:grid-cols-5">
      <div className="relative h-32 lg:col-span-2 lg:h-full flex items-center justify-center">
        <Image
          className="h-16 hidden dark:block"
          src="/logoDark.svg"
          alt="SoftVAG Logo"
          width="300"
          height="60"
        />
        <Image
          className="h-16  block dark:hidden"
          src="logo.svg"
          alt="SoftVAG Logo"
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
                  >
                    <span className="sr-only">Youtube</span>
                    <FaYoutube className="h-6 w-6 duration-300 hover:scale-110 hover:opacity-75 text-gray-700 dark:text-neutral-200 " />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* <div>
              <p className="font-medium text-gray-900 dark:text-neutral-100">
                Usługi
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 dark:text-neutral-200 transition hover:opacity-75"
                  >
                    {" "}
                    XYZ{" "}
                  </Link>
                </li>
              </ul>
            </div> */}

            <div>
              <p className="font-medium text-gray-900 dark:text-neutral-100">
                SoftVAG
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                {/* <li>
                  <Link
                    href="#"
                    className="text-gray-700 dark:text-neutral-200 transition hover:opacity-75"
                  >
                    {" "}
                    O Firmie{" "}
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/kontakt"
                    className="text-gray-700 dark:text-neutral-200 transition hover:opacity-75"
                  >
                    {" "}
                    Kontakt{" "}
                  </Link>
                </li>
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
