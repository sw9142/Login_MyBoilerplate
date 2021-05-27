import React from "react";
import Axios from "axios";

function LandingPage() {
  const onLogoutHandler = () => {
    Axios.post("/api/user/logout").then((res) => {
      if (res.data.success) {
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
      <h2>Welcome!</h2>

      <button onClick={onLogoutHandler}>Log out</button>
    </div>
  );
}

export default LandingPage;
