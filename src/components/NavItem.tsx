export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#">
              HOME
              </a>
              <a className="nav-link" href="#">
              ABOUT
              </a>
              <a className="nav-link" href="#">
              GOVERNMENT
              </a>
              <a className="nav-link" href="#">
              CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
