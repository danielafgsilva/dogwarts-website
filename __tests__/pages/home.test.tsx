
jest.mock("@/lib/sanity", () => {
  const mockUrlFor = {
    url: jest.fn(() => ""),
  };
  return {
    client: {
      fetch: jest.fn(() => Promise.resolve({})),
    },
    urlFor: jest.fn(() => mockUrlFor),
    getHomePage: jest.fn(() => Promise.resolve({
      hero: {
        badge: "Bem-vindo",
        title: "Título de Teste",
        description: "Descrição de teste",
        ctaPrimary: "Conheça nossos serviços",
        ctaSecondary: "Contacte-nos",
      },
      services: {
        title: "Os Nossos Serviços",
        subtitle: "Cuidados Personalizados",
        items: [],
      },
    })),
    getFeaturedTestimonials: jest.fn(() => Promise.resolve([])),
    getSiteSettings: jest.fn(() => Promise.resolve({ siteName: "Dogwarts" })),
  };
});

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders the main heading", async () => {
    const HomeComponent = await Home();
    render(HomeComponent);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("renders navigation links", async () => {
    const HomeComponent = await Home();
    render(HomeComponent);

    const servicosLinks = screen.getAllByText(/serviços/i);
    const sobreLinks = screen.getAllByText(/sobre/i);
    const contactosLinks = screen.getAllByText(/contactos/i);

    expect(servicosLinks.length).toBeGreaterThan(0);
    expect(sobreLinks.length).toBeGreaterThan(0);
    expect(contactosLinks.length).toBeGreaterThan(0);
  });

  it("renders call-to-action buttons", async () => {
    const HomeComponent = await Home();
    render(HomeComponent);

    const ctaButtons = screen.getAllByRole("button");
    expect(ctaButtons.length).toBeGreaterThan(0);
  });
});
