/* eslint-disable no-undef */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { Header } from "../../components";

it("renders the center text", () => {
  render(
    <Header
      toggleFunction={jest.fn()}
      rightText="unsorted"
      centerText="All members"
      onBackPress={jest.fn()}
    />
  );
  expect(screen.findByText("All members")).toBeTruthy();
});

it("fires a press event when toggle filter is pressed", () => {
  const onPressMock = jest.fn();
  render(
    <Header
      toggleFunction={onPressMock}
      rightText="unsorted"
      centerText="All members"
      onBackPress={onPressMock}
    />
  );
  fireEvent.press(screen.getByTestId("toggle"));
  expect(onPressMock).toHaveBeenCalled();
});

it("fires a press event when back button is pressed", () => {
  const onPressMock = jest.fn();
  render(
    <Header
      toggleFunction={onPressMock}
      rightText="unsorted"
      centerText="All members"
      onBackPress={onPressMock}
      withBack={true}
    />
  );
  fireEvent.press(screen.getByTestId("back"));
  expect(onPressMock).toHaveBeenCalled();
});
