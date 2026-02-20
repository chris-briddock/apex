export type Locale = "en" | "ar" | "es" | "fr" | "de";

export const locales: Locale[] = ["en", "ar", "es", "fr", "de"];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, { label: string; dir: "ltr" | "rtl"; flag: string }> = {
  en: { label: "English", dir: "ltr", flag: "🇺🇸" },
  ar: { label: "العربية", dir: "rtl", flag: "🇸🇦" },
  es: { label: "Español", dir: "ltr", flag: "🇪🇸" },
  fr: { label: "Français", dir: "ltr", flag: "🇫🇷" },
  de: { label: "Deutsch", dir: "ltr", flag: "🇩🇪" },
};

export const rtlLocales: Locale[] = ["ar"];
