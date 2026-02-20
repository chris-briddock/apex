import { notFound } from "next/navigation";
import { locales, localeLabels } from "@/i18n/config";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Sidebar } from "@/components/Sidebar";
import { TableOfContents } from "@/components/TableOfContents";
import { SearchProvider } from "@/components/SearchProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { ReadingProgress } from "@/components/ReadingProgress";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";
import { SkipLink } from "@/components/SkipLink";
import { LocaleProvider } from "@/components/LocaleProvider";
import { VersionProvider } from "@/components/VersionProvider";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Next.js 16: params is now async - must await it
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const info = localeLabels[locale as keyof typeof localeLabels];

  return {
    title: `Apex Documentation - ${info?.label || "English"}`,
    description: "Apex - A comprehensive utility-first CSS framework",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const messages = await getMessages();

  // NOTE: Do NOT include <html> or <body> here - they are in the root layout
  // This layout only provides the locale-specific providers and content
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <LocaleProvider>
          <VersionProvider>
            <SearchProvider>
              <div className="min-h-screen bg-white dark:bg-gray-900">
                <SkipLink />
                <ReadingProgress />
                <Sidebar />

                <main id="main-content" className="md:ml-64 p-4 md:p-8 max-w-4xl mx-auto rtl:md:ml-0 rtl:md:mr-64">
                  {children}
                </main>

                <TableOfContents />
                <SmoothScroll />
                <FeedbackWidget />
                <KeyboardShortcuts />
              </div>
            </SearchProvider>
          </VersionProvider>
        </LocaleProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
