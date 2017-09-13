import * as React from "react";
import Griddle, {
  plugins,
  RowDefinition,
  ColumnDefinition,
  utils
} from "griddle-react";

import UpdatePlugin from "../../utils/update-plugin";
import Layout from "./layout";
import Filter from "./filter";
import NoResults from "./no-results";
import Name from "./name";
import DateColumn from "./date-column";

export const Empty = () => <span />;

const EventDate = ({ rowData }) =>
  DateColumn(
    rowData.eventStartDate,
    rowData.eventEndDate,
    rowData.eventStartDate
  );

const CfpDate = ({ rowData }) =>
  DateColumn(rowData.cfpStartDate, rowData.cfpEndDate, rowData.cfpEndDate);

const { connect } = utils;

const EnhanceWithRowData = connect((state, props) => ({
  rowData: plugins.LocalPlugin.selectors.rowDataSelector(state, props)
}));

// based on Griddle's default sort -- which is not very great out-of-the-box
const sortMethod = (data, column, sortAscending = true) => {
  data.sort((original, newRecord) => {
    original = ((!!original.get(column) && original.get(column)) || "")
      .toUpperCase();
    newRecord = ((!!newRecord.get(column) && newRecord.get(column)) || "")
      .toUpperCase();

    //TODO: This is about the most cheezy sorting check ever.
    //Make it better
    if (original === newRecord) {
      return 0;
    } else if (original > newRecord) {
      return sortAscending ? 1 : -1;
    } else {
      return sortAscending ? -1 : 1;
    }
  });
};
// location sort
const locationSortMethod = (data, column, sortAscending = true) => {
  data.sort((original, newRecord) => {
    const getLocationValue = record =>
      `${record.get("country")}${record.get("stateProvince")}${record.get(
        "city"
      )}`.toUpperCase();

    original = getLocationValue(original);
    newRecord = getLocationValue(newRecord);

    //TODO: This is about the most cheezy sorting check ever.
    //Make it better
    if (original === newRecord) {
      return 0;
    } else if (original > newRecord) {
      return sortAscending ? 1 : -1;
    } else {
      return sortAscending ? -1 : 1;
    }
  });
};

class VirtualScrollTable extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Griddle
        data={data}
        plugins={[
          UpdatePlugin,
          plugins.LocalPlugin,
          plugins.PositionPlugin({ tableHeight: 799, rowHeight: 92 })
        ]}
        pageProperties={{
          pageSize: 1000000
        }}
        styleConfig={{
          classNames: {
            Table: "table"
          }
        }}
        components={{
          Filter: Filter,
          SettingsToggle: Empty,
          Pagination: Empty,
          Layout: Layout,
          NoResults
        }}
      >
        <RowDefinition>
          <ColumnDefinition
            id="name"
            title="Name"
            order={1}
            customComponent={EnhanceWithRowData(Name)}
            sortMethod={sortMethod}
          />
          <ColumnDefinition
            id="city"
            title="Location"
            order={2}
            customComponent={EnhanceWithRowData(Location)}
            sortMethod={locationSortMethod}
          />
          <ColumnDefinition
            id="eventStartDate"
            title="Event Date"
            order={3}
            customComponent={EnhanceWithRowData(EventDate)}
            sortMethod={sortMethod}
          />
          <ColumnDefinition
            id="cfpEndDate"
            title="CFP Date"
            order={4}
            customComponent={EnhanceWithRowData(CfpDate)}
            sortMethod={sortMethod}
          />
        </RowDefinition>
      </Griddle>
    );
  }
}

export default VirtualScrollTable;
