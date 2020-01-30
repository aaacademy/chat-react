import React from 'react';
import './App.css'
import Sockt from "./Socket";

function App() {
  return (
    <div className="App">
      <Sockt
        serverUrl="http://localhost:8080/"
        topic="asrul-dev"
      />
    </div>
  );
}

export default App;
