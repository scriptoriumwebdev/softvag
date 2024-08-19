import Image from "next/image";
import type { Metadata } from "next";
import Main from "../components/main";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaMapPin,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

export const metadata: Metadata = {
  title:
    "Kontakt w sprawie modyfikacji oprogramowania sterowników automatycznych skrzyń biegów DSG, S Tronic",
  description:
    "Skontaktuj się z nami, aby dowiedzieć się więcej o naszych usługach i umówić się na modyfikację skrzyń biegów DSG i S Tronic.",
};

export default function About() {
  return (
    <Main>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-8 md:mb-32">
          <div className="block rounded-lg">
            <div className="flex flex-wrap items-center">
              <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <div className="h-[500px] w-full">
                  <iframe
                    src="https://maps.google.com/maps?q=50.08744215727235,19.940346676705616&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                  <div className="mb-12 w-full grow-3 px-3  md:px-6  xl:px-12">
                    <a
                      href="https://maps.google.com/maps?q=50.08744215727235,19.940346676705616&t=&z=13&ie=UTF8&iwloc="
                      rel="noreferrer nofollow"
                      target="_blank"
                      className="flex items-center justify-start md:justify-center duration-300 hover:scale-105 w-full hover:opacity-75"
                    >
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <FaMapPin className="h-6 w-6" />
                      </div>

                      <div className="ml-6">
                        <p className="mb-2 font-bold text-gray-700 dark:text-neutral-200">
                          ul. Siemaszki 37/G6
                          <br />
                          31-207 Kraków
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                    <a
                      href="tel:+48698699982"
                      className="flex items-start duration-300 hover:scale-105 hover:opacity-75"
                    >
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <FaPhoneAlt className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold text-gray-700 dark:text-neutral-200">
                          Telefon
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          +48 698 699 982
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                    <a
                      href="mailto:info@softvag.com"
                      className="flex items-start duration-300 hover:scale-105 hover:opacity-75"
                    >
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <FaEnvelope className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold text-gray-700 dark:text-neutral-200">
                          E-mail
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          info@softvag.com
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-100 flex justify-center items-center">
                  <ul className="flex justify-center gap-6 md:gap-8">
                    <li>
                      <Link
                        href="https://www.facebook.com/softvag"
                        rel="noreferrer nofollow"
                        target="_blank"
                        className="transition"
                        title="Facebook"
                      >
                        <span className="sr-only">Facebook</span>
                        <FaFacebook className="h-6 w-6 duration-300 hover:scale-110 hover:opacity-75 text-gray-700 dark:text-neutral-200" />
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
                        <FaYoutube className="h-6 w-6 duration-300 hover:scale-110 hover:opacity-75 text-gray-700 dark:text-neutral-200" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
}
