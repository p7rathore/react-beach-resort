import React from "react";
import styled from "styled-components";
import image from "../../assets/images/profileImg.jpg";

const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 3rem;
`;
const ProfileImg = styled.img`
  height: 2rem;
  margin: 0 1rem;
  cursor: pointer;
  /* width: 100px; */
  border-radius: 50%;
`;
const MessageIcon = styled.span`
  color: ${({ theme }) => theme.colorGray};
  font-size: 27px;
  cursor: pointer;
`;
const Nav = () => {
  return (
    <Container>
      <MessageIcon
        className="iconify"
        data-inline="false"
        data-icon="mdi-light:email"
      ></MessageIcon>
      <ProfileImg src={image} />
    </Container>
  );
};

export default Nav;
