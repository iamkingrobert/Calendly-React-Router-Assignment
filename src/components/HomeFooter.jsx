import React from 'react';

export default function HomeFooter() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 use">
            <h3 className="text-center">
              Simplified scheduling for more than <span>10,000,000</span> users <br /> worldwide
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 d-flex offset-md-1">
            <img src="Images/ebay.png" alt="" />
            <img src="Images/ebay.png" alt="" />
            <img src="Images/ebay.png" alt="" />
            <img src="Images/ebay.png" alt="" />
            <img src="Images/ebay.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container addnew">
        <div className="row">
          <div className="col-md-10 d-flex offset-md-1 MGRight">
            <div>
              <span className="badge text-bg-primary">1</span>
              <h5>Create <br />Simple Rules</h5>
              <p>Let Calendly know your <br /> availability preferences and <br /> it'll do the work for you</p>
            </div>
            <div>
              <span className="badge text-bg-primary">2</span>
              <h5>Share <br />Your Link</h5>
              <p>Send guests your Calendly <br />link or embed it on your <br />website</p>
            </div>
            <div>
              <span className="badge text-bg-primary">3</span>
              <h5>Get Booked</h5>
              <p>They pick a time and the <br />event is added to your <br />Calendly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
