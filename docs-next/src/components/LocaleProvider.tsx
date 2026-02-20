"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import { rtlLocales } from "@/i18n/config";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale();

  useEffect(() => {
    // Update document direction based on locale
    const isRtl = rtlLocales.includes(locale as "ar");
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale]);

  return <>{children}</>;
}
