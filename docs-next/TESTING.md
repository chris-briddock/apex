# Testing Guide

This document provides an overview of the testing setup for the docs-next project.

## Test Types

### Unit Tests

Unit tests are located in `src/components/__tests__/` and test individual components in isolation.

**Running unit tests:**

```bash
npm test
```

**Run tests in watch mode:**

```bash
npm run test:watch
```

**Generate coverage report:**

```bash
npm run test:coverage
```

### Integration Tests

Integration tests are located in `src/__tests__/integration/` and test how multiple components work together.

**Running integration tests:**

```bash
npm test -- src/__tests__/integration
```

### E2E Tests

E2E tests are located in `e2e/` and test the application from the user's perspective using Playwright.

**Running E2E tests:**

```bash
npm run test:e2e
```

**Run E2E tests with UI:**

```bash
npm run test:e2e:ui
```

**Debug E2E tests:**

```bash
npm run test:e2e:debug
```

## Test Configuration

### Jest Configuration

- **Config file:** `jest.config.ts`
- **Setup file:** `jest.setup.ts`
- **Environment:** `jest-environment-jsdom`

### Playwright Configuration

- **Config file:** `playwright.config.ts`
- **Browsers:** Chromium, Firefox, WebKit
- **Base URL:** `http://localhost:3000`

## Test Structure

``` plaintext
docs-next/
├── src/
│   ├── components/
│   │   └── __tests__/
│   │       ├── Alert.test.tsx
│   │       ├── Breadcrumb.test.tsx
│   │       ├── CodeBlock.test.tsx
│   │       ├── LanguageSwitcher.test.tsx
│   │       ├── SkipLink.test.tsx
│   │       └── VersionSwitcher.test.tsx
│   └── __tests__/
│       └── integration/
│           └── navigation.test.tsx
└── e2e/
    ├── home.spec.ts
    ├── navigation.spec.ts
    ├── accessibility.spec.ts
    └── responsive.spec.ts
```

## Writing Tests

### Unit Test Example

```typescript
import { render, screen } from '@testing-library/react'
import { MyComponent } from '../MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
```

### E2E Test Example

```typescript
import { test, expect } from '@playwright/test'

test('page loads successfully', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/My App/)
})
```

## Best Practices

1. **Unit Tests:**
   - Test components in isolation
   - Mock external dependencies
   - Test user interactions
   - Verify accessibility attributes

2. **Integration Tests:**
   - Test component interactions
   - Verify state management
   - Test data flow between components

3. **E2E Tests:**
   - Test critical user flows
   - Verify cross-browser compatibility
   - Test responsive design
   - Verify accessibility

## Coverage Goals

- **Unit Tests:** 80%+ coverage
- **Integration Tests:** Cover all major user flows
- **E2E Tests:** Cover critical paths and happy paths

## Troubleshooting

### Jest Tests Fail

- Check that all mocks are properly configured
- Verify that component props match the interface
- Ensure test environment is properly set up

### Playwright Tests Fail

- Ensure the dev server is running
- Check that the base URL is correct
- Verify that selectors are targeting the right elements
- Check for timing issues - use `waitFor` if needed

## CI/CD Integration

Tests are configured to run in CI environments:

- Unit tests run on every push
- E2E tests run on pull requests
- Coverage reports are generated on test runs
