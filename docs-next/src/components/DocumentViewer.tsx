"use client";

import { use, Suspense } from "react";
import { Document } from "@/lib/documents";
import { Breadcrumb } from "./Breadcrumb";

// Promise cache for React 19 use() API
const documentPromises = new Map<string, Promise<Document>>();

function getDocumentPromise(slug: string, fetchFn: (slug: string) => Promise<Document>) {
  if (!documentPromises.has(slug)) {
    documentPromises.set(slug, fetchFn(slug));
  }
  return documentPromises.get(slug)!;
}

// Component that uses React 19's use() API
function DocumentContent({
  documentPromise
}: {
  documentPromise: Promise<Document>
}) {
  // React 19: use() API - suspends until promise resolves
  const document = use(documentPromise);

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{document.title}</h1>
      <p className="text-gray-600 dark:text-gray-400">{document.description}</p>
      <div className="text-sm text-gray-500 mt-2">
        Last updated: {new Date(document.lastUpdated).toLocaleDateString()}
      </div>
      <div className="mt-6">{document.content}</div>
    </article>
  );
}

// Loading fallback
function DocumentSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
    </div>
  );
}

interface DocumentViewerProps {
  slug: string;
  fetchDocument: (slug: string) => Promise<Document>;
}

export function DocumentViewer({ slug, fetchDocument }: DocumentViewerProps) {
  // Create or get the cached promise
  const documentPromise = getDocumentPromise(slug, fetchDocument);

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Docs", href: "/" },
          { label: slug },
        ]}
      />

      <Suspense fallback={<DocumentSkeleton />}>
        <DocumentContent documentPromise={documentPromise} />
      </Suspense>
    </div>
  );
}
