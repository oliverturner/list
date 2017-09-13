import styled from "styled-components";

export const Footer = styled.footer`
  border-top: 2px solid #aaa;
  position: fixed;
  height: 100px;
  padding: 10px 15px 0 0;
  bottom: 0;
  background-color: #ededed;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const FooterLeft = styled.div`
  width: 50%;
  padding-left: 15px;

  @media (max-width: ${mobileWidth}px) {
    width: 100%;
  }
`;

export const FooterRight = styled.div`
  width: 50%;
  bottom: 0;
  color: #aaa;
  position: relative;

  small {
    width: 600px;
    max-width: 100%;
    position: absolute;
    bottom: 40px;
    right: 20px;
  }

  a,
  a:visited,
  a:hover {
    color: #555;
  }

  @media (max-width: ${mobileWidth}px) {
    width: 100%;

    small {
      position: initial;
    }
  }
`;





export const FilterInput = styled.input`margin: 10px 0 10px 0;`;


