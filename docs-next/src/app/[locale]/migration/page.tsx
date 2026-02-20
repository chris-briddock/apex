import { Breadcrumb } from "@/components/Breadcrumb";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Migration Guides - Apex Documentation",
  description: "Migration guides for switching to Apex",
};

export default function MigrationPage() {
  const t = useTranslations("pages.migration");
  const guides = [
    {
      title: t("guides.fromTailwind.title"),
      href: "/migration/from-tailwind",
      description: t("guides.fromTailwind.description"),
      icon: "🎨",
    },
    {
      title: t("guides.fromBootstrap.title"),
      href: "/migration/from-bootstrap",
      description: t("guides.fromBootstrap.description"),
      icon: "🅱️",
    },
    {
      title: t("guides.fromBulma.title"),
      href: "/migration/from-bulma",
      description: t("guides.fromBulma.description"),
      icon: "🌸",
    },
  ];

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors no-underline"
          >
            <div className="text-4xl mb-3">{guide.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {guide.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {guide.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
