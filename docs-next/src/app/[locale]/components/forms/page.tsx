import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FormDemo } from "@/components/FormDemo";
import { CodeBlock } from "@/components/CodeBlock";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Forms - Apex Documentation",
  description: "Form components and input styles in Apex",
};

export default function FormsPage() {
  const t = useTranslations("pages.componentPages.forms");
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: "Components", href: "/components" },
          { label: t("title") },
        ]}
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("title")}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {t("description")}
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("interactiveDemo.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {t("interactiveDemo.description")}
        </p>
        <FormDemo />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("basicInput.title")}
        </h2>
        <CodeBlock
          code={`<div class="form-group">
  <label class="form-label" for="email">${t("basicInput.emailLabel")}</label>
  <input
    type="email"
    id="email"
    class="form-input"
    placeholder="${t("basicInput.emailPlaceholder")}"
  />
</div>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("inputVariants.title")}
        </h2>
        <div className="space-y-4">
          <CodeBlock
            code={`.form-input          /* ${t("inputVariants.default")} */
.input-filled        /* ${t("inputVariants.filled")} */
.input-outlined      /* ${t("inputVariants.outlined")} */`}
            language="css"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("sizes.title")}
        </h2>
        <CodeBlock
          code={`.input-sm   /* ${t("sizes.sm")} */
.input-md   /* ${t("sizes.md")} */
.input-lg   /* ${t("sizes.lg")} */`}
          language="css"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("withIcon.title")}
        </h2>
        <CodeBlock
          code={`<div class="form-group">
  <label class="form-label" for="search">${t("withIcon.searchLabel")}</label>
  <div class="input-wrapper">
    <span class="input-icon">🔍</span>
    <input
      type="search"
      id="search"
      class="form-input input-with-icon"
      placeholder="${t("withIcon.searchPlaceholder")}"
    />
  </div>
</div>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("validationStates.title")}
        </h2>
        <CodeBlock
          code={`<!-- ${t("validationStates.errorState")} -->
<div class="form-group">
  <label class="form-label" for="email">${t("validationStates.emailLabel")}</label>
  <input
    type="email"
    id="email"
    class="form-input input-error"
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <p class="form-error" id="email-error">${t("validationStates.invalidEmail")}</p>
</div>

<!-- ${t("validationStates.successState")} -->
<div class="form-group">
  <label class="form-label" for="username">${t("validationStates.usernameLabel")}</label>
  <input
    type="text"
    id="username"
    class="form-input input-success"
  />
  <p class="form-helper text-success">${t("validationStates.usernameAvailable")}</p>
</div>`}
          language="html"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {t("checkboxesRadios.title")}
        </h2>
        <CodeBlock
          code={`<!-- ${t("checkboxesRadios.checkbox")} -->
<div class="form-group flex items-center gap-2">
  <input type="checkbox" id="remember" class="form-checkbox" />
  <label for="remember" class="text-sm">${t("checkboxesRadios.rememberMe")}</label>
</div>

<!-- ${t("checkboxesRadios.radio")} -->
<div class="form-group space-y-2">
  <div class="flex items-center gap-2">
    <input type="radio" id="option1" name="options" class="form-radio" />
    <label for="option1">${t("checkboxesRadios.option1")}</label>
  </div>
  <div class="flex items-center gap-2">
    <input type="radio" id="option2" name="options" class="form-radio" />
    <label for="option2">${t("checkboxesRadios.option2")}</label>
  </div>
</div>`}
          language="html"
        />
      </section>
    </div>
  );
}
