
import HomeContainer from "./HomeContainer";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <b className="home">Home</b>
      <HomeContainer
        prop="4"
        ongoingCourses="Ongoing Courses"
        frame402513835="/Frame 402513835.svg"
        propLeft="884px"
      />
      <HomeContainer
        prop="40h"
        ongoingCourses="Watch Time"
        frame402513835="/Frame 402513835 (2).svg"
        propLeft="884px"
      />
      <HomeContainer
        prop="4"
        ongoingCourses="Certificates"
        frame402513835="/Frame 402513835 (1).svg"
        propLeft="1130px"
      />
    </div>
  );
};

export default Dashboard;
