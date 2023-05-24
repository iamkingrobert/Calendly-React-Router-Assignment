import React from 'react';

export default function HomeHero() {
  return (
    <div>
      <div className="container MTOP">
        <div className="row">
          <div className="col-md-5 hero">
            <h1>
              Easy <br />
              scheduling <br />
              <span>ahead</span>
            </h1>
            <p>
              Calendly is your scheduling automation platform for eliminating the back-and-forth emails for finding
              <br />
              the perfect time — and so much more.
            </p>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Enter your email" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Sign Up
              </button>
            </form>
            <p>Create your free account. No credit card required.</p>
          </div>
          <div className="col-md-6">
            <img src="images/Pic-1.png" alt="" className="img-fluid IMG-mag" />
          </div>
        </div>
      </div>
    </div>
  );
}
