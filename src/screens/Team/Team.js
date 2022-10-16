/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components/native";
import _ from "lodash";
import {
  Header,
  MemberCard,
  Grid,
  Colors,
  AddMemberButton,
} from "../../components";
import { OverallContext } from "../../../store";
import { descriptive } from "../../utils";

const Team = ({ route, navigation }) => {
  const { id } = route.params;
  const { state } = React.useContext(OverallContext);

  const currentUserInfo = state.members.filter(user => user.id == id)[0];
  const descriptionMaker = (arr, currentUserFirstName) => {
    if (arr.length > 0) {
      let experienceTotal = _.sumBy(arr, function (data) {
        return data.experience;
      });
      let firstNames = _.map(arr, "firstName");
      firstNames.unshift(currentUserFirstName);
      const describedArr = descriptive(firstNames, true);
      return `Between ${describedArr}, this team of experts have a total of ${experienceTotal} years experience. You are in good hands.`;
    } else {
      return `Oops, ${currentUserFirstName} doesn’t have a team yet.`;
    }
  };

  return (
    <Container>
      <Header
        centerText={`Team ${currentUserInfo?.firstName}`}
        withBack
        onBackPress={() => navigation.goBack()}
      />
      <Wrapper>
        <MemberCard
          firstName={currentUserInfo.firstName}
          lastName={currentUserInfo.lastName}
          avatar={currentUserInfo.avatar}
          title={currentUserInfo.title}
          onPress={() =>
            navigation.navigate("Team", { id: currentUserInfo.id })
          }
        />
        <Border />

        {currentUserInfo.colleagues.map(colleague => (
          <MemberCard
            firstName={colleague.firstName}
            lastName={colleague.lastName}
            avatar={colleague.avatar}
            title={colleague.title}
            onPress={() => navigation.navigate("Team", { id: colleague.id })}
            key={colleague.id}
          />
        ))}

        {currentUserInfo.colleagues.length === 0 && (
          <AddMemberButton marginVertical={50} title="Click to add member" />
        )}
        <Border />
        <Description>
          <DescriptionText>
            {descriptionMaker(
              currentUserInfo.colleagues,
              currentUserInfo.firstName
            )}
          </DescriptionText>
        </Description>
      </Wrapper>
    </Container>
  );
};

const Container = styled.View``;
const Wrapper = styled.View`
  padding: ${Grid.BaseGutter}px;
`;
const Border = styled.View`
  border-top-width: 0.25px;
  border-top-color: rgba(0, 0, 0, 0.5);
  height: ${Grid.MediumGutter + Grid.ExtraSmallGutter}px;
  width: 100%;
  margin-top: ${Grid.MediumGutter + Grid.ExtraSmallGutter}px;
`;

const Description = styled.View``;

const DescriptionText = styled.Text`
  font-family: Poppins_400Regular_Italic;
  font-size: 13px;
  color: ${Colors.Silver};
  text-align: center;
`;

export default Team;
