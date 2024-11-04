import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  const [time, timeSet] = useState(now);
  function updateTime() {
    const newNow = new Date().toLocaleTimeString();
    timeSet(newNow);
  }
  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
