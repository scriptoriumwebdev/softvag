"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { hasCookie, setCookie, getCookie } from "cookies-next";

export default function CookieBanner() {
  const get = getCookie("cookie_consent");
  const has = hasCookie("cookie_consent");
  const [showConsentBanner, setShowConsentBanner] = useState(true);
  const [pageHasCookie, setPageHasCookie] = useState(get);
  useEffect(() => {
    setShowConsentBanner(has);
  }, [has]);

  useEffect(() => {
    // setShowConsentBanner(has);
    if (get === "true") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_user_data: "denied",
      });
    } else {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_user_data: "denied",
      });
    }
  }, [get]);

  const acceptCookie = () => {
    setShowConsentBanner(true);
    setCookie("cookie_consent", "true", {});
  };

  const declineCookie = () => {
    setShowConsentBanner(true);
    setCookie("cookie_consent", "false", {});
  };

  if (showConsentBanner) {
    return null;
  }

  return (
    <div
      className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        ${"flex"}  px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-white dark:bg-gray-600 dark:text-gray-100 rounded-lg shadow`}
    >
      <div className="text-center">
        <Link href="/polityka-prywatnosci/#cookies">
          <p>
            Ta strona używa plików{" "}
            <span className="text-base font-semibold leading-7 text-indigo-600  dark:text-indigo-400 hover:opacity-75 ">
              cookies (ciasteczka)
            </span>
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => declineCookie()}
          className="px-5 py-2 text-gray-700 dark:text-gray-300 rounded-md border-gray-900"
        >
          Odrzuć
        </button>
        <button
          onClick={() => acceptCookie()}
          className="bg-gray-900 px-5 py-2 text-white rounded-lg"
        >
          Zaakceptuj
        </button>
      </div>
    </div>
  );
}
