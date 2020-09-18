import React from "react";
import styled from "styled-components";
import sunset from "../imgs/sebastien-gabriel--IMlv9Jlb24-unsplash.jpg";

function Dashboard() {
  return <BackgroundImage></BackgroundImage>;
}

const BackgroundImage = styled.div`
  background-image: url(${sunset});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -99;
  width: 100%;
`;

export default Dashboard;
