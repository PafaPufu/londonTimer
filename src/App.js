import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import EnterComponent from "./LondonTimeComponents/EnterComponent";
import ShowTime from "./LondonTimeComponents/LondonTimeTest";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo"></img>
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           to get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
const Body = (props) => (
  <div>
    <p className="App-intro">
      to get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <p className="App-intro">{props.text}</p>
  </div>
);

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <h1 className="App-title"> hi </h1>
    </header>
  );
}
function App() {
  const [time, setTime] = React.useState({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = React.useState();
  const [status, setStatus] = React.useState(0);
  const [editStatus, setEditStatus] = React.useState({ stat: 0, setStat: 0 });

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedH === 12) {
      updatedH = 0;
    }
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    updatedS++;
    return setTime({ s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(0);
    if ((setStatus.setStat = 1)) {
      setStatus.stat = 1;
    }
  };

  return (
    <div className="App">
      <div className="timer">
        <ShowTime
          time={time}
          setTime={setTime}
          editStatus={editStatus}
        ></ShowTime>
        <EnterComponent
          status={status}
          setEditStatus={setEditStatus}
          stop={stop}
          start={start}
        />
      </div>
    </div>
  );
}

export default App;
