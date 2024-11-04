import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.login && <input type="password" placeholder="Confirm Password" />}
      {!props.login ? (
        <button type="submit">Register</button>
      ) : (
        <button type="submit">Login</button>
      )}
    </form>
  );
}

export default Form;
