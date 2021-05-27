import React, { useState } from "react";
import Axios from "axios";

function RegisterPage(props) {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Meg, setMeg] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onNameHandler = (e) => {
    setName(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      setMeg("Password and Confirm Password does not match!");
    } else if (Password.length < 5) {
      setMeg("password must be more than 5 digits");
    } else if (Name.length > 50) {
      setMeg("name should not be more than 50 digits");
    } else {
      setMeg("");
      const data = {
        Email,
        Name,
        Password,
      };
      Axios.post("/api/user/register", data).then((res) => {
        if (res.data.duplicate) {
          setMeg("You already have an account please sign in");
        } else {
          if (res.data.success) {
            console.log("register success");
            props.history.push("/login");
          } else {
            console.log("failed to sign up: ", res.data, " or ", res.data.err);
          }
        }
      });
    }
  };

  return (
    <div>
      <h1 style={{ width: "100%", textAlign: "center" }}>Registration Page</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div>
          <p style={{ color: "red", fontSize: "0.9rem" }}> {Meg}</p>
        </div>

        <form style={{ display: "flex", flexDirection: "column" }}>
          <label>Email</label>
          <input type="email" value={Email} onChange={onEmailHandler} />

          <label>First Name</label>
          <input type="text" value={Name} onChange={onNameHandler} />

          <label>Password</label>
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            value={ConfirmPassword}
            onChange={onConfirmPasswordHandler}
          />
          <br />
          <button type="submit" onClick={onSubmitHandler}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
