import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  function itemHandler(event) {
    const text = event.target.value;
    setItem(text);
  }

  function listHandler() {
    setList((prevList) => [...prevList, item]);
    setItem(""); // Clear the input field after adding
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={item} onChange={itemHandler} />
        <button onClick={listHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((todoItem, index) => (
            <li key={index}>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
