import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { StatusBar } from "expo-status-bar";
import { Black } from "./colors";
import Back from "../../assets/images/back.png";

const Header = ({
  toggleFunction,
  rightText,
  centerText,
  withBack,
  onBackPress,
}) => {
  return (
    <Container>
      <StatusBar style="light" />
      <Wrapper>
        {withBack ? (
          <BackContainer onPress={onBackPress} testID="back">
            <BackImage source={Back} />
          </BackContainer>
        ) : (
          <ToggleContainer></ToggleContainer>
        )}

        <ToggleContainer onPress={() => toggleFunction()} testID="toggle">
          <ToggleText>{rightText}</ToggleText>
        </ToggleContainer>
      </Wrapper>
      <CenterText>{centerText}</CenterText>
    </Container>
  );
};

Header.propTypes = {
  rightText: PropTypes.string,
  centerText: PropTypes.string,
  toggleFunction: PropTypes.func,
  withBack: PropTypes.bool,
  onBackPress: PropTypes.func,
};

const Container = styled.View`
  height: 118px;
  width: 100%;
`;
const ToggleText = styled.Text`
  font-size: 16px;
  font-family: Poppins_400Regular;
  color: ${Black};
  align-self: flex-end;
  padding-right: 25px;
  padding-top: 50px;
`;

const CenterText = styled.Text`
  padding-top: 18px;
  font-size: 21px;
  font-family: Poppins_500Medium;
  align-self: center;
`;
const BackContainer = styled.TouchableOpacity`
  padding-left: 25px;
  justify-content: flex-end;
`;
const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const ToggleContainer = styled.TouchableOpacity``;
const BackImage = styled.Image``;
export default Header;
