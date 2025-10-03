import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe("Home Page", () => {
  it("renders the main heading", () => {
    render(<Home />);

    // Check if the main heading is present
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Home />);

    // Check if navigation links are present (using getAllByText for multiple occurrences)
    const servicosLinks = screen.getAllByText(/serviços/i);
    const sobreLinks = screen.getAllByText(/sobre/i);
    const contactosLinks = screen.getAllByText(/contactos/i);

    expect(servicosLinks.length).toBeGreaterThan(0);
    expect(sobreLinks.length).toBeGreaterThan(0);
    expect(contactosLinks.length).toBeGreaterThan(0);
  });

  it("renders call-to-action buttons", () => {
    render(<Home />);

    // Check if CTA buttons are present
    const ctaButtons = screen.getAllByRole("button");
    expect(ctaButtons.length).toBeGreaterThan(0);
  });
});
