"use client";
import { ComponentComponentButton } from "@/gql/graphql";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";

export default function CTA({ URL, Title }: ComponentComponentButton) {
  return (
    <Link
      className="mb-2 inline-block rounded bg-yellow-500 px-12 pt-4 pb-3.5 text-sm uppercase leading-normal text-black font-bold shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
      data-te-ripple-init
      data-te-ripple-color="light"
      href={URL as string}
      role="button"
      id="cta"
      onClick={() => sendGTMEvent({ event: "CTAButton2", value: "xyz" })}
    >
      {Title}
    </Link>
  );
}
