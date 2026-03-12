# AGENTS.md — Coding Standards & Agent Guidelines

This file defines the coding standards, tooling policies, and architectural rules for
all AI agents operating in this project. These rules are **non-negotiable** and apply
to every file touched across the codebase.

---

## ⚠️ Global Rule: Always Consult Context7

**Before writing or advising on any API, configuration option, or language feature —
consult Context7 first.** Do not rely on training data alone. Technology moves fast,
and stale advice causes real bugs.

### When Context7 is mandatory (non-exhaustive list)

| Technology | Consult before... |
| --- | --- |
| **React** | Any hook or API from React 19+ (`use`, `useActionState`, `useOptimistic`, `useFormStatus`, `useEffectEvent`, `<Activity>`, etc.) |
| **React** | Suspense behaviour, transitions, concurrent rendering, or the React Compiler |
| **Next.js** | Any caching strategy (`fetch` options, `unstable_cache`, `revalidate`) |
| **Next.js** | Any `next.config` option, middleware, Edge vs Node runtime, or `unstable_` API |
| **Next.js** | Metadata, OG image generation, `generateStaticParams` |
| **TypeScript** | Any `tsconfig.json` compiler option, decorator behaviour, or version-specific feature |
| **Sass** | Any colour function (`color.adjust`, `color.mix`, `color.scale`) or recently deprecated API |
| **CSS** | Any feature introduced after 2022 (`@scope`, Anchor Positioning, View Transitions, native nesting) |
| **CSS** | Browser support / Baseline status for any modern property or selector |

### Context7 lookup pattern

1. Identify the topic (e.g. `"Next.js fetch caching"`, `"React useOptimistic"`)
2. Resolve the library ID:
   - React → `/facebook/react`
   - Next.js → `/vercel/next.js`
   - TypeScript → `/microsoft/typescript`
   - Sass → `/sass/sass` or `/sass/dart-sass`
   - CSS/MDN → `/mdn/content`
3. Call `get-library-docs` with a focused topic query
4. Ground the response in the returned docs; note the version where relevant

---

## Stack Overview

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (strict mode)
- **UI library:** React 19+
- **Styles:** CSS + Sass/SCSS (CSS Modules per component)

---

## TypeScript

### Compiler Configuration

Always use the strictest possible baseline. Never relax a flag to fix a type error —
fix the type instead.

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noFallthroughCasesInSwitch": true,
    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force"
  }
}
```

### Type System Rules

**Prefer `type` over `interface`** — use `interface` only for declaration merging
(e.g. augmenting a third-party module or global).

```ts
// Preferred
type User = {
  id: string
  email: string
  role: Role
}
```

**Never use `any`** — use these instead:

- `unknown` with narrowing guards
- Generics to preserve type information
- `never` to mark unreachable branches
- `Parameters<T>`, `ReturnType<T>`, `Awaited<T>` to extract types

**Use `satisfies` to validate without widening:**

```ts
const config = {
  port: 3000,
  host: "localhost",
} satisfies ServerConfig
// config.port is still narrowed to `3000`, not widened to `number`
```

**Use `as const` for literal inference:**

```ts
const ROLES = ["admin", "editor", "viewer"] as const
type Role = (typeof ROLES)[number] // "admin" | "editor" | "viewer"
```

**Prefer discriminated unions over optional properties:**

```ts
// Avoid
type Response = {
  data?: User
  error?: string
  loading?: boolean
}

// Prefer
type Response =
  | { status: "loading" }
  | { status: "success"; data: User }
  | { status: "error"; error: string }
```

**Use branded/opaque types for domain primitives:**

```ts
type UserId = string & { readonly __brand: "UserId" }
type ProductId = string & { readonly __brand: "ProductId" }
```

**Use Result types over thrown errors:**

```ts
type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E }
```

### Advanced Patterns

```ts
// Template literal types
type CSSProperty = `--${string}`

// Mapped types
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

// Exhaustiveness checking — always do this in switch statements over union types
function assertNever(value: never): never {
  throw new Error(`Unhandled case: ${JSON.stringify(value)}`)
}
```

### Naming Conventions

| Thing | Convention | Example |
| --- | --- | --- |
| Types & Interfaces | PascalCase | `UserProfile`, `ApiResponse<T>` |
| Type parameters | Single uppercase or descriptive | `T`, `TData`, `TError` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_RETRIES` |
| Private class members | Native `#` prefix | `#cache` |

