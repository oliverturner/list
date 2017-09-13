import * as React from "react";
import styled from "styled-components";

import {dateFormat} from "../../utils/date"

export const DateColumn = styled.div`
  small {
    display: block;
    font-size: 12px;
  }
`;

const Component = (start, end, keyColumn) => {
  if (!keyColumn) {
    return null;
  }

  return (
    <DateColumn>
      <small>
        <strong>Start:</strong> {dateFormat(start)}
      </small>
      <small>
        <strong>End:</strong> {dateFormat(end)}
      </small>
    </DateColumn>
  );
};

export default Component;
