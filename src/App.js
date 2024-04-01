import React, { useEffect } from 'react';
import AssignmentContainer from './components/AssignmentContainer';
import AttendanceFormContainer from './components/AttendanceFormContainer';
import ContainerBox from './components/ContainerBox';
import ContainerSeptember from './components/ContainerSeptember';
import ContainerWithTypesInside from './components/ContainerWithTypesInside';
import Dashboard from './components/Dashboard';
import HomeContainer from './components/HomeContainer';
import LMSHeader from './components/LMSHeader';
import OngoingCoursesContainer from './components/OngoingCoursesContainer';
import './App.css'

function App() {

  useEffect(() => {
    const applyStylesFor1440x1080 = () => {
      const header = document.querySelector('.App-header');
      if (header) {
        header.style.fontSize = 'calc(8px + 2vmin)';
      }
    };

    const applyStylesFor1280x780 = () => {
      const header = document.querySelector('.App-header');
      if (header) {
        header.style.fontSize = 'calc(6px + 2vmin)';
      }
    };

    const handleResolutionChange = () => {
      if (window.matchMedia("(max-width: 1440px) and (max-height: 1080px)").matches) {
        applyStylesFor1440x1080();
      } else if (window.matchMedia("(max-width: 1280px) and (max-height: 780px)").matches) {
        applyStylesFor1280x780();
      }
    };

    handleResolutionChange();
    window.addEventListener('resize', handleResolutionChange);

    return () => {
      window.removeEventListener('resize', handleResolutionChange);
    };
  }, []);

  return (
    <div className="App">
      {/* Render your components here */}
      <AssignmentContainer />
      <AttendanceFormContainer />
      <ContainerBox />
      <ContainerSeptember />
      <ContainerWithTypesInside />
      <Dashboard />
      <HomeContainer />
      <LMSHeader />
      <OngoingCoursesContainer />
    </div>
  );
}

export default App;
