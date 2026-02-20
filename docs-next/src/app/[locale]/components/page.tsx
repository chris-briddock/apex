import { useTranslations } from "next-intl";
import { Breadcrumb } from "@/components/Breadcrumb";
import Link from "next/link";
import { componentLinks } from "@/lib/navigation";

export const metadata = {
  title: "Components - Apex Documentation",
  description: "Pre-built components for common UI patterns in Apex",
};

export default function ComponentsPage() {
  const t = useTranslations("pages.components");
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: t("title") },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t("title")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {t("description")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {componentLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors no-underline"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {link.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
