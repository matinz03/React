import React, { useState } from "react";

function App() {
  const [dothat, fdothat] = useState(false);

  const handleMouseEnter = () => fdothat(true);
  const handleMouseLeave = () => fdothat(false);

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={dothat ? { backgroundColor: "black" } : null}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
