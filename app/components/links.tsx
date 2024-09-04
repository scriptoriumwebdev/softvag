"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { TiAdjustBrightness } from "react-icons/ti";
import { RiMoonClearFill } from "react-icons/ri";
import { Divide as Hamburger } from "hamburger-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Banner from "./banner";

export function Links() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const navLinks = [
    { name: "Strona Główna", href: "/" },
    { name: "O Firmie", href: "/o-firmie" },
    {
      name: "Oferta",
      href: "/#",
      submenu: [
        {
          name: "Modyfikacje skrzyń DSG i S Tronic",
          href: "/modyfikacje-oprogramowania-skrzyn-biegow-DSG-i-S-Tronic",
        },
        {
          name: "Kodowania i adaptacje",
          href: "/kodowania-i-adaptacje-funkcjonalnosci-samochodu",
        },
      ],
    },
    { name: "Pytania i odpowiedzi", href: "/pytania-i-odpowiedzi" },
    { name: "Opinie", href: "/opinie" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);

  const useOutsideMenu = (ref: React.RefObject<HTMLInputElement>) => {
    useEffect(() => {
      function handleClickOutside(e: MouseEvent) {
        const target = e.target as Node;
        if (ref.current && !ref.current.contains(target)) {
          setOpen(false);
        }
      }
      document.addEventListener(`mousedown`, handleClickOutside);
      return () => {
        document.removeEventListener(`mousedown`, handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideMenu(menuRef);

  return (
    <nav className="fixed w-screen bg-gray-50 dark:bg-zinc-900 shadow-lg z-10 ">
      <div className="px-8 mx-auto max-w-7xl bg-gray-50 dark:bg-zinc-900  relative z-1">
        <div className="flex items-center justify-between h-16">
          <div className="w-screen justify-between flex items-center">
            <Link className="flex-shrink-0" href="/">
              <div>
                <Image
                  className="h-8 hidden dark:block"
                  src="/logoDark.svg"
                  alt="softVAG Logo"
                  width="150"
                  height="30"
                />
                <Image
                  className="h-8 block dark:hidden"
                  src="logo.svg"
                  alt="softVAG Logo"
                  width="150"
                  height="30"
                />
              </div>
            </Link>
            <div className="hidden md:flex ">
              <div className="flex items-center ml-10 space-x-4">
                <ul className="flex items-center ml-10 space-x-6">
                  {navLinks.map((link) => {
                    return (
                      <li key={link.name} className="flex items-center">
                        {!link.submenu ? (
                          <Link
                            className={`group transition duration-75 pt-2
                          ${
                            pathname === link.href
                              ? "text-yellow-500 dark:text-yellow-400 px-3 py-2 rounded-md text-sm font-bold"
                              : "text-slate-700 duration-75  dark:text-gray-50 px-3 py-2 rounded-md text-sm font-bold"
                          }`}
                            href={link.href}
                          >
                            <span className="flex items-center">
                              {link.name}
                            </span>

                            <span
                              className={`  ${
                                pathname === link.href
                                  ? "max-w-full"
                                  : "group-hover:max-w-full"
                              } block max-w-0   transition-all duration-75 h-0.5 bg-slate-700 dark:bg-yellow-400`}
                            ></span>
                          </Link>
                        ) : (
                          <Menu as="div" className="relative">
                            <Menu.Button
                              className={`group transition duration-75 pt-2
                               ${
                                 pathname === link.href
                                   ? "text-yellow-500 dark:text-yellow-400 px-3 py-2 rounded-md text-sm font-bold"
                                   : "text-slate-700 duration-75  dark:text-gray-50 px-3 py-2 rounded-md text-sm font-bold"
                               }`}
                            >
                              <span className="flex items-center">
                                {link.name}
                                <FaCaretDown className="h-4 w-4" />
                              </span>
                            </Menu.Button>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-75"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute left-1/2 z-10 mt-3 flex w-screen max-w-min -translate-x-1/2 px-4">
                                <div className="w-72 shrink rounded-md bg-gray-100 dark:bg-zinc-800 p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5 text-justify">
                                  {link.submenu.map((item) => (
                                    <Menu.Item key={item.name}>
                                      <Link
                                        href={item.href}
                                        className={`block p-2 group
                                          ${
                                            pathname === item.href
                                              ? "text-yellow-500 dark:text-yellow-400"
                                              : "text-slate-700 duration-75  dark:text-gray-50"
                                          }`}
                                      >
                                        {item.name}
                                        <span
                                          className={`  ${
                                            pathname === item.href
                                              ? "max-w-full"
                                              : "group-hover:max-w-full"
                                          } block max-w-0  z-20 transition-all duration-75 h-0.5 bg-slate-700 dark:bg-yellow-400`}
                                        ></span>
                                      </Link>
                                    </Menu.Item>
                                  ))}
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        )}
                      </li>
                    );
                  })}
                  <li>
                    <button
                      onClick={() => setTheme("light")}
                      className="hidden dark:block"
                    >
                      <TiAdjustBrightness />
                    </button>
                    <button
                      onClick={() => setTheme("dark")}
                      className="block dark:hidden"
                    >
                      <RiMoonClearFill />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="flex items-center ml-4 md:ml-6"></div>
          </div>

          <div className="flex -mr-2 md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
            {/* <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-8 h-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button> */}
          </div>
        </div>
      </div>

      <div className="md:hidden" ref={menuRef}>
        <div
          className={`duration-300  ${
            isOpen ? "mt-0 " : "-mt-80 overflow-hidden"
          } px-2 py-4 pb-3 space-y-1 sm:px-3 text-center shadow-md`}
        >
          <ul>
            {navLinks.map((link) => {
              return (
                <li key={link.name}>
                  {!link.submenu ? (
                    <Link
                      onClick={() => setOpen(false)}
                      className={
                        pathname === link.href
                          ? "text-amber-500 dark:text-yellow-400 hover:text-yellow-400  dark:hover:text-yellow-300 px-3 py-2 rounded-md text-base font-medium block "
                          : "text-slate-700  dark:text-gray-50  hover:text-yellow-400 dark:hover:text-yellow-300 px-3 py-2 rounded-md text-base font-bold block"
                      }
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Menu as="div" className="relative">
                      <Menu.Button
                        className={`group transition duration-75 pt-2 
                       ${
                         pathname === link.href
                           ? "text-yellow-500 dark:text-yellow-400 px-3 py-2 rounded-md text-base font-bold"
                           : "text-slate-700 duration-75  dark:text-gray-50 px-3 py-2 rounded-md text-base font-bold"
                       }`}
                      >
                        <span className="flex items-center ">
                          {link.name}
                          <FaCaretDown className="h-4 w-4" />
                        </span>
                      </Menu.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-75"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="w-full z-10 mt-2 flex px-4 items-center justify-center">
                          <div className="text-gray-900 ring-gray-900/5 w-40 flex items-center flex-col">
                            {link.submenu.map((item) => (
                              <Menu.Item key={item.name}>
                                <Link
                                  onClick={() => setOpen(false)}
                                  href={item.href}
                                  className={
                                    pathname === link.href
                                      ? "text-amber-500 dark:text-yellow-400 hover:text-yellow-400  dark:hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium block "
                                      : "text-slate-700  dark:text-gray-50  hover:text-yellow-400 dark:hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-bold block"
                                  }
                                >
                                  {item.name}
                                </Link>
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  )}
                </li>
              );
            })}
            <li className="flex justify-center items-center my-4">
              <button
                onClick={() => setTheme("light")}
                className="hidden dark:flex"
              >
                <TiAdjustBrightness />
              </button>
              <button
                onClick={() => setTheme("dark")}
                className="flex dark:hidden"
              >
                <RiMoonClearFill />
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* <Banner /> */}
    </nav>
  );
}
