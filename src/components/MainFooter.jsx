import React from 'react';

export default function MainFooter() {
  return (
    <div>
      <footer className="buttomMag">
        <div className="container">
          <div className="row">
            <div className="col-md-4 foot-item brnd">
              <h3>Easy <br /><span>ahead</span></h3>
              <p>We take the work out of connecting with others so you can accomplish more.</p>
              <ul className="nav">
                <li className="nav-item dropdown list">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    English
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">French</a></li>
                    <li><a className="dropdown-item" href="/">Spanish</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/">Afrikaans</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-md-2 foot-item">
              <ul className="foot-nav">
                <h5>About</h5>
                <li><a href="/">About Calendly</a></li>
                <li><a href="/">Our Developers</a></li>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">News Room</a></li>
                <li><a href="/">Calendly Careers</a></li>
              </ul>
            </div>
            <div className="col-md-2 foot-item">
              <ul className="foot-nav">
                <h5>Solutions</h5>
                <li><a href="/">Sales</a></li>
                <li><a href="/">Customer Success</a></li>
                <li><a href="/">Education</a></li>
                <li><a href="/">Recruiting</a></li>
                <li><a href="/">Marketing</a></li>
              </ul>
            </div>
            <div className="col-md-2 foot-item">
              <ul className="foot-nav">
                <h5>Features</h5>
                <li><a href="/">Embed Calendly</a></li>
                <li><a href="/">Availability</a></li>
                <li><a href="/">Sending Notifications</a></li>
                <li><a href="/">Calendly Mobile</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
