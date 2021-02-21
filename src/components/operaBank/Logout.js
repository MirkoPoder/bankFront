import React from "react";

function Logout() {
  return (
    <>
      <div className="container text-center py-4">
        <h2>You are now logged out!</h2>
        {sessionStorage.removeItem('username')}
      </div>
    </>
  );
}

export default Logout;
