import React from "react";

function Add(width, height, color='white') {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      style={{fill: `${color}`}}
    >
      <path d="M17 6.667a1 1 0 00-2 0V15H6.667a1 1 0 000 2H15v8.333a1 1 0 002 0V17h8.333a1 1 0 000-2H17V6.667z"></path>
    </svg>
  );
}

export default Add;
