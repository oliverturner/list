import * as React from "react";
import styled from "styled-components";

export const ButtonGroup = styled.div`
  margin-top: 100px;
  width: 100%;
  justify-content: center !important; /* :( */
`;

export const ToggleButton = styled.button`
  margin-left: 30px;
  margin-top: 5px;
`;

const Component = ({ onSelect, selected, toggleForm, isMobile }) => {
  return (
    <ButtonGroup className="field has-addons">
      <div className="control">
        <a
          className={`button ${selected === "all" && "is-primary"}`}
          onClick={() => onSelect("all")}
        >
          <span>All</span>
        </a>
      </div>
      <div className="control">
        <a
          className={`button ${selected === "upcoming" && "is-primary"}`}
          onClick={() => onSelect("upcoming")}
        >
          <span>Upcoming</span>
        </a>
      </div>
      <div className="control">
        <a
          className={`button ${selected === "openCfps" && "is-primary"}`}
          onClick={() => onSelect("openCfps")}
        >
          <span>Open CFPs</span>
        </a>
      </div>
      {!isMobile && (
        <ToggleButton onClick={toggleForm} className="button is-small">
          Toggle 'Add Event' Form
        </ToggleButton>
      )}
    </ButtonGroup>
  );
};

export default Component;
