import * as React from "react";

const Name = ({ value, rowData }) => (
  <strong>
    {rowData.url ? (
      <a href={rowData.url} target="_blank">
        {value}
      </a>
    ) : (
      value
    )}
  </strong>
);

export default Name;
