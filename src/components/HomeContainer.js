
import React from "react";
import "./HomeContainer.css";

const HomeContainer = ({ prop, ongoingCourses, frame402513835, propLeft }) => {
  return (
    <div className="home-container">
      <div className="frame-parent13" style={{ left: propLeft }}>
        <div className="parent8">
          <div className="div28">{prop}</div>
          <div className="ongoing-courses2">{ongoingCourses}</div>
        </div>
        <img className="frame-child18" alt="" src={frame402513835} />
      </div>
    </div>
  );
};

export default HomeContainer;