### Imports

```ts
// Always separate type-only imports
import type { User } from "./types"
import { createUser } from "./user.service"
```

- Never mix value and type imports when using `verbatimModuleSyntax`
- Use barrel files (`index.ts`) sparingly — they hurt tree-shaking
- Mark server-only modules with the `server-only` package

### Code Quality

- Every function must have an explicit return type annotation
- Avoid type assertions (`as Foo`) — add a comment explaining why if unavoidable
- Use `const` everywhere; `let` only when reassignment is genuinely needed
- Avoid non-null assertions (`!`) — use optional chaining or explicit guards

---

## React

> **Consult Context7 (`/facebook/react`) before using any React 19+ API.**
> React 19.x introduced APIs that may not be fully reflected in training data.

### React 19 — Core APIs

#### Actions

Actions are async functions passed to transitions. They replace manual `isPending` /
`error` / optimistic state management with `useState`.

```tsx
function UpdateName() {
  const [name, setName] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await updateName(name)
      if (error) { setError(error); return }
      redirect("/path")
    })
  }
}
```

#### `useActionState`

Wraps an Action and returns its latest result, a callable action, and a pending flag.

```tsx
const [error, submitAction, isPending] = useActionState(
  async (previousState: string | null, formData: FormData) => {
    const error = await updateName(formData.get("name") as string)
    if (error) return error
    redirect("/path")
    return null
  },
  null,
)
```

#### `useOptimistic`

Shows an instant optimistic UI value while an async action is in flight.
Automatically reverts on error.

```tsx
const [optimisticMessages, addOptimisticMessage] = useOptimistic(
  messages,
  (state: Message[], newMessage: string) => [
    ...state,
    { id: crypto.randomUUID(), text: newMessage, sending: true },
  ],
)
```

#### `useFormStatus` (react-dom)

Reads the nearest parent `<form>` status without prop drilling.

```tsx
import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()
  return <button type="submit" disabled={pending}>{pending ? "Saving..." : "Save"}</button>
}
```

#### `use` — Reading Promises and Context in Render

Unlike hooks, `use` can be called conditionally and inside loops.

```tsx
// Reading a Promise — must be created outside render
function Comments({ commentsPromise }: { commentsPromise: Promise<Comment[]> }) {
  const comments = use(commentsPromise)
  return comments.map(c => <p key={c.id}>{c.text}</p>)
}

// Always wrap in Suspense + error boundary
<Suspense fallback={<Spinner />}>
  <Comments commentsPromise={promise} />
</Suspense>
```

#### `ref` as a Prop — `forwardRef` is Deprecated

```tsx
// React 19 — ref is just a prop
type InputProps = {
  placeholder: string
  ref?: React.Ref<HTMLInputElement>
}

function MyInput({ placeholder, ref }: InputProps) {
  return <input placeholder={placeholder} ref={ref} />
}
```

Run the official React 19 codemod to migrate existing `forwardRef` usages.

#### `<Context>` as Provider — `<Context.Provider>` is Deprecated

```tsx
// React 19
<ThemeContext value="dark">
  <Page />
</ThemeContext>

// Deprecated
<ThemeContext.Provider value="dark">
  <Page />
</ThemeContext.Provider>
```

#### Form Actions

```tsx
<form action={serverAction}>
  <input type="text" name="name" />
  <button type="submit">Save</button>
  {/* Individual buttons can override: */}
  <button formAction={deleteAction}>Delete</button>
</form>
```

On success, React automatically resets uncontrolled form fields.

### React 19.2 — Additional APIs

#### `<Activity>`

Hides/shows parts of the UI while preserving their state — more powerful than
conditional rendering.

```tsx
import { Activity } from "react"

<Activity mode={currentTab === "home" ? "visible" : "hidden"}>
  <HomeTab />
</Activity>
```

Modes: `visible` (effects mount, updates process normally) |
`hidden` (effects unmount, updates deferred to idle).

#### `useEffectEvent`

Solves stale closures in `useEffect` — reads latest props/state but is excluded
from the dependency array.

