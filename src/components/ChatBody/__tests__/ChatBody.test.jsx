import React from "react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ReactQueryProvider } from "../../../providers";

import { ChatBody } from "../index";

describe("ChatBody", () => {
  it("renders the component with a loading state", () => {
    render(
      <ReactQueryProvider>
        <ChatBody />
      </ReactQueryProvider>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
