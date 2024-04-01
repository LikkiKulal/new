import "./AttendanceFormContainer.css";

const AttendanceFormContainer = () => {
  return (
    <div className="rectangle-parent5">
      <div className="frame-child20" />
      <div className="frame-parent15">
        <div className="total-classes-group">
          <div className="total-classes1">{`Total Classes `}</div>
          <div className="till-20-jun3">till 20 Jun 2023</div>
        </div>
        <div className="div30">20</div>
        <img className="plus-icon1" alt="" src="/plus.svg" />
      </div>
      <div className="frame-parent16">
        <div className="classes-attended-group">
          <div className="total-classes1">Classes Attended</div>
          <div className="till-20-jun3">till 20 Jun 2023</div>
        </div>
        <div className="div31">10</div>
        <div className="div32">81%</div>
        <img className="plus-icon1" alt="" src="/tick-square.svg" />
      </div>
      <div className="frame-parent17">
        <div className="classes-attended-group">
          <div className="total-classes1">Classes Missed</div>
          <div className="till-20-jun3">till 20 Jun 2023</div>
        </div>
        <img className="plus-icon1" alt="" src="/danger.svg" />
        <div className="div33">11</div>
        <div className="div34">2%</div>
      </div>
      <div className="attendance1">Attendance</div>
      <div className="input-text-group">
        <div className="input-text1">Filter</div>
        <div className="input-trailing-icon1">
          <div className="input-trailing-icon-item" />
          <img className="vector-1-stroke4" alt="" src="/vector-1-stroke.svg" />
        </div>
      </div>
    </div>
  );
};

export default AttendanceFormContainer;
