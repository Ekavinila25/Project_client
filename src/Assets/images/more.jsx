import React from "react";

function More(width, height, color) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      style={{fill: `${color}`}}
      viewBox="0 0 32 32"
    >
      <path d="M16 10.667a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334zM18.667 16a2.667 2.667 0 11-5.334 0 2.667 2.667 0 015.334 0zm0 8a2.667 2.667 0 11-5.334 0 2.667 2.667 0 015.334 0z"></path>
    </svg>
  );
}

export default More;
