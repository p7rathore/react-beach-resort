import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import NewDepositBtn from "./NewDepositBtn";
import Deposits from "./Deposits/Deposits";
import depositeData from "../../DepositData.json";

const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
`;

const Main = () => {
  return (
    <Container>
      <Nav />
      <NewDepositBtn />
      <Deposits title="Active Deposits" count={2} data={depositeData.active} />
      <Deposits title="Closed Deposits" count={2} data={depositeData.closed} />
    </Container>
  );
};

export default Main;
