import * as React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);

    // TODO: Don't do this
    this.setFilterDebounced = debounce(this.props.setFilter, 300);
  }

  setFilter = e => {
    this.setFilterDebounced(e.target.value);
  };

  render() {
    return (
      <FilterInput
        type="text"
        name="filter"
        className="input"
        placeholder="Filter"
        onChange={this.setFilter}
      />
    );
  }
}

export default Filter;
