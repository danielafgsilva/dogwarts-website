jest.mock("@/lib/sanity", () => ({
  client: { fetch: jest.fn(() => Promise.resolve({})) },
  urlFor: jest.fn(() => ({
    width: () => ({ height: () => ({ url: () => "" }) }),
  })),
  getHomePage: jest.fn(() =>
    Promise.resolve({
      hero: {
        badge: "Bem-vindo à Dogwarts",
        title: "Cães Felizes & Donos Tranquilos",
        description: "O projeto da Dogwarts nasceu em setembro de 2023.",
        intro: ["Donos tranquilos."],
        ctaPrimary: "Conheça os nossos serviços",
        ctaSecondary: "Contacte-nos",
      },
      services: {
        title: "Os Nossos Serviços",
        subtitle: "Cuidados Personalizados para Cada Patudo",
        description: "Vários serviços personalizados.",
        services: [
          { _key: "petsitting", title: "Petsitting ao Domicílio", price: "10€", priceNote: "+ deslocação", icon: "Home" },
          { _key: "daycare", title: "Creche Canina", price: "desde 15€", priceNote: "por dia", icon: "Clock" },
          { _key: "boarding", title: "Estadia Familiar", price: "20€", priceNote: "por diária", icon: "Heart" },
        ],
      },
      reviews: { title: "O Que Dizem os Nossos Clientes" },
      cta: { title: "Pronto?", primaryButton: "Ligar", secondaryButton: "Email" },
    })
  ),
  getSiteSettings: jest.fn(() =>
    Promise.resolve({
      siteName: "Dogwarts",
      contact: {
        phone: "918018726",
        email: "dogwarts.pt@gmail.com",
        googleReviewsUrl: "https://example.com/reviews",
      },
    })
  ),
}));

jest.mock("@/lib/google-reviews", () => ({
  getGoogleReviews: jest.fn(() => Promise.resolve(null)),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const { fill, priority, sizes, unoptimized, ...imgProps } = props;
    return <img {...imgProps} />;
  },
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders the Sanity-driven main heading", async () => {
    render(await Home());
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toHaveTextContent(/cães felizes/i);
  });

  it("renders the founder-story intro copy from Sanity", async () => {
    render(await Home());
    expect(screen.getByText(/setembro de 2023/i)).toBeInTheDocument();
  });

  it("renders the Sanity service prices", async () => {
    render(await Home());
    expect(screen.getAllByText(/10€/).length).toBeGreaterThan(0);
    expect(screen.getByText(/desde 15€/i)).toBeInTheDocument();
    expect(screen.getByText(/20€/)).toBeInTheDocument();
  });

  it("links to the Google reviews profile when no live data", async () => {
    render(await Home());
    const cta = screen.getByRole("link", {
      name: /avaliações google/i,
    });
    expect(cta).toHaveAttribute("target", "_blank");
  });
});
