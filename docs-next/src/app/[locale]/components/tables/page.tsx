import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Tables - Apex Documentation",
  description: "Table component documentation with examples",
};

export default function TablesPage() {
  const t = useTranslations("pages.componentPages.tables");
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Components", href: "/components" },
          { label: t("title") },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t("title")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {t("description")}
      </p>

      {/* Basic Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("basicTable.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("basicTable.description")}
        </p>
        <CodeBlock
          code={`<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
  <thead class="bg-gray-50 dark:bg-gray-800">
    <tr>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Name
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Email
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Role
      </th>
    </tr>
  </thead>
  <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
    <tr>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        John Doe
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        john@example.com
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        Admin
      </td>
    </tr>
    <tr>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        Jane Smith
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        jane@example.com
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        User
      </td>
    </tr>
  </tbody>
</table>`}
          language="html"
        />
      </section>

      {/* Striped Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("stripedTable.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("stripedTable.description")}
        </p>
        <CodeBlock
          code={`<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
  <thead class="bg-gray-50 dark:bg-gray-800">
    <tr>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Name
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Email
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Role
      </th>
    </tr>
  </thead>
  <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
    <tr class="bg-white dark:bg-gray-900">
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        John Doe
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        john@example.com
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        Admin
      </td>
    </tr>
    <tr class="bg-gray-50 dark:bg-gray-800">
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        Jane Smith
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        jane@example.com
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        User
      </td>
    </tr>
    <tr class="bg-white dark:bg-gray-900">
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        Bob Johnson
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        bob@example.com
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        User
      </td>
    </tr>
  </tbody>
</table>`}
          language="html"
        />
      </section>

      {/* Hoverable Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("hoverableTable.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("hoverableTable.description")}
        </p>
        <CodeBlock
          code={`<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
  <thead class="bg-gray-50 dark:bg-gray-800">
    <tr>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Name
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Email
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Role
      </th>
    </tr>
  </thead>
  <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
    <tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        John Doe
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        john@example.com
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        Admin
      </td>
    </tr>
    <tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        Jane Smith
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        jane@example.com
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        User
      </td>
    </tr>
  </tbody>
</table>`}
          language="html"
        />
      </section>

      {/* Bordered Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("borderedTable.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("borderedTable.description")}
        </p>
        <CodeBlock
          code={`<table class="min-w-full border-collapse border border-gray-200 dark:border-gray-700">
  <thead class="bg-gray-50 dark:bg-gray-800">
    <tr>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border border-gray-200 dark:border-gray-700">
        Name
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border border-gray-200 dark:border-gray-700">
        Email
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border border-gray-200 dark:border-gray-700">
        Role
      </th>
    </tr>
  </thead>
  <tbody class="bg-white dark:bg-gray-900">
    <tr>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">
        John Doe
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
        john@example.com
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
        Admin
      </td>
    </tr>
    <tr>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">
        Jane Smith
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
        jane@example.com
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
        User
      </td>
    </tr>
  </tbody>
</table>`}
          language="html"
        />
      </section>

      {/* Compact Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("compactTable.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("compactTable.description")}
        </p>
        <CodeBlock
          code={`<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
  <thead class="bg-gray-50 dark:bg-gray-800">
    <tr>
      <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Name
      </th>
      <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Email
      </th>
      <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Role
      </th>
    </tr>
  </thead>
  <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
    <tr>
      <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        John Doe
      </td>
      <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        john@example.com
      </td>
      <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        Admin
      </td>
    </tr>
    <tr>
      <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        Jane Smith
      </td>
      <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        jane@example.com
      </td>
      <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        User
      </td>
    </tr>
  </tbody>
</table>`}
          language="html"
        />
      </section>

      {/* Table with Actions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("tableWithActions.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("tableWithActions.description")}
        </p>
        <CodeBlock
          code={`<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
  <thead class="bg-gray-50 dark:bg-gray-800">
    <tr>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Name
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Email
      </th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Role
      </th>
      <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Actions
      </th>
    </tr>
  </thead>
  <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
    <tr>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        John Doe
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        john@example.com
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        Admin
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" class="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-4">
          Edit
        </a>
        <a href="#" class="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
          Delete
        </a>
      </td>
    </tr>
  </tbody>
</table>`}
          language="html"
        />
      </section>

      {/* Responsive Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Responsive Table
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Make tables scroll horizontally on small screens.
        </p>
        <CodeBlock
          code={`<div class="overflow-x-auto">
  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <thead class="bg-gray-50 dark:bg-gray-800">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Name
        </th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Email
        </th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Role
        </th>
      </tr>
    </thead>
    <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
          John Doe
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
          john@example.com
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
          Admin
        </td>
      </tr>
    </tbody>
  </table>
</div>`}
          language="html"
        />
      </section>
    </div>
  );
}
