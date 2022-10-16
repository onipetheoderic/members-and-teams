import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { MockedProvider } from "@apollo/client/testing";
import { AllMembers } from "../../../screens";
import { OverallContext } from "../../../../store";
import {
  navigationMock,
  routeMock,
  membersMock,
  mocks,
  mocksEmpty,
} from "../../components/mock/members";

it("renders without crashing", async () => {
  render(
    <OverallContext.Provider
      value={{ state: { members: membersMock }, dispatch: jest.fn() }}
    >
      <MockedProvider mocks={mocks} addTypename={false}>
        <AllMembers navigation={navigationMock} route={routeMock} />
      </MockedProvider>
    </OverallContext.Provider>
  );
  expect(await screen.findByTestId("loadingSpinner")).toBeTruthy();
});

it("refetch when members is empty", async () => {
  render(
    <OverallContext.Provider
      value={{ state: { members: membersMock }, dispatch: jest.fn() }}
    >
      <MockedProvider mocks={mocksEmpty} addTypename={false}>
        <AllMembers navigation={navigationMock} route={routeMock} />
      </MockedProvider>
    </OverallContext.Provider>
  );
  expect(await screen.findByTestId("refreshSpinner")).toBeTruthy();
});
