import React from "react";

function Sort(width=32, height=32, color='black') {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      style={{fill: `${color}`}}
      viewBox="0 0 32 32"
    >
      <path d="M7.467 22.253l-2.76-2.76a.999.999 0 10-1.414 1.414l4.467 4.467a1 1 0 001.414 0l4.467-4.467a.999.999 0 10-1.414-1.414l-2.76 2.759V7.999a1 1 0 00-2 0v14.253zm8.866-12.92a1 1 0 011-1H28a1 1 0 010 2H17.333a1 1 0 01-1-1zm0 6.667a1 1 0 011-1H24a1 1 0 010 2h-6.667a1 1 0 01-1-1zm1 5.667a1 1 0 000 2H20a1 1 0 000-2h-2.667z"></path>
    </svg>
  );
}

export default Sort;
