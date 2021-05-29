import React from "react";
import Axios from "axios";
import { Typography } from "@material-ui/core";

function LandingPage(props) {
  const onLogoutHandler = () => {
    Axios.post("/api/user/logout").then((res) => {
      if (res.data.success) {
        props.history.push("/login");
      } else {
        console.log("failed in logout");
      }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Typography variant={"h2"}>Welcome!</Typography>

      <button onClick={onLogoutHandler}>Log out</button>
    </div>
  );
}

export default LandingPage;
