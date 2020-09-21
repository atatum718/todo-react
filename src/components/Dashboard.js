import React from "react";
import styled from "styled-components";
import sunset from "../imgs/bimo-luki-PE9gQW5nAQU-unsplash.jpg";

function Dashboard() {
  return <BackgroundImage></BackgroundImage>;
}

export const BackgroundImage = styled.div`
  background-image: url(${sunset});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100%;
  /* position: absolute; */
  top: 0;
  left: 0;
  z-index: -99;
  width: 100%;
`;

export default Dashboard;
