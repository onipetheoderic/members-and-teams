/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react-native";
import { AddMemberButton } from "../../components";

it("renders the title", () => {
  render(<AddMemberButton title="Click here" />);
  expect(screen.findByText("Click here")).toBeTruthy();
});
