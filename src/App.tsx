import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { greetMe } from "./services/greet-me";

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
