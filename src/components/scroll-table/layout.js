import * as React from "react";
import styled from "styled-components";

import Map from "../map";

export const GriddleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 15px 15px 15px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  width: 100%;
  margin-bottom: 80px;
`;

export const MapWrapper = styled.div`
  min-height: 800px;
  width: 50%;

  @media (max-width: ${mobileWidth}px) {
    width: 100%;
  }
`;

export const TableWrapper = styled.div`
  width: 50%;

  div {
    width: 100%;
  }

  table {
    width: 100%;
    min-width: 100%;
    border-spacing: 0;
    font-size: 18px;
    height: 800px;
    min-height: 800px;
  }

  th {
    text-align: left;
    background-color: #ededed;
  }

  td {
    height: 90px;
    max-height: 90px;
    min-height: 90px;
    width: 25%;
  }

  td:first-child {
    padding-left: 15px;
  }

  @media (max-width: ${mobileWidth}px) {
    width: 100%;
  }
`;

const Layout = ({ Table, Filter }) => (
  <GriddleWrapper>
    <Filter />
    <ContentWrapper>
      <MapWrapper>
        <Map />
      </MapWrapper>
      <TableWrapper>
        <Table />
      </TableWrapper>
    </ContentWrapper>
  </GriddleWrapper>
);

export default Layout;
