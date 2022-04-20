import React from "react";

function Close(width, height, color) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      style={{fill: `${color}`}}
      viewBox="0 0 32 32"
    >
      <path d="M10.107 8.693a.999.999 0 10-1.414 1.414L14.586 16l-5.893 5.893a.999.999 0 101.414 1.414L16 17.414l5.893 5.893a.999.999 0 101.414-1.414L17.414 16l5.893-5.893a.999.999 0 10-1.414-1.414L16 14.586l-5.893-5.893z"></path>
    </svg>
  );
}

export default Close;
