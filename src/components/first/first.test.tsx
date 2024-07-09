import React from "react";
import { First } from "./first";
import { render, screen } from "@testing-library/react";

test("first test", () => {
  render(<First />);
  /*   const GETByTitile  = screen.getByTitle('hello')
    expect(GETByTitile).toBeInTheDocument()
    const getByTestId = screen.getByTestId('test')
    expect(getByTestId).toBeInTheDocument() */

  const TextMatch = screen.getAllByText((content) =>
    content.startsWith("Hello")
  );

  expect(TextMatch).toHaveLength(2);
});
