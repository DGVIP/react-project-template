import { render } from "@testing-library/react";
import { App } from "./app";

describe("Home Page test", () => {
   test("Should render app", () => {
      render(<App />);
   });
});
