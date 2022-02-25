import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage";

const hatsPAGE = () => (
  <div>
    <h1>hat</h1>
  </div>
);
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/hats" component={hatsPAGE} />
    </div>
  );
}

export default App;
