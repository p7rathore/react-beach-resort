import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import Menu from "./Menu/Menu";
import ToggleSwitch from "./ToggleSwitch";
const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 16rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Sidebar = () => {
  return (
    <Container>
      <Profile />
      <Menu />
      <ToggleSwitch />
    </Container>
  );
};

export default Sidebar;
