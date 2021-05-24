import React from "react";
import journey from '../images/journey.jpg';

const Journey = () => {
  return (
    <div className="journey">
      <div className="journey__text">
        <h2>
          Embark on a journey <br></br>from beginner to creator
        </h2>
      </div>
      <div className="journey__img">
          <img src={journey} alt="journey" />
      </div>
    </div>
  );
};

export default Journey;
