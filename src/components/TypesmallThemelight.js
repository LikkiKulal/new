import { useMemo } from "react";
import "./TypesmallThemelight.css";

const TypesmallThemelight = ({
  buttonText,
  buttonText2,
  buttonIdDimensions,
  leadingIcon = true,
  trailingIcon = true,
  ctaTextColor,
}) => {
  const ctaTextStyle = useMemo(() => {
    return {
      color: ctaTextColor,
    };
  }, [ctaTextColor]);

  return (
    <div className="typesmall-themelight">
      {leadingIcon && (
        <img className="icondocument-verified" alt="" src={buttonText} />
      )}
      <div className="cta-text1" style={ctaTextStyle}>
        {buttonText2}
      </div>
      {trailingIcon && (
        <div className="iconchevron2">
          <div className="iconchevron-item" />
          <img className="vector-1-stroke2" alt="" src={buttonIdDimensions} />
        </div>
      )}
    </div>
  );
};

export default TypesmallThemelight;
