/**
 * Domain primitive types with branding for type safety
 * These prevent mixing of different semantic string types
 */

/** Valid locale codes supported by the application */
export type LocaleCode = "en" | "ar" | "es" | "fr" | "de";

/** Branded type for route paths to ensure type safety */
export type RoutePath = string & { readonly __brand: "RoutePath" };

/** Branded type for hex color values */
export type HexColor = string & { readonly __brand: "HexColor" };

/** Branded type for ISO date strings */
export type ISODate = string & { readonly __brand: "ISODate" };

/** Branded type for CSS class names */
export type ClassName = string & { readonly __brand: "ClassName" };

/** Branded type for semantic HTML element IDs */
export type ElementId = string & { readonly __brand: "ElementId" };

/**
 * Result type for operations that may fail
 * Use this instead of throwing errors for expected failures
 *
 * @example
 * ```ts
 * type ParseResult = Result<ParsedData, ParseError>;
 *
 * function parseJSON(input: string): ParseResult {
 *   try {
 *     return { ok: true, value: JSON.parse(input) };
 *   } catch (error) {
 *     return { ok: false, error: new ParseError("Invalid JSON") };
 *   }
 * }
 * ```
 */
export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

/**
 * Async version of Result type
 * For functions that return Promise<Result<T, E>>
 */
export type AsyncResult<T, E = Error> = Promise<Result<T, E>>;

/**
 * Helper function to create a successful Result
 */
export function ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}

/**
 * Helper function to create a failed Result
 */
export function err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}

/**
 * Type guard to check if a Result is successful
 */
export function isOk<T, E>(result: Result<T, E>): result is { ok: true; value: T } {
  return result.ok === true;
}

/**
 * Type guard to check if a Result is a failure
 */
export function isErr<T, E>(result: Result<T, E>): result is { ok: false; error: E } {
  return result.ok === false;
}

/**
 * Unwrap a Result value, throwing if it's an error
 * Use with caution - prefer pattern matching over unwrapping
 */
export function unwrap<T, E>(result: Result<T, E>): T {
  if (isOk(result)) {
    return result.value;
  }
  throw result.error;
}

/**
 * Unwrap a Result value with a default fallback
 */
export function unwrapOr<T, E>(result: Result<T, E>, defaultValue: T): T {
  return isOk(result) ? result.value : defaultValue;
}

/**
 * Map over a Result value
 */
export function map<T, U, E>(result: Result<T, E>, fn: (value: T) => U): Result<U, E> {
  return isOk(result) ? ok(fn(result.value)) : result;
}

/**
 * Map over a Result error
 */
export function mapErr<T, E, F>(result: Result<T, E>, fn: (error: E) => F): Result<T, F> {
  return isErr(result) ? err(fn(result.error)) : result;
}

/**
 * Assert that a value is never reached
 * Useful for exhaustiveness checking in switch statements
 */
export function assertNever(value: never): never {
  throw new Error(`Unhandled case: ${JSON.stringify(value)}`);
}

/**
 * Type for navigation items used throughout the application
 */
export type NavItem = {
  id: string;
  title: string;
  href: RoutePath;
  description?: string;
};

/**
 * Type for navigation sections
 */
export type NavSection = {
  id: string;
  title: string;
  items: NavItem[];
};

/**
 * Type for sitemap entries
 */
export type SitemapEntry = {
  url: RoutePath;
  lastModified?: Date | ISODate;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};

/**
 * Type for theme variants
 */
export type Theme = "light" | "dark" | "system";

/**
 * Type for feedback ratings
 */
export type FeedbackRating = "up" | "down";

/**
 * Type for code languages supported by CodeBlock
 */
export type CodeLanguage =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "jsx"
  | "tsx"
  | "json"
  | "bash"
  | "scss"
  | "yaml"
  | "markdown";

/**
 * Type for alert variants
 */
export type AlertType = "info" | "success" | "warning" | "error";

/**
 * Type for icon sizes
 */
export type IconSize = 16 | 20 | 24 | 32 | 48;

/**
 * Type for breakpoint keys
 */
export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

/**
 * Utility type to extract the element type from an array
 */
export type ElementType<T extends readonly unknown[]> = T extends readonly (infer E)[] ? E : never;

/**
 * Utility type for component props with children
 */
export type WithChildren<P = unknown> = P & { children?: React.ReactNode };

/**
 * Utility type for component props with className
 */
export type WithClassName<P = unknown> = P & { className?: ClassName };

/**
 * Utility type for making specific properties required
 */
export type RequireKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * Utility type for making specific properties optional
 */
export type PartialKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
