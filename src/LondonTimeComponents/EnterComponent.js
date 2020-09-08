import React from "react";

export default class EnterComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.status === 0 ? (
          <button className="timerButton" onClick={this.props.start}>
            Enter
          </button>
        ) : (
          ""
        )}
        {this.props.status === 1 ? (
          <div>
            <button className="timerButton" onClick={this.props.stop}>
              Stop
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
