import * as React from "react";
import GoogleMapReact from "google-map-react";
import { plugins, utils } from "griddle-react";

import MarkerBlip from "./marker-blip";

const mapKey = "AIzaSyBxlhYxv5xCTvRmSKbx5TwVwcNkTXiMNvU";

const { connect } = utils;

const Map = connect(state => ({
  visibleData: plugins.LocalPlugin.selectors.filteredDataSelector(state)
}))(({ visibleData }) => {
  const data = visibleData.toJSON();
  return (
    <GoogleMapReact
      defaultCenter={{ lat: 42.28, lng: -83.74 }}
      defaultZoom={4}
      bootstrapURLKeys={{
        key: mapKey
      }}
    >
      {visibleData &&
        data.map(r => (
          <MarkerBlip
            key={r.name + r.city + r.country + r.eventStartDate}
            griddleKey={r.name}
            lat={r.latitude}
            lng={r.longitude}
            {...r}
          />
        ))}
    </GoogleMapReact>
  );
});

export default Map;