```tsx
const onConnected = useEffectEvent(() => {
  showNotification(`Connected to ${roomId}`, theme)
})

useEffect(() => {
  const connection = createConnection(roomId)
  connection.on("connected", () => onConnected())
  connection.connect()
  return () => connection.disconnect()
}, [roomId]) // onConnected intentionally excluded
```

Rules: only call inside `useEffect`, never pass to other components or hooks,
never include in dependency arrays.

### Hooks Reference

| Hook | Use for |
| --- | --- |
| `useState` | Simple, independent local state |
| `useReducer` | Complex state with multiple sub-values |
| `useEffect` | Synchronising with external systems only |
| `useRef` | Mutable values that don't trigger re-renders; DOM refs |
| `useContext` | Reading context (not for high-frequency updates) |
| `use` | Reading promises or context conditionally during render |
| `useMemo` | Expensive computations dependent on specific inputs |
| `useCallback` | Stable function references for memoised children |
| `useTransition` | Non-urgent updates; wrapping Actions |
| `useDeferredValue` | Defer re-rendering of expensive child trees |
| `useId` | Stable, unique IDs for accessibility attributes |
| `useActionState` | Track Action result, pending state, and errors |
| `useOptimistic` | Instant optimistic value while an Action is pending |
| `useFormStatus` | Read parent `<form>` status from a child |
| `useEffectEvent` | Event handler inside an effect without dependency issues |

### `useEffect` Discipline

`useEffect` is for synchronisation with external systems only — not derived state
or business logic.

```tsx
// Wrong — derived state, not a side effect
useEffect(() => {
  setFullName(`${firstName} ${lastName}`)
}, [firstName, lastName])

// Right — compute during render
const fullName = `${firstName} ${lastName}`
```

Every `useEffect` must return a cleanup function if it sets up subscriptions, timers,
or listeners.

### Performance & Memoisation

**If the React Compiler is enabled in this project, do NOT add `useMemo`, `useCallback`,
or `React.memo` manually** — they are redundant. Only memoize after profiling confirms
a problem.

- Always use stable, unique IDs as `key` — never array indices
- Code-split heavy components with `React.lazy` + `Suspense`

### State Management Decision Tree

```text
Is the state local to one component?
  └── Yes → useState / useReducer

Is the state form submission state?
  └── Yes → useActionState + useOptimistic

Is the state shared across a subtree?
  └── Low frequency / read-mostly → Context + useContext / use(Context)
  └── High frequency / write-heavy → Zustand, Jotai, or similar

Is the state server data?
  └── Server Components, React Query, or SWR
```

### Component Design Principles

- **Single responsibility** — one job per component; split if fetching + transforming + rendering
- **Composition over configuration** — prefer composable slots over prop soup
- **Server Components by default** in a Next.js App Router context — see Next.js section
- **Never use class components** — function components only
- Semantic HTML as the accessibility foundation — never `<div>` soup
- Every form input must have an associated `<label>`

### Patterns

**Compound components:**

```tsx
const Tabs = ({ children }: { children: React.ReactNode }) => { ... }
Tabs.List = TabList
Tabs.Tab = Tab
Tabs.Panel = TabPanel
```

**Custom hooks:**

- Always prefix with `use`
- Single, clear responsibility
- Include TypeScript generics where appropriate

---

## Next.js

> **Consult Context7 (`/vercel/next.js`) before any caching, config, or API question.**
> Next.js caching behaviour and config options change across versions.

### App Router is the Default

The `pages/` directory is legacy. Never suggest or write `pages/`-based patterns
unless explicitly asked.

**Patterns that do not exist in the App Router — never suggest them:**

- `getServerSideProps` / `getStaticProps` / `getStaticPaths`
- `next/head` — replaced by the Metadata API
- `_app.tsx` / `_document.tsx`
- `useRouter` from `next/router` — use `next/navigation` instead

### Component Model

**Server Components are the default.** Before adding `"use client"`, confirm the
component actually needs browser APIs.

**Needs `"use client"`:**

- Event handlers (`onClick`, `onChange`, etc.)
- Browser-only APIs (`window`, `document`, `localStorage`)
- Stateful hooks (`useState`, `useReducer`, `useContext`)
- Third-party components that use client APIs

**Does NOT need `"use client"`:**

