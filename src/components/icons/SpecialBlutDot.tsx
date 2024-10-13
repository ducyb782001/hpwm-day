import React from "react"

function SpecialBlutDot(props) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path transform="rotate(45 9 1.242)" stroke="#0FF" d="M9 1.24226H20V12.24226H9z" />
      <path transform="rotate(45 9 3.363)" fill="#0FF" d="M9 3.36328H17V11.36328H9z" />
    </svg>
  )
}

export default SpecialBlutDot
