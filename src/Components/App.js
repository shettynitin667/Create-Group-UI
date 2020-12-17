import React from "react";

import AddGroup from "./AddGroup";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <p className="appName">Create Group</p>
        <AddGroup />
        <div className="buttonDiv">
          <button className="update">Update</button>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default App;