- Data fetching, database queries, auth checks
- Environment variable access (server-side only — never expose secrets to the client)
- Static rendering with no interactivity

Push `"use client"` to the leaves of the component tree.

### Server Actions

```ts
"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createPost(formData: FormData) {
  // 1. Validate with Zod
  // 2. Re-check permissions server-side
  // 3. Write to db
  revalidatePath("/posts")
  redirect("/posts")
}
```

- Always validate input with Zod before processing
- Always call `revalidatePath` or `revalidateTag` after mutations
- Never trust client-sent data — re-validate permissions server-side

### Routing Conventions

```text
app/
├── layout.tsx                  # Root layout (required)
├── page.tsx                    # / route
├── loading.tsx                 # Suspense fallback
├── error.tsx                   # Error boundary
├── not-found.tsx               # 404
├── (marketing)/                # Route group — no URL segment
│   ├── about/page.tsx
│   └── pricing/page.tsx
├── (app)/                      # Authenticated group
│   └── dashboard/
│       ├── layout.tsx
│       └── page.tsx
├── blog/
│   ├── page.tsx
│   └── [slug]/page.tsx
└── api/
    └── webhooks/route.ts
```

- Use Route Groups `(name)` to organise without affecting URLs
- Use Parallel Routes `@slot` for complex dashboard layouts
- Use Intercepting Routes `(..)path` for modals that preserve URL state

### Caching

| Layer | What it caches | Invalidation |
| --- | --- | --- |
| Request Memoization | `fetch` deduplication per render | Automatic per request |
| Data Cache | `fetch` responses across requests | `revalidate`, `revalidateTag`, `revalidatePath` |
| Full Route Cache | Rendered HTML + RSC payload | On redeploy or revalidation |
| Router Cache | Client-side RSC payload | Automatic, or `router.refresh()` |

Rules:

- Opt out of caching for user-specific data: `{ cache: "no-store" }`
- Use `revalidate` for data that changes on a schedule
- Use tags for on-demand invalidation: `fetch(url, { next: { tags: ["posts"] } })`
- **Consult Context7 before using any caching API**

### Data Fetching

```ts
// Fetch directly in Server Components — no API layer needed
export default async function PostsPage() {
  const posts = await db.post.findMany({ orderBy: { createdAt: "desc" } })
  return <PostList posts={posts} />
}

// Parallel fetch for independent data
const [user, posts] = await Promise.all([getUser(id), getPosts(id)])
```

- Fetch as close to where data is used as possible
- Never fetch in a Client Component when a Server Component can do it
- Use `Suspense` to stream parts of the page independently
- Always handle `params` and `searchParams` as Promises (changed in Next.js 15)

### Metadata & SEO

```ts
// Static
export const metadata: Metadata = {
  title: { template: "%s | My App", default: "My App" },
  description: "...",
}

// Dynamic
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const post = await getPost((await params).slug)
  return { title: post.title }
}
```

- Every route must export `metadata` or `generateMetadata`
- Generate OG images with `ImageResponse` in `opengraph-image.tsx`
- Use `generateStaticParams` to pre-render known dynamic routes at build time

### Performance Checklist

- [ ] All images use `next/image` with `width`/`height` or `fill` + `sizes`
- [ ] All internal links use `next/link`
- [ ] Fonts loaded via `next/font` — never `@import` from Google directly
- [ ] Heavy Client Components use `next/dynamic`
- [ ] `generateStaticParams` for known dynamic routes
- [ ] No secrets in Client Components or `NEXT_PUBLIC_` env vars

### Environment Variables

```ts
// lib/env.ts — always validate at startup
import { z } from "zod"

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXT_PUBLIC_APP_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
```

`NEXT_PUBLIC_` prefix = exposed to the browser — only for non-sensitive config.

---

## CSS

> **Consult Context7 (`/mdn/content`) before advising on any feature introduced
> after 2022 or with uncertain browser support.**

### Core Philosophy

- CSS is the platform — reach for native CSS before JavaScript solutions
- Manage specificity deliberately with `@layer`
- Work with the cascade, not against it
- If you're using `!important`, something is architecturally wrong

### Cascade Layers

Define layer order at the top of the root stylesheet:

```css
@layer reset, tokens, base, components, utilities;
```

