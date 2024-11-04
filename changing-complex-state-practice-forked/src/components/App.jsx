import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  function contactUpdate(event) {
    const { name, value } = event.target;

    if (name === "fName") {
      setContact((prevValue) => {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
        };
      });
    } else if (name === "lName") {
      setContact((prevValue) => {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
        };
      });
    } else if (name === "email") {
      setContact((prevValue) => {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
        };
      });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={contactUpdate}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={contactUpdate}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={contactUpdate}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
