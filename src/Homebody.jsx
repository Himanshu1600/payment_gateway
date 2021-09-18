import React from "react";
import "./Homebody.css";
import TypewriterComponent from "typewriter-effect";

function Homebody() {
  return (
    <div className="home-body">
      <img
        src="https://www.theindianwire.com/wp-content/uploads/2019/12/Gujarat-asks-for-Rent-Agreement-from-EWS-parents.jpg"
        alt="loading"
      />
      <div className="dynamic-container">
        <ul className="dynamic-text">
          <TypewriterComponent
            options={{
              strings: [
                "GIVE A HAND TO MAKE A BETTER WORLD",
                "YOUR FIRST STEP CAN CHANGE THE LIFE OF A CHILD",
                "ITS TIME TO STAND WITH POOR PEOPLE",
                "LITTLE THINGS SUDDENLY HAVE SHOWN A MORE SIGNIFICANT CHANGE",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 3,
              delay: 20,
            }}
          />
        </ul>
      </div>
      <div className="button_container">
        <a target="_blank" rel="noreferrer" href="https://rzp.io/l/S3KnZwjYO">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Donate
        </a>
      </div>
    </div>
  );
}

export default Homebody;