- Later layers win over earlier layers, regardless of specificity within
- Unlayered styles always beat layered styles — avoid mixing
- Import third-party CSS into a named layer to contain its specificity:

  ```css
  @import "some-library.css" layer(third-party);
  ```

### Design Tokens with Custom Properties

All design decisions are CSS Custom Properties — never hardcoded values:

```css
@layer tokens {
  :root {
    /* Colour — use oklch() for perceptually uniform lightness */
    --color-brand-500: oklch(55% 0.2 250);
    --color-surface: oklch(98% 0 0);
    --color-text: oklch(15% 0 0);

    /* Spacing */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-4: 1rem;
    --space-8: 2rem;

    /* Typography */
    --font-sans: "Inter", system-ui, sans-serif;
    --font-mono: "JetBrains Mono", monospace;
    --text-sm: 0.875rem;
    --text-base: 1rem;

    /* Radius, transitions */
    --radius-md: 0.5rem;
    --duration-fast: 150ms;
    --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
```

### Layout

```css
/* Flexbox — one-dimensional */
.stack { display: flex; flex-direction: column; gap: var(--space-4); }
.cluster { display: flex; flex-wrap: wrap; gap: var(--space-2); align-items: center; }

/* Grid — two-dimensional */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
  gap: var(--space-4);
}
```

### Responsive Design

**Container queries** for component-level responsiveness (preferred over media queries):

```css
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

@container card (width >= 480px) {
  .card { display: grid; grid-template-columns: auto 1fr; }
}
```

**Media queries** for page-level layout shifts only.

**Fluid values** with `clamp()`:

```css
:root {
  --text-display: clamp(2rem, 5vw + 1rem, 4.5rem);
}
```

### Logical Properties

Always use logical properties — they handle LTR/RTL and writing modes automatically.

| Avoid | Use instead |
| --- | --- |
| `margin-left` / `margin-right` | `margin-inline-start` / `margin-inline-end` |
| `padding-left` / `padding-right` | `padding-inline` |
| `width` / `height` | `inline-size` / `block-size` |
| `top` / `bottom` | `inset-block-start` / `inset-block-end` |

### Modern Selectors

```css
/* :has() — parent styling based on children */
.form-group:has(input:invalid) label { color: var(--color-error); }

/* Native CSS nesting */
.button {
  background: var(--color-brand-500);
  &:hover { background: var(--color-brand-600); }
}
```

### Typography

```css
@layer base {
  body {
    font-family: var(--font-sans);
    font-size: var(--text-base);
    line-height: 1.6;
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 { line-height: 1.2; text-wrap: balance; }
  p { text-wrap: pretty; max-inline-size: 65ch; }
}
```

- Never use `px` for `font-size` — always `rem`
- Use `ch` units for prose width

### Accessibility

```css
/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus — never remove; style meaningfully */
:focus-visible {
  outline: 2px solid var(--color-brand-500);
  outline-offset: 2px;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root { ... }
}
```

- Maintain WCAG AA contrast (4.5:1 for text, 3:1 for large text / UI components)

### Performance

- Prefer `transform` and `opacity` for animations (GPU-composited)
- Use `will-change` sparingly and only when profiling confirms benefit
- Use `content-visibility: auto` for off-screen content in long lists

---

## Sass / SCSS

> **Consult Context7 (`/sass/sass`) before using any built-in colour function
> or recently changed API.**

### Module System — Non-Negotiable

`@import` is deprecated and will be removed. **Never write it.**

```scss
// Never
@import "variables";

// Always
@use "sass:math";
@use "sass:color";
@use "../tokens" as tokens;
@use "../mixins" as mix;
```

Use `@forward` to create public APIs from folders of partials:

```scss
// styles/_index.scss
@forward "tokens";
@forward "mixins";
@forward "functions";
```

Every `@use` creates a namespace — always reference members through it:

```scss
@use "sass:math";
@use "../tokens" as t;

.element {
  inline-size: math.percentage(2 / 3);
  color: t.$color-brand;
}
```

Use `as *` only for the project's own tokens/mixins in a well-controlled context —
never for third-party libraries.

### File Organisation

