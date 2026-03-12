import type { MetadataRoute } from "next";
import { locales, defaultLocale } from "@/i18n/config";
import { getSitemapEntries } from "@/lib/navigation";

const BASE_URL = "https://docs.apex-css.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries = await getSitemapEntries();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for all locales
  for (const entry of entries) {
    const url = entry.url;

    // Add alternates for all locales
    const alternates = {
      languages: Object.fromEntries(
        locales.map((locale) => {
          const path = url.replace(`${BASE_URL}/`, "").replace(`${BASE_URL}`, "");
          const localeUrl = locale === defaultLocale
            ? `${BASE_URL}/${path}`
            : `${BASE_URL}/${locale}/${path}`;
          return [locale, localeUrl];
        })
      ),
    };

    sitemapEntries.push({
      url,
      lastModified: entry.lastModified || new Date(),
      changeFrequency: entry.changeFrequency || "weekly",
      priority: entry.priority || 0.8,
      alternates,
    });
  }

  return sitemapEntries;
}
