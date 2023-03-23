import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    alert(username + " " + password);
  };
  return (
    <div className="App loginContainer">
      <form onSubmit={() => handleSubmit()}>
        <input
          placeholder="Username"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
