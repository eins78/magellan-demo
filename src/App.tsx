import React, { useEffect, useState } from "react";
import { setNamespace } from "@quatico/magellan-client";
import { greetMe } from "./services/greet-me";

import logo from "./logo.svg";
import "./App.css";

// to serve the frontend through react-scripts and run the server along it, we need to tell magellan
// that the server is on a different port than where it is served from.
setNamespace("default", { endpoint: "http://localhost:3001/api" });

function App() {
  const [greeting, setGreeting] = useState("... waiting for greetings ...");

  useEffect(() => {
    greetMe("React")
      .then(setGreeting)
      .catch((reason) => {
        console.error(`Error requesting greeting: ${reason}`);
        setGreeting("server does not wish to greet us");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{greeting}</p>
      </header>
    </div>
  );
}

export default App;
