# Technical Context: PokéYampa

## Technology Stack

### Core Framework
- **React 19.1.0**: Latest React with concurrent features
- **TypeScript 5.8.3**: Strict type checking and modern JS features
- **Vite 6.3.5**: Fast build tool with HMR and optimized bundling

### State Management
- **@tanstack/react-query 5.81.2**: Server state management and caching
- **React Built-in State**: useState, useReducer for local state
- **@tanstack/react-query-persist-client**: Offline persistence

### Routing & Navigation
- **react-router 7.6.2**: Client-side routing with data loading
- **React Router v7**: Latest version with improved data patterns

### UI Framework & Styling
- **Tailwind CSS 4.1.10**: Utility-first CSS framework (latest v4)
- **shadcn/ui**: High-quality React components built on Radix UI
- **@radix-ui/react-***: Accessible, unstyled UI primitives
- **Lucide React**: Beautiful, customizable icons
- **class-variance-authority**: Type-safe component variants

### Performance & Optimization
- **@tanstack/react-virtual 3.13.11**: Virtualized scrolling for large lists
- **embla-carousel-react**: Smooth, performant carousels
- **React 19 Concurrent Features**: Suspense, transitions, and streaming

### Development Tools

#### Testing
- **Vitest 3.2.4**: Fast unit testing framework
- **@testing-library/react 16.1.0**: React component testing utilities
- **@testing-library/jest-dom**: Custom Jest matchers
- **@testing-library/user-event**: User interaction simulation
- **Cypress 14.5.0**: End-to-end testing framework
- **@vitest/coverage-v8**: Code coverage reporting

#### Documentation & Storybook
- **Storybook 9.0.13**: Component development and documentation
- **@storybook/addon-a11y**: Accessibility testing addon
- **@storybook/addon-docs**: Documentation generation
- **Chromatic**: Visual regression testing for Storybook

#### Code Quality
- **ESLint 9.25.0**: JavaScript/TypeScript linting
- **@typescript-eslint**: TypeScript-specific ESLint rules
- **@tanstack/eslint-plugin-query**: React Query best practices

### API & Data
- **Axios 1.10.0**: HTTP client for API requests
- **Zod 3.25.67**: Runtime type validation and parsing
- **PokeAPI**: RESTful Pokémon data API

### Internationalization
- **i18next 25.2.1**: Internationalization framework
- **react-i18next 15.5.3**: React bindings for i18next
- **i18next-browser-languagedetector**: Automatic language detection

### Additional Libraries
- **sonner 2.0.5**: Toast notifications
- **next-themes 0.4.6**: Theme management (light/dark mode)
- **vaul 1.1.2**: Mobile-first drawer component
- **clsx & tailwind-merge**: Conditional CSS class utilities

## Development Environment

### Prerequisites
```json
{
  "engines": {
    "node": ">=18.0.0",
    "pnpm": ">=10.0.0"
  }
}
```

### Package Manager
- **pnpm**: Fast, disk space efficient package manager
- **Lock File**: pnpm-lock.yaml for reproducible installs
- **Workspace**: Single package configuration

### Build Configuration

#### Vite Configuration
```typescript
// Key Vite settings
{
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: {
    target: "esnext",
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          query: ["@tanstack/react-query"],
          ui: ["@radix-ui/react-*"],
        }
      }
    }
  }
}
```

#### TypeScript Configuration
```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  }
}
```

### Testing Setup

#### Vitest Configuration
```typescript
{
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    }
  }
}
```

#### Cypress Configuration
```typescript
{
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  }
}
```

## Development Scripts

### Core Commands
```json
{
  "dev": "vite",                                    // Development server
  "build": "pnpm run build-storybook-docs && tsc -b && vite build",
  "preview": "vite preview",                        // Preview production build
  "lint": "eslint .",                              // Code linting
}
```

### Testing Commands
```json
{
  "test": "vitest --config vitest.config.ts",      // Unit tests (watch mode)
  "test:run": "vitest run --config vitest.config.ts", // Unit tests (single run)
  "test:coverage": "vitest run --coverage --config vitest.config.ts",
  "test:ui": "vitest --ui --config vitest.config.ts", // Visual test runner
  "cypress:open": "cypress open"                   // E2E tests
}
```

### Documentation Commands
```json
{
  "storybook": "storybook dev -p 6006",           // Storybook development
  "build-storybook": "storybook build",           // Build Storybook
  "build-storybook-docs": "./scripts/build-storybook-docs.sh",
  "chromatic": "npx chromatic --project-token=chpt_5188b4c3cbde472"
}
```

### Analysis Commands
```json
{
  "analyze": "npx vite-bundle-analyzer dist/stats.json", // Bundle analysis
  "lighthouse": "lighthouse http://localhost:4173 --output json --output-path ./lighthouse-report.json"
}
```

## Performance Optimizations

### Bundle Splitting Strategy
- **Vendor Chunk**: React, React DOM
- **Query Chunk**: React Query and related
- **UI Chunk**: Radix UI components
- **Router Chunk**: React Router
- **Utils Chunk**: Utility libraries

### Build Optimizations
- **Tree Shaking**: Dead code elimination
- **Minification**: esbuild for fast, efficient minification
- **Code Splitting**: Route-based and component-based splitting
- **Asset Optimization**: Image compression and format optimization

### Runtime Optimizations
- **Virtualization**: Handle large lists efficiently
- **Memoization**: React.memo, useMemo, useCallback
- **Lazy Loading**: Dynamic imports for components
- **Caching**: React Query with persistent cache

## Browser Support

### Target Browsers
```json
{
  "browserslist": [
    "> 1%",
    "last 2 versions", 
    "not dead",
    "not ie 11"
  ]
}
```

### Modern Features Used
- **ES2020+**: Optional chaining, nullish coalescing
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Custom Properties**: Dynamic theming
- **Intersection Observer**: Infinite scroll implementation


## Deployment Configuration

### Static Site Generation
- **Build Output**: Static HTML, CSS, JS files
- **Asset Optimization**: Automatic compression and caching
- **CDN Ready**: Optimized for content delivery networks

### Environment Variables
- **Development**: Local API endpoints and debug flags
- **Production**: Production API URLs and optimizations
- **Staging**: Testing environment configuration

## Security Considerations

### Content Security Policy
- **Script Sources**: Restricted to same-origin and CDN
- **Style Sources**: Inline styles for dynamic theming
- **Image Sources**: PokeAPI and local assets only

### API Security
- **HTTPS Only**: All API requests over secure connections
- **Rate Limiting**: Respect API rate limits
- **Error Handling**: No sensitive information in error messages

## Monitoring & Analytics

### Performance Monitoring
- **Lighthouse CI**: Automated performance testing
- **Bundle Analyzer**: Regular bundle size monitoring
- **Core Web Vitals**: LCP, FID, CLS tracking

### Error Tracking
- **Error Boundaries**: Graceful error handling
- **Console Logging**: Development debugging
- **Toast Notifications**: User-friendly error messages 