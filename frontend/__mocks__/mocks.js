
// jest.mock('url/to/toggleStatusBar', () => ({ toggleStatusBar: jest.fn(() => jest.fn) })); // tests passed


describe("Test", () => {
    beforeAll(() => {
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(), // Deprecated
          removeListener: jest.fn(), // Deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        }))
      });
    });
  });
  
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

global.matchMedia = global.matchMedia || function () {
  return {
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};

Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      getPropertyValue: () => {}
    };
  }
});
