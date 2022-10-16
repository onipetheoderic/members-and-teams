import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { MemberCard } from "../../components";

it("renders the title, firstName and LastName", () => {
  render(
    <MemberCard
      title="business analyst"
      firstName="theoderic"
      lastName="onipe"
    />
  );
  expect(screen.findByText("theoderic")).toBeTruthy();
  expect(screen.findByText("business analyst")).toBeTruthy();
  expect(screen.findByText("onipe")).toBeTruthy();
});

it("displays initials when avatar is empty", () => {
  render(
    <MemberCard
      title="business analyst"
      firstName="theoderic"
      lastName="onipe"
      avatar=""
    />
  );
  expect(screen.findByText("TO")).toBeTruthy();
});

it("fires a press event when pressed", () => {
  const onPressMock = jest.fn();
  render(
    <MemberCard
      title="business analyst"
      firstName="theoderic"
      lastName="onipe"
      avatar=""
      onPress={onPressMock}
    />
  );
  fireEvent.press(screen.getByTestId("memberCard"));
  expect(onPressMock).toHaveBeenCalled();
});
