import React, { useRef } from "react";
import "./App.css";
import NearFormLogo from "./assets/nearform-logo.png";

import { useFullScreen } from "react-browser-hooks";

const App = () => {
  const element = useRef(null);
  const fs = useFullScreen({ element });

  return (
    <div className="App">
      <div ref={element}>
        <h3>My App...</h3>
        <button class="App-button" onClick={fs.toggle}>
          {fs.fullScreen ? "Close Fullscreen" : "Open Fullscreen"}
        </button>
      </div>
    </div>
  );
};

export default App;
