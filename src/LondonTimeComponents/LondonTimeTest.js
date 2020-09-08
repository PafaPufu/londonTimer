import React from "react";

export default class ShowTime extends React.Component {
  editHour = (event) => {
    return this.props.setTime({
      s: this.props.time.s,
      m: this.props.time.m,
      h: event.target.value,
    });
  };
  editMin = (event) => {
    return this.props.setTime({
      s: this.props.time.s,
      m: event.target.value,
      h: this.props.time.h,
    });
  };
  editSec = (event) => {
    return this.props.setTime({
      s: event.target.value,
      m: this.props.time.m,
      h: this.props.time.h,
    });
  };
  hourEditStatus = () => {
    this.props.editStatus.setStat = 1;
  };
  render() {
    return (
      <div
        style={{
          position: "relative",
          width: 200,
          left: "43%",
          border: "black 10px solid",
          padding: 20,
        }}
      >
        <div>
          {this.props.editStatus.stat === 0 ? (
            <span onClick={this.hourEditStatus}>
              {this.props.time.h >= 10
                ? this.props.time.h
                : "0" + this.props.time.h}
              &nbsp;:&nbsp;
            </span>
          ) : (
            ""
          )}
          {this.props.editStatus.stat === 1 ? (
            <input onChange={this.editHour} style={{ width: 20 }}>
              &nbsp;:
            </input>
          ) : (
            ""
          )}
          {this.props.editStatus.stat === 0 ? (
            <span>
              {this.props.time.m >= 10
                ? this.props.time.m
                : "0" + this.props.time.m}
              &nbsp;:&nbsp;
            </span>
          ) : (
            ""
          )}
          {this.props.editStatus.stat === 0 ? (
            <span>
              {this.props.time.s >= 10
                ? this.props.time.s
                : "0" + this.props.time.s}
            </span>
          ) : (
            ""
          )}
        </div>
        <input onChange={this.editHour} style={{ width: 20 }}></input>&nbsp;:
        <input onChange={this.editMin} style={{ width: 20 }}></input>&nbsp;:
        <input onChange={this.editSec} style={{ width: 20 }}></input>
      </div>
    );
  }
}

// export const TEST = () => (
//   <div>
//     <div>hellofrom test func</div>
//   </div>
// );
