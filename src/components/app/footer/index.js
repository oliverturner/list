import * as React from "react";

import { Footer, FooterLeft, FooterRight } from "./styles";

const Component = () => (
  <Footer>
    <FooterLeft>
      <p>
        The data is based on conference lists from{" "}
        <a href="https://twitter.com/heathriel">Heather Wilde</a> and{" "}
        <a href="https://twitter.com/housecor">Cory House</a>.
      </p>
      <p>
        Site compiled by{" "}
        <a href="https://twitter.com/ryanlanciaux">Ryan Lanciaux</a> using{" "}
        <a href="https://github.com/facebookincubator/create-react-app">
          Create React App
        </a>{" "}
        with <a href="http://griddlegriddle.github.io/Griddle">Griddle</a>
      </p>
    </FooterLeft>
    <FooterRight>
      <small>
        This is a community maintained site/list provided as-is without
        guarantee or warranty. If you notice an issue or innacuracy, please{" "}
        <a href="https://github.com/conferenceradar/list">
          file an issue/PR on GitHub
        </a>.
      </small>
    </FooterRight>
  </Footer>
);

export default Component;
