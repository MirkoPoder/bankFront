import "../visualComponents/ErrorComponents.css";

export function PageNotFound() {
  return (
    <div className="container">
      <div className="py-5 text-center">
        <span>Error! Page not found!</span>
        <br />
        <br />
        <a href="/" className="btn btn-primary btn-sm">
          Back
        </a>
      </div>
    </div>
  );
}
