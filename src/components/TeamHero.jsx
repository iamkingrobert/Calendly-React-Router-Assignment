import React from 'react';

export default function TeamHero() {
  return (
    <div>
      <div className="container MTOP">
        <div className="row">
          <div className="col-md-5 hero-2">
            <h1><span>Power up </span>your<br /> teams</h1>
            <p>Whether your team’s performance is measured by<br /> sales revenue, recruiting pipeline, or customer<br /> retention, scheduling automation enables your<br /> team to hit goals faster.</p>
            <div className="but d-flex">
              <button type="button" className="btn btn-outline-primary">Start For Free</button>
              <button type="button" className="btn btn-light but-mag">Contact Sales</button>
            </div>
          </div>
          <div className="col-md-5">
            <img src="images/Pic-6.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 use">
            <h3 className="text-center">Streamline tasks, extend <span>team</span> <br /> reach</h3>
          </div>
        </div>
      </div>
      <div className="container d-flex MTOP newjust">
        <div className="row">
          <div className="adimg">
            <img src="images/Pic-7.png" alt="" className="img-fluid" />
          </div>
        </div>
        <div className="ad great-day">
          <p className="sty-1">SPEED OF CONNECTION</p>
          <h5 className="sty">Outperform the competition <br /> with faster connections</h5>
          <p className="sty-3">You can’t waste time when prospects, clients, and<br /> candidates express interest. Avoid missed opportunities<br /> by automatically qualifying and routing website visitors<br /> to specific team members. You can also pool scheduling<br /> availability together to offer more options to connect.</p>
        </div>
      </div>
    </div>
  );
}
