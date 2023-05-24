import React from 'react';
import MainFooter from './MainFooter'

export default function Enterprise() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-12 use">
              <h2 className="text-center"><span>Way more</span> than a <br />scheduling link</h2>
              <p className="text-center">Standardize on the #1 scheduling platform and <br />deliver the power of Calendly across your entire <br />organization </p>
              <button type="button" className="btn btn-dark btncen">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid advert-2">
        <div className="row">
          <div className="col-md-12">
            <img src="Images/Calendly_CTA_bg__1_.png" alt="" className="img-fluid image-2" />
            <h1 className="text-center text-2">Trusted by more than 50,000 of the<br />world's leading organizations</h1>
            <div className="logos d-flex">
              <img src="images/ebay.png" alt="eBay" />
              <img src="images/ebay.png" alt="eBay" />
              <img src="images/ebay.png" alt="eBay" />
              <img src="images/ebay.png" alt="eBay" />
              <img src="images/ebay.png" alt="eBay" />
            </div>
          </div>
        </div>
      </div>
      <div className="container invincible">
        <div className="row">
          <div className="col-md-2 smile1">
            <p className="phead">Sales</p>
            <img src="images/Pic-12.png" alt="Sales" />
            <p>Convert more leads and <br /> prospects into meetings <br /> and revenue. Easily book<br /> demos and Customer calls<br /> without the back and forth.</p>
          </div>
          <div className="col-md-2 offset-md-1 smile">
            <p className="phead">Customer Success</p>
            <img src="images/Pic-13.png" alt="Customer Success" />
            <p>Convert more leads and <br /> prospects into meetings <br /> and revenue. Easily book<br /> demos and Customer calls<br /> without the back and forth.</p>
          </div>
          <div className="col-md-2 offset-md-1 smile">
            <p className="phead">Recruiting</p>
            <img src="images/Pic-14.png" alt="Recruiting" />
            <p>Convert more leads and <br /> prospects into meetings <br /> and revenue. Easily book<br /> demos and Customer calls<br /> without the back and forth.</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="but-2">
              <button type="button" className="btn btn-dark btncen2">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <MainFooter/>
    </div>
  );
}
