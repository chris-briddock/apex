import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert } from "@/components/Alert";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Plugins - Apex Documentation",
  description: "Plugin development for Apex",
};

export default function PluginsPage() {
  const t = useTranslations("pages.plugins");

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

      <Alert type="info" title={t("pluginApi.title")}>
        {t("pluginApi.content")}
      </Alert>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("creatingPlugin.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("creatingPlugin.description")}
        </p>
        <CodeBlock
          code={`// my-plugin.js
export default {
  name: 'my-plugin',
  version: '1.0.0',

  // Add custom utilities
  utilities: {
    '.custom-class': {
      property: 'value',
    },
  },

  // Add custom components
  components: {
    '.my-component': {
      base: 'p-4 border rounded',
      variants: {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-gray-200 text-gray-800',
      },
    },
  },
};`}
          language="javascript"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("usingPlugins.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("usingPlugins.description")}
        </p>
        <CodeBlock
          code={`// config.js
import myPlugin from './my-plugin.js';

export default {
  plugins: [
    myPlugin,
    // other plugins
  ],
};`}
          language="javascript"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("officialPlugins.title")}
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>{t("officialPlugins.forms")}</li>
          <li>{t("officialPlugins.typography")}</li>
          <li>{t("officialPlugins.aspectRatio")}</li>
          <li>{t("officialPlugins.lineClamp")}</li>
        </ul>
      </section>
    </div>
  );
}
