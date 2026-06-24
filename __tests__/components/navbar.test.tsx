import { render, screen } from "@testing-library/react";
import Navbar from "@/components/navbar";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const { fill, priority, sizes, ...imgProps } = props;
    return <img {...imgProps} />;
  },
}));

describe("Navbar Component", () => {
  it("renders the logo", () => {
    render(<Navbar />);

    const logo = screen.getByAltText(/dogwarts/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders the main navigation links", () => {
    render(<Navbar />);

    expect(screen.getByText(/início/i)).toBeInTheDocument();
    expect(screen.getByText(/sobre/i)).toBeInTheDocument();
    expect(screen.getByText(/serviços/i)).toBeInTheDocument();
    expect(screen.getByText(/testemunhos/i)).toBeInTheDocument();
    expect(screen.getByText(/contactos/i)).toBeInTheDocument();
  });

  it("does not render a FAQ link", () => {
    render(<Navbar />);

    expect(screen.queryByText(/faq/i)).not.toBeInTheDocument();
  });

  it("renders mobile menu button", () => {
    render(<Navbar />);

    const mobileMenuButton = screen.getByRole("button", {
      name: /abrir menu/i,
    });
    expect(mobileMenuButton).toBeInTheDocument();
  });
});
