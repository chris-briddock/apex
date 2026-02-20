import { Breadcrumb } from "@/components/Breadcrumb";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Modals - Apex Documentation",
  description: "Modal component documentation with examples",
};

export default function ModalsPage() {
  const t = useTranslations("pages.componentPages.modals");
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

      {/* Basic Modal */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("basicModal.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("basicModal.description")}
        </p>
        <CodeBlock
          code={`<div class="fixed inset-0 z-50 overflow-y-auto">
  <div class="flex min-h-screen items-center justify-center p-4">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>

    <!-- Modal -->
    <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Modal Title
        </h3>
        <button class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Body -->
      <div class="p-4">
        <p class="text-gray-700 dark:text-gray-300">
          Modal content goes here...
        </p>
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-700">
        <button class="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          Cancel
        </button>
        <button class="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors">
          Confirm
        </button>
      </div>
    </div>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Centered Modal */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("centeredModal.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("centeredModal.description")}
        </p>
        <CodeBlock
          code={`<div class="fixed inset-0 z-50 overflow-y-auto">
  <div class="flex min-h-screen items-center justify-center p-4">
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
    <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full">
      <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Centered Modal
        </h3>
        <p class="text-gray-700 dark:text-gray-300">
          This modal is centered on the screen.
        </p>
      </div>
    </div>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Full Screen Modal */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("fullScreenModal.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("fullScreenModal.description")}
        </p>
        <CodeBlock
          code={`<div class="fixed inset-0 z-50 overflow-y-auto">
  <div class="flex min-h-screen">
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
    <div class="relative bg-white dark:bg-gray-800 w-full h-full">
      <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Full Screen Modal
        </h3>
        <button class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="p-6">
        <p class="text-gray-700 dark:text-gray-300">
          Full screen modal content...
        </p>
      </div>
    </div>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Modal with Sizes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("modalSizes.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("modalSizes.description")}
        </p>
        <CodeBlock
          code={`<!-- Small Modal -->
<div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-sm w-full">
  <!-- Modal content -->
</div>

<!-- Medium Modal (Default) -->
<div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
  <!-- Modal content -->
</div>

<!-- Large Modal -->
<div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full">
  <!-- Modal content -->
</div>

<!-- Extra Large Modal -->
<div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full">
  <!-- Modal content -->
</div>

<!-- Full Width Modal -->
<div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full">
  <!-- Modal content -->
</div>`}
          language="html"
        />
      </section>

      {/* Modal without Header */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("modalWithoutHeader.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("modalWithoutHeader.description")}
        </p>
        <CodeBlock
          code={`<div class="fixed inset-0 z-50 overflow-y-auto">
  <div class="flex min-h-screen items-center justify-center p-4">
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
    <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
      <p class="text-gray-700 dark:text-gray-300 mb-4">
        Modal content without header...
      </p>
      <div class="flex justify-end gap-2">
        <button class="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          Cancel
        </button>
        <button class="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors">
          Confirm
        </button>
      </div>
    </div>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Scrollable Modal */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("scrollableModal.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("scrollableModal.description")}
        </p>
        <CodeBlock
          code={`<div class="fixed inset-0 z-50 overflow-y-auto">
  <div class="flex min-h-screen items-center justify-center p-4">
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
    <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full flex flex-col max-h-[90vh]">
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Scrollable Modal
        </h3>
        <button class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Scrollable Body -->
      <div class="p-4 overflow-y-auto flex-1">
        <p class="text-gray-700 dark:text-gray-300">
          Long content that scrolls...
        </p>
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
        <button class="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          Cancel
        </button>
        <button class="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors">
          Confirm
        </button>
      </div>
    </div>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Confirmation Modal */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("confirmationModal.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {t("confirmationModal.description")}
        </p>
        <CodeBlock
          code={`<div class="fixed inset-0 z-50 overflow-y-auto">
  <div class="flex min-h-screen items-center justify-center p-4">
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
    <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
      <div class="p-6 text-center">
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
          <svg class="h-6 w-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Are you sure?
        </h3>
        <p class="text-gray-500 dark:text-gray-400 mb-6">
          This action cannot be undone. This will permanently delete the item.
        </p>
        <div class="flex justify-center gap-3">
          <button class="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            Cancel
          </button>
          <button class="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`}
          language="html"
        />
      </section>

      {/* Modal with Form */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Modal with Form
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          A modal containing a form for user input.
        </p>
        <CodeBlock
          code={`<div class="fixed inset-0 z-50 overflow-y-auto">
  <div class="flex min-h-screen items-center justify-center p-4">
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
    <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
      <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Edit Profile
        </h3>
        <button class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <form class="p-4 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input type="text" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input type="email" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" />
        </div>
      </form>

      <div class="flex justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-700">
        <button class="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          Cancel
        </button>
        <button class="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors">
          Save
        </button>
      </div>
    </div>
  </div>
</div>`}
          language="html"
        />
      </section>
    </div>
  );
}
