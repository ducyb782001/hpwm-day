import Link from "next/link"
import React from "react"

function FbIcon(props) {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.333 16.192c0-7.409-5.969-13.415-13.333-13.415S2.667 8.783 2.667 16.192c0 6.696 4.876 12.246 11.25 13.252v-9.373h-3.386v-3.879h3.386v-2.955c0-3.362 1.99-5.218 5.036-5.218 1.46 0 2.984.261 2.984.261v3.3h-1.68c-1.657 0-2.173 1.035-2.173 2.096v2.516h3.697l-.59 3.878h-3.107v9.374c6.373-1.006 11.25-6.556 11.25-13.252z"
          fill="#f5f5f5"
        />
      </svg>
    </div>
  )
}

export default FbIcon
