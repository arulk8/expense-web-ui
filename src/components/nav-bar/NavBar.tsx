import React from "react";
import { FaBars } from "react-icons/fa6";
import { SiMoneygram } from "react-icons/si";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <SiMoneygram
          color="white"
          size={"2.5rem"}
          className="navbar-brand logo"
        />
        <div className="collapse navbar-collapse" id="navbarNavMobile">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
          </div>
        </div>
        <form className="d-flex" role="search">
          <button className="btn btn-sm btn-outline-light mx-1" type="submit">
            Login
          </button>
          <button className="btn btn-sm btn-outline-light mx-1" type="submit">
            Logout
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavMobile"
            aria-controls="navbarNavMobile"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars color="white" />
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
