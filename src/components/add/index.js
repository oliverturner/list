import React from "react";
import moment from "moment";
import geocoder from "geocoder";

import { getDateString } from "../../utils/date";
import {
  AddWrapper,
  LayoutWrapper,
  Left,
  Right,
  TextArea,
  Button
} from "./styles";

const linkProps = {
  target: "_blank",
  rel: "noopener noreferrer"
};

const hrefs = {
  list: "https://github.com/conferenceradar/list",
  json: "https://github.com/conferenceradar/list/blob/master/src/events.json"
};

const links = hrefs.reduce((ret, key) => {
  return { ...ret, [key]: { ...linkProps, href: hrefs[key] } };
});

const refs = [
  { name: "name", label: "Name" },
  { name: "topic", label: "Topic" },
  { name: "url", label: "URL" },
  { name: "twitter", label: "Twitter" },
  { name: "city", label: "City" },
  { name: "stateProvince", label: "State/Province" },
  { name: "country", label: "Country" },
  { name: "eventStartDate", label: "Start Date" },
  { name: "eventEndDate", label: "End Date" },
  { name: "cfpStartDate", label: "CFP Start Date" },
  { name: "cfpEndDate", label: "CFP End Date" },
  { name: "codeOfConduct", label: "Code of Conduct", type: "boolean" }
];

class Form extends React.Component {
  state = refs.reduce(
    (ret, ref) => ({ ...ret, [ref.name]: ref.type ? false : "" }),
    {}
  );

  parseValue({ name, value }) {
    switch (name) {
      case "eventStartDate":
      case "eventEndDate":
      case "cfpStartDate":
      case "cfpEndDate":
        return { [name]: getDateString(value) };

      default:
        return { [name]: value };
    }
  }

  onFieldUpdate = ({ target }) => {
    this.setState(this.parseValue(target));
  };

  getLabel = ({ name, label, value }) => (
    <label htmlFor={name}>
      {label}
      <input name={name} value={value} onChange={this.onFieldUpdate} />
    </label>
  );

  // getLatLong = () => {
  //   return geocoder.geocode(
  //     `${obj.city} ${obj.stateProvince} ${obj.country}`,
  //     (err, data) => {
  //       if (err) {
  //         this.setState({ outputText: JSON.stringify(obj, null, "  ") });
  //         return;
  //       }

  //       const newObject = {
  //         ...obj,
  //         latitude: data.results[0].geometry.location.lat,
  //         longitude: data.results[0].geometry.location.lng
  //       };
  //       this.setState({ outputText: JSON.stringify(newObject, null, "  ") });
  //     }
  //   );
  // };

  render() {
    return (
      <AddWrapper>
        <p>
          The data in this application exists in{" "}
          <a {...links.json}>events.json</a>
          This form exists in order to make the process of editing records in
          this json file easier. Update this form and click generate -- from
          there you can copy the item from the text area on the right and update
          <a {...links.json}>events.json</a> and{" "}
          <a {...links.list}>submit a PR</a>.
        </p>

        <LayoutWrapper>
          <Left>
            {refs.map(this.getLabel)}
            <Button onClick={this.onClick}>Generate</Button>
          </Left>
          <Right>
            <TextArea value={this.state.outputText} rows="20" />
          </Right>
        </LayoutWrapper>
      </AddWrapper>
    );
  }
}

export default Form;
