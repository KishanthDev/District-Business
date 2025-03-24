import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/Hero";

describe("Hero Component", () => {
  it("renders the heading", () => {
    render(<Hero />);
    const heading = screen.getByText(/Your Gateway to Commission-Free e-commerce/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders the subtext", () => {
    render(<Hero />);
    const subtext = screen.getByText(/Sell more, Keep more - No hidden fees/i);
    expect(subtext).toBeInTheDocument();
  });

  it("renders both buttons", () => {
    render(<Hero />);
    expect(screen.getByRole("button", { name: /Start Selling/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Explore Stores/i })).toBeInTheDocument();
  });

  it("renders the business image", () => {
    render(<Hero />);
    const image = screen.getByAltText("business");
    expect(image).toBeInTheDocument();
  });
});
