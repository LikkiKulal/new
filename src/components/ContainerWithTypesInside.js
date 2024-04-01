import TypesmallThemelight from "./TypesmallThemelight";
import "./ContainerWithTypesInside.css";

const ContainerWithTypesInside = () => {
  return (
    <div className="frame-parent11">
      <div className="ellipse-group">
        <div className="ellipse-div" />
        <div className="kalyani-khona-group">
          <div className="kalyani-khona1">Kalyani Khona</div>
          <TypesmallThemelight
            buttonText="/icondocumentverified@2x.png"
            buttonText2="View Profile"
            buttonIdDimensions="/vector-1-stroke.svg"
            leadingIcon={false}
            trailingIcon
            ctaTextColor="#8c8c8c"
          />
        </div>
      </div>
      <div className="frame-parent12">
        <div className="frame-wrapper4">
          <div className="home-group">
            <img className="home-icon1" alt="" src="/home.svg" />
            <div className="home3">Home</div>
          </div>
        </div>
        <div className="frame-wrapper5">
          <div className="home-group">
            <img className="home-icon1" alt="" src="/messagecircle.svg" />
            <div className="home3">Messages</div>
          </div>
        </div>
        <div className="frame-wrapper6">
          <div className="home-group">
            <img className="home-icon1" alt="" src="/filetext.svg" />
            <div className="home3">E-Library</div>
          </div>
        </div>
        <div className="frame-wrapper6">
          <div className="home-group">
            <img className="home-icon1" alt="" src="/calendar.svg" />
            <div className="home3">Calendar</div>
          </div>
        </div>
        <div className="frame-wrapper6">
          <div className="home-group">
            <img className="home-icon1" alt="" src="/calendar.svg" />
            <div className="home3">{`Settings `}</div>
          </div>
        </div>
        <div className="frame-wrapper6">
          <div className="home-group">
            <img className="home-icon1" alt="" src="/calendar.svg" />
            <div className="home3">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerWithTypesInside;
