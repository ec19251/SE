import React, { Component } from "react";
import styled, { css } from "styled-components";
import HeaderX from "../components/HeaderX";

function Admin(props) {
  return (
    <Container>
      <HeaderX
        style={{
          height: 80,
          boxShadow: "1px 7px 5px  0.1px rgba(0,0,0,1) "
        }}
        button="Settings"
      ></HeaderX>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Admin;
