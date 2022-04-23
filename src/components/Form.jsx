import React from "react";



function Form(props) {
  return (
  <div>
    <h1>Log In</h1>
    <form className="form">
      <input required type="text" placeholder="Username" />
      <input required type="password" placeholder="Password" />
      {!props.isRegistered && <input required type="password" placeholder="Confirm Password" />}
      <button type="submit">
        {props.isRegistered ? "Login" : "Register"}
      </button>
    </form>
  </div>
  );
}

export default Form;
