import React from "react";
import styled from "styled-components";
import profileImg from "../../assets/images/profileImg.jpg";

const Container = styled.div`
  margin-top: 5rem;
`;

const ProfileImg = styled.img`
  width: 100px;
  border-radius: 50px;
`;

const ProfileName = styled.h1`
  font-size: 1rem;
  font-weight: 300px;
  color: ${({ theme }) => theme.textColor};
`;

const Profile = () => {
  return (
    <Container>
      <ProfileImg src={profileImg} />
      <ProfileName> Piyush rathore</ProfileName>
    </Container>
  );
};

export default Profile;
