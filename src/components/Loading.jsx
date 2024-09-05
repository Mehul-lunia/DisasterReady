import React from "react";

function Loading() {
  return (
    <>
      <svg
        version="1.1"
        id="L9"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 0 0"
        width="100px"
        height="100px"
      >
        <path
          fill="#4CAF50"
          d="M73.2,50c0-12.8-10.4-23.2-23.2-23.2S26.8,37.2,26.8,50H17c0-18.2,14.8-33,33-33s33,14.8,33,33H73.2z"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </>
  );
}

export default Loading;
