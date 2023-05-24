import React from 'react';

export default function IndividualBodyTwo() {
  return (
    <div>
      <div className="container-fluid MTOP bg">
        <div className="row">
          <div className="col-md-5 hero-3">
            <span className="sty-4">A CURATED CALENDAR <br /><br /></span>
            <p className="sty-5">Book up efficiently</p>
            <p className="sty-3">When invitees select a meeting slot from your schedule, they only see the times you’re available, and only the length and type of meeting you want to have. Your schedule fills up efficiently, and everyone avoids excess email exchanges.</p>
            <button type="button" className="btn btn-link">Learn More</button>
          </div>
          <div className="col-md-5 hero-3-img">
            <img src="images/Pic-5.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container-fluid advert">
        <div className="row">
          <div className="col-md-12">
            <img src="images/Calendly_CTA_bg__1_.png" alt="" className="img-fluid image" />
            <h1 className="text-center text">Find just-right plans for <br />individuals and small teams</h1>
            <button type="button" className="btn btn-primary">See Our Plans</button>
          </div>
        </div>
      </div>
    </div>
  );
}
