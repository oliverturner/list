import * as React from "react";

const Location = styled.div`
small {
  font-size: 12px;
  display: block;
}
`;

const Component = ({ rowData }) => (
  <Location>
    <small>
      {rowData.city} {rowData.stateProvince}
    </small>
    <small>{rowData.country}</small>
  </Location>
);

export default Component;
