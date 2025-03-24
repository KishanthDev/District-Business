import { render, screen } from "@testing-library/react";
import { SellerTestimonials } from "@/components/SellerTestimonals";

describe("SellerTestimonials Component", () => {
  it("renders the heading", () => {
    render(<SellerTestimonials />);
    const heading = screen.getByText(/Seller Testimonials/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders all three testimonials", () => {
    render(<SellerTestimonials />);
    const testimonials = screen.getAllByRole("article"); // Cards should be in `<div>`s
    expect(testimonials).toHaveLength(3);
  });

  it("renders all testimonial images", () => {
    render(<SellerTestimonials />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(3);
  });

  it("renders correct testimonial text", () => {
    render(<SellerTestimonials />);
    expect(screen.getByText(/When people use your brand name as a verb/i)).toBeInTheDocument();
    expect(screen.getByText(/Our primary businesses in wholesale pipelines/i)).toBeInTheDocument();
    expect(screen.getByText(/If you make a sale, you make a living/i)).toBeInTheDocument();
  });

  it("renders correct testimonial names", () => {
    render(<SellerTestimonials />);
    expect(screen.getByText(/Meg Whitman/i)).toBeInTheDocument();
    expect(screen.getByText(/Kenneth Lay/i)).toBeInTheDocument();
    expect(screen.getByText(/Jim Rohan/i)).toBeInTheDocument();
  });
});
