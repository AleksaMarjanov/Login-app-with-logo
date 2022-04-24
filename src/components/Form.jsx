import React, {useState} from "react";


function Form() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [headingText, setHeadingText] = useState('Log In')

  function handleChange(e) {
    setUsername(e.target.value)
  }

  function handlePwChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    setHeadingText('Hello, ' + username);
    e.preventDefault();
    setUsername("");
    setPassword("");
    
  }

  return (
  <form className="form" onSubmit={handleSubmit}>
    <h1>{headingText}</h1>
      <input 
      required 
      onChange={handleChange}
      type="text"
      placeholder="Username" 
      value={username}
      />
      <input 
      required 
      onChange={handlePwChange}
      type="password" 
      placeholder="Password"
      value={password}
      />
      <button type='submit'>Login</button>
  </form>
  );
}

export default Form;
