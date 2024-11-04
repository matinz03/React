import React, { useState } from "react";

function App() {
  const [fname, fnameSet] = useState("");
  const [lname, lnameSet] = useState("");
  const [greeting, greetingSet] = useState("hello");
  function fnameUpdate(event) {
    fnameSet(event.target.value);
  }
  function lnameUpdate(event) {
    lnameSet(event.target.value);
  }
  return (
    <div className="container">
      <h1>
        {greeting} {fname} {lname}
      </h1>
      <form>
        <input
          onChange={fnameUpdate}
          name="fName"
          placeholder="First Name"
          value={fname}
        />
        <input
          onChange={lnameUpdate}
          name="lName"
          placeholder="Last Name"
          value={lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
