import React from 'react';
import './LMSHeader.css';

const LMSHeader = ({ headerPosition, headerTop, headerLeft, communityShadow }) => {
  const headerStyle = {
    position: headerPosition,
    top: headerTop,
    left: headerLeft,
  };

  const communityStyle = {
    textShadow: communityShadow, 
  };

  return (
    <div className="lms-header" style={headerStyle}>
      <nav className="header-nav">
        <div className="nav-item community-item" style={communityStyle}>Community</div> 
        <div className="nav-item">Courses</div>
        <div className="nav-item">My Classes</div>
        <div className="nav-icons">
          <img src={process.env.PUBLIC_URL + '/Frame 402513822 (2).svg'} className="nav-icon" alt="Search" />
        </div>
        <img src={process.env.PUBLIC_URL + '/Frame 402513824 (2).svg'} className="menu-toggle" alt="Menu Toggle" />
      </nav>
    </div>
  );
};

export default LMSHeader;
