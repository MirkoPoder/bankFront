import '../someComponents/ErrorComponents.css'

export function PageNotFound() {
  return (
    <div className="container">
      {" "}
      <div className="py-5 text-center">
        <span>Viga! Lehekülge ei leitud!</span>
        <br />
        <br />
        <a href="/" className="btn btn-primary">TAGASI</a>
      </div>
    </div>
  );
}
