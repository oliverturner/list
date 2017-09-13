// This is mostly just hacks -- this is NOT necessarily
// an indicator of how one should be writing code.
// </disclaimer>

import * as React from "react";
import conferences from "./events.json";
import moment from "moment";

import "./App.css";
import Add from "./components/add";
import ScrollTable from "./components/scroll-table";
import CardList from "./components/card-list";
import ButtonGroup from "./components/app/button-group";
import Header from "./components/app/header";
import Footer from "./components/app/footer";

const mobileWidth = 1024;

class App extends React.Component {
  state = { dataType: "all", showForm: false };

  onSelect = dataType => {
    this.setState({ dataType });
  };

  onToggleForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }));
  };

  getData = () => {
    const { dataType } = this.state;

    switch (dataType) {
      case "upcoming":
        return conferences.filter(
          conference =>
            conference.eventStartDate &&
            conference.eventStartDate > moment().toISOString()
        );
      case "openCfps":
        return conferences.filter(
          conference =>
            conference.cfpEndDate &&
            conference.cfpEndDate > moment().toISOString()
        );
      default:
        return conferences;
    }
  };

  render() {
    const data = this.getData();
    const isMobileish = window.innerWidth < mobileWidth;
    const ListComponent = isMobileish ? CardList : ScrollTable;

    return (
      <div>
        <Header />
        <ButtonGroup
          onSelect={this.onSelect}
          selected={this.state.dataType}
          toggleForm={this.onToggleForm}
          isMobile={isMobileish}
        />
        <Add displayed={!isMobileish && this.state.showForm} />
        <ListComponent data={data} />
        <Footer />
      </div>
    );
  }
}

export default App;
