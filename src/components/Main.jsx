import React from "react";
import Content from "./Content";

export default function Main() {
  return (
    <div className="main--backround">
      <Content/>
      <svg
            className="divider"
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="322"
            viewBox="0 0 2 322"
            fill="none"
          >
            <path d="M1 0L1.00001 322" stroke="black" stroke-width="1.6" />
          </svg>
    </div>
  );
}
