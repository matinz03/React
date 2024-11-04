import React, { useRef } from "react";

function App() {
  const nameRef = useRef();

  const handleChange = () => {
    console.log(nameRef.current.value); // Logs the current value of the input on each change
  };

  const handleSubmit = () => {
    console.log("Submitted name:", nameRef.current.value); // Access the current value when submitting
  };

  return (
    <div className="container">
      <h1>Hello</h1>
      <input
        ref={nameRef}
        type="text"
        placeholder="What's your name?"
        onChange={handleChange} // Calls handleChange on every keystroke
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
