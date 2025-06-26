import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Toaster } from "./toast";

describe("Toaster", () => {
  it("should render without crashing", () => {
    const { container } = render(<Toaster />);
    expect(container).toBeInTheDocument();
  });

  it("should apply custom props", () => {
    const { container } = render(<Toaster data-testid="custom-toaster" />);
    const toaster = container.querySelector('[data-testid="custom-toaster"]');
    expect(toaster).toBeInTheDocument();
  });
});
