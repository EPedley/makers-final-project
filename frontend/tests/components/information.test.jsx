import createFetchMock from "vitest-fetch-mock";
import { describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { InformationButton } from "../../src/components/InformationButton"
import userEvent from '@testing-library/user-event'

createFetchMock(vi).enableMocks();

describe("InformationButton", () => {
  test("displays the information button", async () => {
    const user = userEvent.setup()
    render(<InformationButton componentFilter="co"/>);

    const infoButton = screen.getByTestId("infoButton");
    await user.hover(infoButton)
    
    const message = screen.getByTestId("title");
    expect(message.textContent).toContain("Carbon Monoxide");
  });
});