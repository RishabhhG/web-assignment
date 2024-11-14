import React from 'react';

function SmallBanknoteIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Banknote Rectangle with Rounded Corners */}
      <rect
        x="10"
        y="20"
        width="44"
        height="24"
        rx="4"
        ry="4"
        stroke="#000"
        strokeWidth="2"
        fill="#000"
        fillOpacity="0.05"
      />
      
      {/* Inner Circle in Banknote */}
      <circle
        cx="32"
        cy="32"
        r="6"
        stroke="#000"
        strokeWidth="2"
        fill="white"
      />

      {/* Star Symbol inside the Circle */}
      <text
        x="30.5"
        y="34"
        fontSize="6"
        fill="#000"
        fontWeight="bold"
      >
        ★
      </text>

      {/* Badge Circle */}
      <circle
        cx="46"
        cy="44"
        r="6"
        fill="#000"
        stroke="#000"
        strokeWidth="1.5"
      />

      {/* Check Mark in Badge */}
      <path
        d="M44.5 44.5l1.5 1.5 2.5-2.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SmallBanknoteIcon;
