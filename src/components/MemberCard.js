import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { Zircon, DeepSkyBlue, SuvaGrey } from "./colors";
import { firstLetter } from "../utils";
import { ImageLoad } from "../components";

const MemberCard = ({ avatar, firstName, lastName, title, onPress }) => {
  const initials = firstLetter(firstName) + firstLetter(lastName);

  return (
    <Container onPress={() => onPress()} testID="memberCard">
      <CircleCard>
        {avatar ? (
          <ImageLoad
            source={{ uri: avatar }}
            style={styles.overallImage}
            imageStyle={styles.imageStyle}
            loadingStyle={styles.loadingStyle}
          />
        ) : (
          <InitialStyle>{initials}</InitialStyle>
        )}
      </CircleCard>

      <InitialContainer>
        <NameText>
          {firstName} {lastName}
        </NameText>
        <OccupationText>{title}</OccupationText>
      </InitialContainer>
    </Container>
  );
};

MemberCard.propTypes = {
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  title: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 35,
    resizeMode: "cover",
  },
  loadingStyle: {
    color: DeepSkyBlue,
    size: "large",
  },
  overallImage: {
    height: 70,
    width: 70,
  },
});

const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-vertical: 10px;
`;

const CircleCard = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${Zircon};
  justify-content: center;
  align-items: center;
`;

const InitialStyle = styled.Text`
  font-size: 32px;
  font-family: Poppins_400Regular;
`;

const NameText = styled.Text`
    font-size: 14px;
    color: ${DeepSkyBlue}
    font-family: Poppins_500Medium;
`;

const OccupationText = styled.Text`
  font-size: 11px;
  font-family: Poppins_400Regular;
  color: ${SuvaGrey};
`;

const InitialContainer = styled.View`
  flex-direction: column;
  margin-left: 19px;
`;

export default MemberCard;
