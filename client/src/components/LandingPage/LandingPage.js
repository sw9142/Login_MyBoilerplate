import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../_actions/user_action";
import { Typography, Button } from "@material-ui/core";

function LandingPage(props) {
  const Dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  console.log("user in landing page: ", user);
  const [Login, setLogin] = useState(user.loginSuccess);

  const onLogoutHandler = () => {
    Dispatch(userLogout()).then((res) => {
      if (res.payload.success) {
        props.history.push("/login");
      } else {
      }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div style={{ margin: "1rem" }}>
        <Typography variant={"h2"}>Welcome!</Typography>
      </div>
      {Login && (
        <Button onClick={onLogoutHandler} variant="outlined" color="primary">
          Log out
        </Button>
      )}
    </div>
  );
}

export default LandingPage;
