import React from "react";
import Illustrative from '../images/Illustrative.jpg';

const IllustrativeSlides = () => {
  return (
    <div className="illustrative">
      <div className="illustrative__content">
        <div className="illustrative__text">
          <h3>Illustrative Slides</h3>
          <p>
            Each lesson contains slides that are designed to enhance your
            learning experience<br></br>
            by creating a visual representation of the concepts in action.
          </p>
        </div>
        <div className="illustrative__img">
          <img src={Illustrative} alt="illustrative" />
      </div>
      </div>
    </div>
  );
};

export default IllustrativeSlides;
