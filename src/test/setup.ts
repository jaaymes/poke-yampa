import "@testing-library/jest-dom";
import { vi } from "vitest";

// Define interface for global object
interface GlobalObject {
  IntersectionObserver?: typeof IntersectionObserver;
  ResizeObserver?: typeof ResizeObserver;
  fetch?: typeof fetch;
}

// Define global object for compatibility with proper typing
const globalObject = (
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : {}
) as GlobalObject & typeof globalThis;

// Mock IntersectionObserver
if (!globalObject.IntersectionObserver) {
  globalObject.IntersectionObserver = class IntersectionObserver {
    root = null;
    rootMargin = "";
    thresholds = [];

    constructor() {}
    observe() {}
    disconnect() {}
    unobserve() {}
    takeRecords() {
      return [];
    }
  };
}

// Mock ResizeObserver
if (!globalObject.ResizeObserver) {
  globalObject.ResizeObserver = class ResizeObserver {
    constructor() {}
    observe() {}
    disconnect() {}
    unobserve() {}
  };
}

// Mock matchMedia for window environment
if (typeof window !== "undefined" && !window.matchMedia) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

// Mock for browser environment compatibility
if (typeof globalObject.fetch === "undefined") {
  globalObject.fetch = vi.fn();
}
