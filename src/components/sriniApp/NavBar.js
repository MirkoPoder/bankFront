import React from "react";

function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div>
          <a href="https://srini.ee" className="navbar-brand font-weight-bold">
            SRINI
          </a>
        </div>
        <ul className="navbar-nav">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/clients" className="nav-link">Clients</a></li>
          <li><a href="/addclient" className="nav-link">Add clients</a></li>
        </ul>
        <ul className="navbar-nav navbar-collapse justify-content-end">
          <li><a href="/logout" className="nav-link">Log out</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
