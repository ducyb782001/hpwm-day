import React from "react"

function LeftSeparateLine(props) {
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
        d="M22.361.512h-5.545L9.997 9.435h5.546L22.36.512zm-1.197 8.923h58.64L89.854.512H27.983l-6.819 8.923zM5.65.512h5.545L4.377 9.435H.52v-2.21L5.65.511z"
        fill="#0FF"
      />
      <path d="M174.854.512H95.57L85.52 9.435h81.5l7.834-8.923z" fill="#0FF" fillOpacity={0.5} />
    </svg>
  )
}

export default LeftSeparateLine
