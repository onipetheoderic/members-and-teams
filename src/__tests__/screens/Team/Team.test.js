import React from "react";
import { render, screen } from "@testing-library/react-native";
import { MockedProvider } from "@apollo/client/testing";
import { Team } from "../../../screens";
import { OverallContext } from "../../../../store";

import {
  navigationMock,
  routeMock,
  membersMock,
} from "../../components/mock/members";

it("renders without crashing", async () => {
  render(
    <OverallContext.Provider
      value={{ state: { members: membersMock }, dispatch: jest.fn() }}
    >
      <MockedProvider>
        <Team navigation={navigationMock} route={routeMock} />
      </MockedProvider>
    </OverallContext.Provider>
  );
  expect(await screen.findByText("Team Emmy")).toBeTruthy();
});
