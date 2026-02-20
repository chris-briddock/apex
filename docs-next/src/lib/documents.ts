// React 19: Async data fetching with cacheLife and cacheTag
import { cacheLife, cacheTag } from "next/cache";

export interface Document {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  lastUpdated: string;
}

// Cache for 1 hour with stale-while-revalidate
async function fetchDocumentFromCMS(slug: string): Promise<Document> {
  // In production, this would fetch from a CMS or database
  // Simulated delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    slug,
    title: slug.charAt(0).toUpperCase() + slug.slice(1),
    description: `Documentation for ${slug}`,
    content: `Content for ${slug}...`,
    category: "docs",
    lastUpdated: new Date().toISOString(),
  };
}

// React 19 + Next.js 16: Using cacheLife for declarative cache control
export async function getDocument(slug: string): Promise<Document> {
  "use cache";

  // Cache for 1 hour
  cacheLife("hours");

  // Tag for selective invalidation
  cacheTag(`doc-${slug}`);
  cacheTag("docs");

  return fetchDocumentFromCMS(slug);
}

// Get all documents
export async function getAllDocuments(): Promise<Document[]> {
  "use cache";

  cacheLife("hours");
  cacheTag("docs");
  cacheTag("all-docs");

  const slugs = ["getting-started", "components", "utilities", "customization"];

  return Promise.all(slugs.map((slug) => fetchDocumentFromCMS(slug)));
}

// Search documents
export async function searchDocuments(query: string): Promise<Document[]> {
  "use cache";

  // Cache search results for 5 minutes
  cacheLife("minutes");
  cacheTag(`search-${query}`);
  cacheTag("search");

  const allDocs = await getAllDocuments();
  return allDocs.filter((doc) =>
    doc.title.toLowerCase().includes(query.toLowerCase()) ||
    doc.description.toLowerCase().includes(query.toLowerCase())
  );
}

// Server Action to revalidate a document
export async function revalidateDocument(slug: string) {
  "use server";

  // Note: In Next.js 16, use revalidatePath or updateTag
  // revalidateTag is replaced with updateTag for selective invalidation
  const { updateTag } = await import("next/cache");

  // Update specific document tag (expires and refreshes immediately)
  await updateTag(`doc-${slug}`);

  return { success: true };
}
