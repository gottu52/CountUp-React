import React from "react";

export const ColofulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontsize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

// export default ColofulMessage;
