import React from 'react';

export default function Navbar() {
  return (
    <div>
      <ul className="nav-item dropdown dropdown-top">
        <a className="nav-link dropdown-toggle" role="button" href='/' data-bs-toggle="dropdown" aria-expanded="false">
          English
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href='/'>French</a></li>
          <li><a className="dropdown-item" href='/'>Spanish</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href='/'>Afrikaans</a></li>
        </ul>
      </ul>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container bar">
          <a className="navbar-brand" href="/">
            <img src="images/Logo.png" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav addMag mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="individual">Individuals</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="team">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="enterprise">Enterprise</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
