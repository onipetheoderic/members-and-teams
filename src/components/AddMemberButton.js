import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { DeepSkyBlue, Silver } from "./colors";
import { Grid } from ".";

const AddMemberButton = ({ marginVertical = 0, title }) => {
  return (
    <Container marginVertical={marginVertical}>
      <AddText>+ {title}</AddText>
    </Container>
  );
};

AddMemberButton.propTypes = {
  title: PropTypes.string,
  marginVertical: PropTypes.number,
};

const Container = styled.View`
  border: 1px solid ${Silver};
  height: ${Grid.BaseGutter * 2}px;
  width: ${Grid.BaseGutter * 5}px;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-vertical: ${props => props.marginVertical};
`;

const AddText = styled.Text`
  font-size: 10px;
  color: ${DeepSkyBlue};
`;

export default AddMemberButton;
