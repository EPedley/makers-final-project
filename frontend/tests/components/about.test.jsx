import { render, screen } from "@testing-library/react";
import { About } from "../../src/components/About"

describe("About", () => {
  test("displays the about information", () => {
    render(<About/>);
    const message = screen.getByTestId("title");
    expect(message.textContent).toContain("ABOUT US");
  });
});
