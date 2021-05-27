import React, { useState } from "react";
import Axios from "axios";
function LoginPage(props) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      email: Email,
      password: Password,
    };

    Axios.post("/api/user/login", data).then((res) => {
      if (res.data.loginSuccess) {
        console.log("login success userID:", res.data.userId);
        props.history.push("/");
      } else {
        console.log("error!");
      }
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <input
          type="text"
          name="email"
          onChange={emailHandler}
          value={Email}
          placeholder="email"
        />
        <input
          type="text"
          name="password"
          onChange={passwordHandler}
          value={Password}
          placeholder="password"
        />
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
