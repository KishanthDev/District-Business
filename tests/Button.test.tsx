import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";

describe("Button Component", () => {
  it("renders the button with correct text", () => {
    render(<Button variant="blue">Click Me</Button>);
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });

  it("applies the correct variant styles", () => {
    render(<Button variant="blue">Blue Button</Button>);
    const button = screen.getByText("Blue Button");
    expect(button).toHaveClass("bg-blue-600");
  });
});
