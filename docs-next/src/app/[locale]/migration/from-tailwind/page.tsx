import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Migration from Tailwind - Apex Documentation",
  description: "Migrate from Tailwind CSS to Apex",
};

export default function FromTailwindPage() {
  const t = useTranslations("pages.migrationPages.fromTailwind");

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Migration", href: "/migration" },
          { label: "From Tailwind" },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t("title")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {t("description")}
      </p>

      <Alert type={t("alert.type") as "warning" | "info" | "success" | "error"} title={t("alert.title")}>
        {t("alert.message")}
      </Alert>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("classNameChanges.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("classNameChanges.description")}
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2 px-4 font-semibold">{t("classNameChanges.tailwindHeader")}</th>
                <th className="text-left py-2 px-4 font-semibold">{t("classNameChanges.apexcssHeader")}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { tailwind: "flex", apex: "flex" },
                { tailwind: "grid", apex: "grid" },
                { tailwind: "hidden", apex: "hidden" },
                { tailwind: "block", apex: "block" },
                { tailwind: "rounded", apex: "rounded" },
                { tailwind: "shadow", apex: "shadow" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 px-4 font-mono text-gray-600 dark:text-gray-400">{row.tailwind}</td>
                  <td className="py-2 px-4 font-mono text-blue-600 dark:text-blue-400">{row.apex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("configuration.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("configuration.description")}
        </p>
        <CodeBlock
          code={`// ${t("configuration.oldConfig")}
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

// ${t("configuration.newConfig")}
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#3b82f6',
    },
  },
  utilities: {
    spacing: true,
    colors: true,
    typography: true,
  },
}`}
          language="javascript"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("buildProcess.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("buildProcess.description")}
        </p>
        <CodeBlock
          code={`// ${t("buildProcess.packageJson")}
{
  "scripts": {
    "build": "apexcss build",
    "watch": "apexcss watch"
  }
}`}
          language="json"
        />
      </section>
    </div>
  );
}
