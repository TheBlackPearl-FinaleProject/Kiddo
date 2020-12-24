// __mocks__/mocks.js
import "react-native-gesture-handler/jestSetup";
// This file is for jest to be able to understand some modules that are not normally easily compiled; using mocks
if (window!==undefined) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
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
}

require("jest-fetch-mock").enableMocks();
jest.mock("react-native-vector-icons", () => {
  return {
    RNVectorIconsManager: jest.mock(),
    createIconSetFromIcoMoon: jest.fn(),
  };
});
jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");
  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};
  return Reanimated;
});
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);
jest.mock("react-native-vector-icons/MaterialIcons", () => {
  return { TabBarItemIOS: "" };
});
jest.mock("react-native-vector-icons/Ionicons", () => ({
  TabBarItemIOS: "TabBarItemIOS",
}));
jest.mock("react-native-vector-icons/Ionicons", () => ({
  ToolbarAndroid: "ToolbarAndroid",
}));
