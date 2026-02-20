import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales, type Locale } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  // requestLocale is a promise that resolves to the locale from the URL
  let locale: string | undefined;

  try {
    locale = await requestLocale;
  } catch {
    // If requestLocale fails, use default
    locale = undefined;
  }

  // Validate and ensure a valid locale is used
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale: locale as Locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
