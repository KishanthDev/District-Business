import { render, screen } from "@testing-library/react";
import { Features } from "@/components/Feautres";

describe("Feautres Component", () => {
  it("renders the Features Section heading", () => {
    render(<Features />);
    const heading = screen.getByText(/Feautres Section/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders all feature images", () => {
    render(<Features />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(3);
  });

  it("renders correct feature texts", () => {
    render(<Features />);
    expect(screen.getByText(/No Sales Commissions/i)).toBeInTheDocument();
    expect(screen.getByText(/Integrated Advertising/i)).toBeInTheDocument();
    expect(screen.getByText(/Affordable store Rentals/i)).toBeInTheDocument();
  });
});
