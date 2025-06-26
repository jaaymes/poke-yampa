import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Toaster } from "./toast";

describe("Toaster", () => {
  it("deve renderizar sem quebrar", () => {
    render(<Toaster />);
    // O Toaster não renderiza um elemento visível por padrão, então verificamos se não há erros
    expect(document.body).toBeInTheDocument();
  });
});
