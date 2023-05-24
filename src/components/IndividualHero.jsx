import React from 'react';

export default function IndividualHero() {
  return (
    <div>
      <div className="container MTOP">
        <div className="row">
          <div className="col-md-5 hero-2">
            <h1>
              The genius way <br />
              to work <span>better</span>
            </h1>
            <p>
              Calendly makes it easy to work smarter when <br />
              you’re working solo. Meetings, sessions, and <br />
              appointments become more efficient ways to <br />
              achieve success and accomplish goals.
            </p>
            <button type="button" className="btn btn-dark">
              Sign Up For Free
            </button>
          </div>
          <div className="col-md-5">
            <img src="images/Pic-2.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
