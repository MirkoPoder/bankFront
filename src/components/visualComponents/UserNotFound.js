import "../visualComponents/ErrorComponents.css";

export function UserNotFound() {
  return (
    <div className="container">
      <div className="py-5 text-center">
        <span>Error! Incorrect username or password!</span>
        {sessionStorage.removeItem("username")}
        <br />
        <br />
        <a href="/" className="btn btn-primary btn-sm">
          Back
        </a>
      </div>
    </div>
  );
}
