import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Home } from ".";

test("home", async () => {
  const { getByText } = render(<Home />);
  expect(getByText("Home")).toBeInTheDocument();
});
