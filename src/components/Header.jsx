import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="banner">
        <div className="banner__content">
          <div className="container">
            <div className="banner__text">
              <h2>
                Learn to Code. <br></br> Broaden Your Horizons.
              </h2>
            </div>
          <div className="banner__counter">
                <img src="https://prog-8.com/assets/packs/dist/images/users-a679d89a2eda53806fb8..svg" alt="headerimg1" />
                <span className="span">2,100,000</span>
                  <span>users</span>  
              </div>
              <div className="banner__counter__inner">
              <img src="https://prog-8.com/assets/packs/dist/images/countries-8efc3c1c1ec2f954738c..svg" alt="headerimg2" />
              <span>active in</span>
              <span className="span">100+</span>
              <span>countries</span>
              </div>
              <br></br>
            <div className="banner__btn">
              <a>Get started</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
