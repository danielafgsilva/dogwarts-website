import "@testing-library/jest-dom";

jest.mock("next-sanity", () => ({
  createClient: jest.fn(() => ({
    fetch: jest.fn(() => Promise.resolve({})),
  })),
}));

jest.mock("@sanity/image-url", () => ({
  default: jest.fn(() => ({
    image: jest.fn(() => ({
      url: jest.fn(() => ""),
      width: jest.fn(() => ({
        url: jest.fn(() => ""),
      })),
    })),
  })),
}));

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
