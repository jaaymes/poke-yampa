# System Patterns: PokéYampa

## Architecture Overview

### Application Structure
```
Frontend SPA (React 19)
├── Component Layer (UI Components)
├── State Management (React Query + Local State)
├── Routing (React Router v7)
├── API Layer (Axios + PokeAPI)
└── Build System (Vite + TypeScript)
```

### Key Architectural Decisions
- **Single Page Application**: React Router for client-side routing
- **Component-Driven Development**: Isolated, reusable components
- **Server State Management**: React Query for API data caching
- **Type-First Development**: TypeScript with strict mode enabled
- **Performance-First**: Virtualization and code splitting

## Component Architecture

### Component Hierarchy
```
App
├── Router
├── QueryClientProvider
├── Suspense Boundary
└── Pages
    ├── Home
    │   ├── Header
    │   ├── SearchInput
    │   ├── PokemonGrid (Virtualized)
    │   └── PokemonDetailDrawer
    ├── NotFound
    ├── ServerError
    └── Maintenance
```

### Component Patterns

#### 1. Compound Components
```typescript
// Example: Accordion component
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Trigger</AccordionTrigger>
    <AccordionContent>Content</AccordionContent>
  </AccordionItem>
</Accordion>
```

#### 2. Custom Hooks Pattern
```typescript
// Encapsulate complex logic in reusable hooks
const useListPokemons = () => {
  // Complex virtualization and pagination logic
  return { pokemonsQuery, allPokemon, getColumns, ... };
};
```

#### 3. Render Props with Virtualization
```typescript
// Virtual scrolling for performance
const virtualizer = useVirtualizer({
  count: Math.ceil(allPokemon.length / columns),
  getScrollElement: () => parentRef.current,
  estimateSize: getEstimatedSize,
});
```

## State Management Patterns

### Server State (React Query)
```typescript
// Centralized API state management
const pokemonsQuery = useInfiniteQuery({
  queryKey: ['pokemons'],
  queryFn: ({ pageParam = 0 }) => fetchPokemons(pageParam),
  getNextPageParam: (lastPage) => lastPage.next,
  staleTime: 5 * 60 * 1000, // 5 minutes
});
```

### Local State Patterns
- **useState**: Simple component state
- **useReducer**: Complex state transitions
- **useRef**: DOM references and mutable values
- **Custom Hooks**: Shared stateful logic

### State Colocation
- Keep state as close to where it's used as possible
- Lift state up only when necessary for sharing
- Use React Query for server state, local state for UI state

## Performance Patterns

### Virtualization Strategy
```typescript
// Handle large lists efficiently
const virtualizer = useVirtualizer({
  count: totalItems,
  getScrollElement: () => parentRef.current,
  estimateSize: () => estimatedItemHeight,
  overscan: 5, // Render extra items for smooth scrolling
});
```

### Code Splitting
```typescript
// Route-based code splitting
const Home = lazy(() => import('./pages/home'));
const NotFound = lazy(() => import('./pages/not-found'));

// Component-based splitting for large components
const PokemonDetailDrawer = lazy(() => import('./components/pokemon-detail-drawer'));
```

### Bundle Optimization
```typescript
// Manual chunk configuration in vite.config.ts
manualChunks: {
  vendor: ['react', 'react-dom'],
  query: ['@tanstack/react-query'],
  ui: ['@radix-ui/react-dialog', '@radix-ui/react-tabs'],
  router: ['react-router'],
}
```

## Data Flow Patterns

### API Integration
```typescript
// Centralized API configuration
const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

// Interceptors for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling
    handleApiError(error);
    return Promise.reject(error);
  }
);
```

### Type Safety
```typescript
// Zod schemas for runtime validation
export const SchemaPokemonResponse = z.object({
  count: z.number(),
  next: z.string().nullable(),
  results: z.array(z.object({
    name: z.string(),
    url: z.string(),
  })),
});

export type IPokemonResponse = z.infer<typeof SchemaPokemonResponse>;
```

## UI Patterns

### Design System Architecture
```
src/components/ui/
├── Primitives (button, input, card)
├── Compositions (header, footer, search-input)
└── Layouts (responsive grids, containers)
```

### Styling Patterns
- **Tailwind CSS v4**: Utility-first styling
- **CSS Variables**: Dynamic theming support
- **Component Variants**: Class Variance Authority (CVA)
- **Responsive Design**: Mobile-first approach

### Accessibility Patterns
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Focus management and shortcuts
- **Color Contrast**: WCAG 2.1 AA compliance

## Testing Patterns

### Unit Testing Strategy
```typescript
// Component testing with Testing Library
describe('PokemonCard', () => {
  it('renders pokemon information correctly', () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    expect(screen.getByTestId('pokemon-name')).toBeInTheDocument();
  });
});
```

### E2E Testing Strategy
```typescript
// Cypress tests for critical user journeys
describe('Pokemon Search', () => {
  it('should search and display pokemon details', () => {
    cy.visit('/');
    cy.get('[data-testid="search-input"]').type('pikachu');
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="pokemon-detail"]').should('be.visible');
  });
});
```

## Error Handling Patterns

### Error Boundaries
```typescript
// React Error Boundary for component errors
class ErrorBoundary extends Component {
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
}
```

### API Error Handling
```typescript
// Centralized error handling in API interceptor
const handleApiError = (error) => {
  const status = error.response?.status;
  switch (status) {
    case 404: toast.error('Pokemon não encontrado'); break;
    case 500: window.location.href = '/server-error'; break;
    default: toast.error('Algo deu errado'); break;
  }
};
```

## Internationalization Patterns

### i18n Configuration
```typescript
// i18next setup with language detection
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en, 'pt-BR': ptBR },
    fallbackLng: 'en',
    detection: { order: ['localStorage', 'navigator'] },
  });
```

### Translation Usage
```typescript
// Hook-based translation
const { t } = useTranslation();
return <button>{t('search')}</button>;
```

## Build and Deployment Patterns

### Development Workflow
1. **Local Development**: Vite dev server with HMR
2. **Component Development**: Storybook for isolation
3. **Testing**: Vitest for unit tests, Cypress for E2E
4. **Quality Checks**: ESLint, TypeScript, Lighthouse

### Production Build
1. **Bundle Analysis**: Vite bundle analyzer
2. **Performance Testing**: Lighthouse CI
3. **Visual Regression**: Chromatic for Storybook
4. **Deployment**: Static site deployment with CDN 