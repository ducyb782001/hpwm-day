import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"

function MainNav() {
  return (
    <div
      className={`sticky top-0 z-10 flex shadow-md justify-between px-4 md:px-10 items-center w-full bg-background`}
    >
      <div className="flex items-stretch gap-10">
        <Link href="/">
          <a className="py-5">
            <img className="h-10 cursor-pointer" src="/logo.png" alt="logo" />
          </a>
        </Link>

        <div className="items-center hidden gap-3 md:flex">
          <Item href="/">Home</Item>
          <Item href="about-us">About us</Item>
          <Item href="games">Games</Item>
          <Item href="ecosystem">Ecosystem</Item>
          <Item href="partners">Partners</Item>
          <div className="bg-white h-5 w-[1px] rounded-full" />
          <Item href="news">News</Item>
          <Item href="white-paper">Whitepaper</Item>
        </div>
      </div>

      <div className="flex items-center md:hidden">
        <div className="ml-3 md:hidden">
          {/* <MobileNav /> */}
          Mobile Nav
        </div>
      </div>
    </div>
  )
}

export default MainNav

function Item({ children, href }) {
  const router = useRouter()
  const isActive = router.asPath === href

  const handleClickScroll = (href) => {
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      onClick={() => handleClickScroll(href)}
      className={`${
        !isActive ? "border-transparent" : "border-primary bg-[#AAAAAA15]"
      } text-white hover:border-primary hover: hover:bg-[#AAAAAA15] border-b-2 flex items-center py-[27px] cursor-pointer smooth-transform px-2`}
    >
      {children}
    </div>
  )
}
