import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative -z-1 w-full  min-h-screen flex justify-items-center items-center">
      <span className="absolute  h-screen w-screen lg:w-full  bg-black">
        <Image
          fill
          src="/skrzynia.webp"
          alt="logo"
          className="object-cover h-screen w-screen lg:w-full md:object-cover opacity-40"
        />
      </span>

      <div className="w-100 mx-4 relative md:mx-auto ">
        <div className="text-center">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,15%,0.8)] dark:shadow-black/20 md:py-16 md:px-12">
            <h1 className="mt-6 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl">
              Modyfikacje charakterystyki pracy <br /> automatycznych skrzyń
              biegów DSG i&nbsp;S Tronic <br />{" "}
              +&nbsp;kodowania&nbsp;i&nbsp;adaptacje nowych funkcjonalności
            </h1>

            <Link
              className="mb-2 inline-block rounded bg-yellow-500 px-12 pt-4 pb-3.5 text-sm uppercase leading-normal text-black font-bold shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
              data-te-ripple-init
              data-te-ripple-color="light"
              href="#film"
              role="button"
            >
              Sprawdź
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
