"use client";

interface CodeSandboxButtonProps {
  code: string;
  title?: string;
  description?: string;
}

export function CodeSandboxButton({
  code,
  title = "Apex Example",
  description = "Interactive Apex example",
}: CodeSandboxButtonProps) {
  const openInCodeSandbox = () => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#3b82f6',
          }
        }
      }
    }
  </script>
</head>
<body class="bg-gray-50 p-8">
  ${code}
</body>
</html>`;

    const files = {
      "index.html": {
        content: html,
      },
      "package.json": {
        content: JSON.stringify({
          name: "apexcss-example",
          version: "1.0.0",
          description,
        }, null, 2),
      },
    };

    const parameters = btoa(JSON.stringify({ files }));
    const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openInCodeSandbox}
      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm font-medium"
      title="Open in CodeSandbox"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 6l10.455-6L22.91 6 23 17.95 12.545 24 2 18V6zm2.088 2.058l8.357-4.837v9.66l-8.357 4.836V8.058zm10.91 4.837l8.357-4.836V18l-8.357 4.836v-9.94zM12.545 3.2L20.8 8 12.545 12.8 4.29 8l8.255-4.8z"/>
      </svg>
      Open in CodeSandbox
    </button>
  );
}

export function StackBlitzButton({
  code,
  title = "Apex Example",
}: CodeSandboxButtonProps) {
  const openInStackBlitz = () => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 p-8">
  ${code}
</body>
</html>`;

    // For now, open with the code in a data URL approach
    const blob = new Blob([html], { type: "text/html" });
    const dataUrl = URL.createObjectURL(blob);
    window.open(dataUrl, "_blank");
  };

  return (
    <button
      onClick={openInStackBlitz}
      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
      title="Open in new tab"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.002 1L23.05 7.06l-.036 9.884-11.012 6.062L1 17.002V7.068l11.002-6.07zm.023 2.236L3.162 7.748l8.863 4.874 8.836-4.874-8.836-4.512zm9.876 5.926l-8.882 4.9v9.79l8.882-4.9v-9.79zM2.14 9.162v9.79l8.882 4.9v-9.79L2.14 9.162z"/>
      </svg>
      Open in StackBlitz
    </button>
  );
}

interface CodePlaygroundButtonsProps {
  code: string;
  title?: string;
  description?: string;
}

export function CodePlaygroundButtons({ code, title, description }: CodePlaygroundButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      <CodeSandboxButton code={code} title={title} description={description} />
      <StackBlitzButton code={code} title={title} />
    </div>
  );
}
