import { useMemo } from "react";
import "./Statedefault.css";

const Statedefault = ({
  text = "Status",
  statedefaultPosition,
  statedefaultTop,
  statedefaultLeft,
  statedefaultHeight,
}) => {
  const statedefaultStyle = useMemo(() => {
    return {
      position: statedefaultPosition,
      top: statedefaultTop,
      left: statedefaultLeft,
      height: statedefaultHeight,
    };
  }, [
    statedefaultPosition,
    statedefaultTop,
    statedefaultLeft,
    statedefaultHeight,
  ]);

  return (
    <div className="statedefault" style={statedefaultStyle}>
      <div className="status2">{text}</div>
    </div>
  );
};

export default Statedefault;
