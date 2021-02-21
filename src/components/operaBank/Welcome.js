import React from "react";

function Welcome() {
  return (
    <div className="py-2">
      <h2>Welcome {sessionStorage.getItem("username")}!</h2>
    </div>
  );
}

export default Welcome;
