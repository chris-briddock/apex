import { Breadcrumb } from "@/components/Breadcrumb";
import { Alert } from "@/components/Alert";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Browser Support - Apex Documentation",
  description: "Browser support for Apex",
};

export default function BrowserSupportPage() {
  const t = useTranslations("pages.browserSupport");
  const browsers = [
    { name: "Chrome", version: "88+", icon: "🌐" },
    { name: "Firefox", version: "78+", icon: "🦊" },
    { name: "Safari", version: "14+", icon: "🧭" },
    { name: "Edge", version: "88+", icon: "🌊" },
    { name: "Opera", version: "74+", icon: "🎭" },
  ];

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: t("title") },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 mt4">
        {t("title")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 ">
        {t("description")}
      </p>

      <Alert type="info" title={t("progressiveEnhancement.title")}>
        {t("progressiveEnhancement.content")}
      </Alert>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("supportedBrowsers.title")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {browsers.map((browser) => (
            <div
              key={browser.name}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg text-center"
            >
              <div className="text-3xl mb-2">{browser.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {browser.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {browser.version}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("notSupported.title")}
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Internet Explorer 11 and below</li>
          <li>{`Chrome < 88`}</li>
          <li>{`Firefox < 78`}</li>
          <li>{`Safari < 14`}</li>
        </ul>
      </section>
    </div>
  );
}
