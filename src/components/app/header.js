import * as React from "react";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
  padding: 20px 15px 0;
  background-color: hsl(171, 100%, 41%);
  color: white;
`;

const Title = styled.h1`
  font-family: "Exo", sans-serif;
  font-size: 26px;
`;

const Content = styled.div`
  text-align: center;
  max-width: 400px;

  @media (min-width: 760px) {
    display: none;
    text-align: left;
  }

  a,
  a:visited,
  a:hover {
    color: hsl(171, 80%, 73%);
  }
`;

const Component = () => (
  <Header>
    <Title>Conference Radar</Title>
    <Content>
      <p>Know of a conference not listed? Notice an issue?</p>
      <a href="https://github.com/conferenceradar/list">
        Contribute to this project on GitHub
      </a>
    </Content>
  </Header>
);

export default Component;
