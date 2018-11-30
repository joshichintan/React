import React from "react";
class Weather extends React.Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.city && this.props.country && (
          <p>
            Location:{this.props.city},{this.props.country}
          </p>
        )}
        {this.props.city && this.props.country && (
          <p>Temperature:{this.props.temperature}</p>
        )}
        {this.props.city && this.props.country && (
          <p> Humidity:{this.props.humidity}</p>
        )}
        {this.props.city && this.props.country && (
          <p>Condition: {this.props.description}</p>
        )}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
