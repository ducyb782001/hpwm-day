import Link from "next/link"
import React from "react"

function TwitterIcon(props) {
  return (
    <div className="social-icon">
      <svg
        width={32}
        height={33}
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M5.054 6.111l8.493 11.031L5 26.112h1.924l7.483-7.853 6.046 7.852H27L18.028 14.46l7.956-8.349H24.06l-6.891 7.232L11.6 6.111H5.054zm2.829 1.377h3.007l13.28 17.247h-3.007L7.883 7.488z"
          fill="#f5f5f5"
        />
      </svg>
    </div>
  )
}

export default TwitterIcon
