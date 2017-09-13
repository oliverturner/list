import * as React from "react";

class MarkerBlip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showInfo: false };
  }

  onMouseEnter = () => {
    this.setState({ showInfo: true });
  };

  onMouseLeave = () => {
    this.setState({ showInfo: false });
  };

  render() {
    return (
      <div onMouseLeave={this.onMouseLeave} key={this.props.url}>
        <MapBlip onMouseEnter={this.onMouseEnter} />
        {this.state.showInfo && (
          <MapInfo>
            <h4 style={{ margin: 0 }}>{this.props.name}</h4>
            {this.props.url && <a href={this.props.url}>{this.props.url}</a>}
          </MapInfo>
        )}
      </div>
    );
  }
}

export default MarkerBlip;
