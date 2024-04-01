import TypeprimaryStateactiveSi from "./TypeprimaryStateactiveSi";
import Statedefault from "./Statedefault";
import "./OngoingCoursesContainer.css";

const OngoingCoursesContainer = () => {
  return (
    <div className="ongoing-courses-group">
      <div className="ongoing-courses3">Ongoing Courses</div>
      <div className="image-bg-group">
        <div className="image-bg1" />
        <div className="hour-teacher-training1">900 Hour Teacher Training</div>
        <TypeprimaryStateactiveSi
          buttonText="Continue"
          leadingIcon={false}
          trailingIcon={false}
          typeprimaryStateactiveSiWidth="130px"
          typeprimaryStateactiveSiBorderRadius="4px"
          typeprimaryStateactiveSiBackgroundColor="unset"
          typeprimaryStateactiveSiHeight="40px"
          typeprimaryStateactiveSiPosition="absolute"
          typeprimaryStateactiveSiTop="240px"
          typeprimaryStateactiveSiLeft="438px"
          typeprimaryStateactiveSiBackground="linear-gradient(92.65deg, #ff5a56, #ff2171 54.17%, #fc6549), #ff5a56"
        />
        <div className="frame-child19" />
        <div className="completed-group">
          <div className="completed2">25% Completed</div>
          <div className="rectangle-parent4">
            <div className="group-child4" />
            <div className="group-child5" />
          </div>
        </div>
        <div className="next-class-due1">Next Class due on 23 June 2023</div>
        <div className="lessons-11-week1">
          <div className="week2">
            <img className="icon2" alt="" src="/icon.svg" />
            <div className="week3">12 Week</div>
          </div>
          <div className="lessons2">
            <div className="lessons3">35 Lessons</div>
            <img className="icon3" alt="" src="/Icon (1).svg" />
          </div>
        </div>
        <Statedefault
          text="hybrid"
          statedefaultPosition="absolute"
          statedefaultTop="104px"
          statedefaultLeft="441px"
          statedefaultHeight="18px"
        />
      </div>
      <div className="iconchevron3">
        <div className="iconchevron-inner" />
        <img className="iconchevron" alt="" src="/chevron.svg" />
      </div>
      <img className="iconchevron4" alt="" src="/iconchevron@2x.png" />
    </div>
  );
};

export default OngoingCoursesContainer;
