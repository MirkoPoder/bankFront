function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div>
          <a href="https://www.google.com" className="navbar-brand font-weight-bold">
            Company
          </a>
        </div>
        <ul className="navbar-nav">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/accounts" className="nav-link">Accounts</a></li>
          <li><a href="/createaccount" className="nav-link">Create account</a></li>
        </ul>
        <ul className="navbar-nav navbar-collapse justify-content-end">
          <li><a href="/logout" className="nav-link">Log out</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
