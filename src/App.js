import React, { useRef } from "react";
import "./App.css";
import NearFormLogo from "./assets/nearform-logo.png";

import { useFullScreen } from "react-browser-hooks";

const App = () => {
  const element = useRef(null);
  const fs = useFullScreen({ element });

  return (
    <div className="App">
      <img className="App-logo" src={NearFormLogo} alt="NearForm" />
      <h1 className="App-color1">
        Nearform React Amsterdam Coding Challenge 2019
      </h1>
      <h2 className="App-color2">
        Build a fun and creative app using our Open Source Library 'React
        Browser Hooks'
      </h2>
      <h2 className="App-color3">
        Choose from fullscreen, geolocation, clickoutside and many others to
        build something cool.
      </h2>
      <h2 className="App-color1">
        See README.md for rules of engagement, and links to our component
        storybook detailing all the hooks available + examples.
      </h2>
      <div ref={element}>
        <h3>This is a simple example to get your started...</h3>
        <button class="App-button" onClick={fs.toggle}>
          {fs.fullScreen ? "Close Fullscreen" : "Open Fullscreen"}
        </button>
      </div>
      <h1>Happy Hacking :-)</h1>
    </div>
  );
};

export default App;
