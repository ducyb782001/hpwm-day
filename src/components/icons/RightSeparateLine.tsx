import React from "react"

function RightSeparateLine(props) {
  return (
    <svg
      width={175}
      height={10}
      viewBox="0 0 175 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M153.159.506h5.545l6.819 8.923h-5.546L153.159.506zm1.197 8.923h-58.64L85.667.506h61.872l6.818 8.923zM169.871.506h-5.545l6.818 8.923H175V7.22L169.871.505z"
        fill="#0FF"
      />
      <path d="M.667.506H79.95L90 9.429H8.5L.667.506z" fill="#0FF" fillOpacity={0.5} />
    </svg>
  )
}

export default RightSeparateLine