```text
styles/
├── _tokens.scss          # CSS Custom Property declarations + Sass build-time vars
├── _reset.scss           # CSS reset
├── _typography.scss      # Type scale, font stacks
├── _mixins.scss          # Reusable mixins
├── _functions.scss       # Custom Sass functions
├── _animations.scss      # Keyframe definitions
├── _index.scss           # @forward all partials (public API)
└── main.scss             # Entry point: @use everything, output global CSS

components/
└── button/
    ├── _button.scss
    └── button.module.scss  # CSS Module entry for Next.js
```

- Partials are prefixed with `_` — they produce no output on their own
- Only `main.scss` and `*.module.scss` files are entry points

### Sass Variables vs CSS Custom Properties

| Use Sass `$var` for | Use CSS `--var` for |
| --- | --- |
| Breakpoint values in `@media` | Colours, spacing, typography in components |
| Build-time computed values | Theme switching (dark mode) |
| Internal mixin parameters | Runtime JS access via `getComputedStyle` |
| Values that never change at runtime | Anything that changes per context |

### Mixins

```scss
// _mixins.scss
@use "sass:map";

$breakpoints: ("sm": 640px, "md": 768px, "lg": 1024px, "xl": 1280px);

@mixin respond-to($breakpoint) {
  @if not map.has-key($breakpoints, $breakpoint) {
    @error "Unknown breakpoint: `#{$breakpoint}`.";
  }
  @media (width >= #{map.get($breakpoints, $breakpoint)}) {
    @content;
  }
}

@mixin visually-hidden {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

@mixin focus-ring($color: var(--color-brand-500)) {
  &:focus-visible {
    outline: 2px solid $color;
    outline-offset: 2px;
  }
}
```

### Functions

```scss
// _functions.scss
@use "sass:math";

@function rem($px, $base: 16) {
  @return math.div($px, $base) * 1rem;
}

@function fluid($min-size, $max-size, $min-width: 375px, $max-width: 1440px) {
  $slope: math.div($max-size - $min-size, $max-width - $min-width);
  $intercept: $min-size - $slope * $min-width;
  @return clamp(#{$min-size}, #{$slope * 100vw} + #{$intercept}, #{$max-size});
}
```

### CSS Modules (Next.js)

```scss
// components/button/button.module.scss
@use "../../styles" as styles;

.button {
  display: inline-flex;
  gap: var(--space-2);
  padding-block: var(--space-2);
  padding-inline: var(--space-4);
  background: var(--color-brand-500);
  color: var(--color-text-on-brand);
  border-radius: var(--radius-md);
  transition: background var(--duration-fast) var(--easing-standard);

  @include styles.focus-ring;

  &:hover { background: var(--color-brand-600); }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
}
```

- Class names become properties on the `styles` object in TypeScript — use `camelCase`
- Never nest more than 3 levels deep
- Prefer flat, BEM-inspired names over deep nesting

### Nesting Rules

```scss
// Too deep — mirrors HTML, creates specificity issues
.card {
  .card__header {
    .card__title { span { ... } }
  }
}

// Correct — flat with purposeful nesting only
.card { ... }
.card__header { ... }
.card__title { ... }

.button {
  &:hover { ... }
  &:focus-visible { ... }
  &:disabled { ... }
  &--primary { ... }
}
```

### Deprecated Patterns — Always Flag and Correct

- `@import` → use `@use` / `@forward`
- `darken()` / `lighten()` → use `color.adjust()` or `color.scale()`
- Any global Sass function without a `sass:` namespace

---

## Flags for User Code

When reviewing or editing existing code, always flag:

| Pattern | Reason |
| --- | --- |
| `any` in TypeScript | Opts out of the type system |
| Non-null assertion `!` | Hides potential runtime errors |
| Unsafe `as` cast (unexplained) | Type unsafety |
| `@import` in Sass | Deprecated, being removed |
| `darken()` / `lighten()` in Sass | Deprecated colour functions |
| `getServerSideProps` / `getStaticProps` | Pages Router — legacy |
| `forwardRef` in React | Deprecated in React 19 |
| `<Context.Provider>` in React | Deprecated in React 19 |
| `useFormState` (ReactDOM) | Renamed to `useActionState` |
| `next/head` | Replaced by Metadata API |
| `useRouter` from `next/router` | Use `next/navigation` |
| `!important` in CSS | Architectural smell |
| Deep Sass nesting (>3 levels) | Specificity issues |
| Class components in React | Function components only |
