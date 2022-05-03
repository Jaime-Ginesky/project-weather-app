import React from "react";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container-lg">
        <Weather defaultCity="Los Angeles" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://naughty-hermann-a4b01e.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Jaime Ginesky{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Jaime-Ginesky/project-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
