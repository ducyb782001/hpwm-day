import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faArrowPointer, faHeart } from "@fortawesome/free-solid-svg-icons"
import CardPopup from "./Home/CardPopup"

function Home() {
  const [isOpenCardPopup, setIsOpenCardPopup] = useState(false)

  return (
    <div className="wrapper">
      <div className="flag__birthday">
        <img src="./images/1.png" alt="" width="350" className="flag__left" />
        <img src="./images/1.png" alt="" width="350" className="flag__right" />
      </div>
      <div className="flex flex-col items-center justify-between px-4 height-content md:flex-row md:px-8">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="title">
            <h1 className="happy">
              <span>Happ</span>
              <div className="relative">
                y
                <div className="absolute top-[-42px] md:top-[-30px] right-[-80px] w-[120px] z-[-1]">
                  <img src="./images/hat.png" alt="" className="w-full" />
                </div>
              </div>
            </h1>
            <h1 className="birthday">
              <div className="text-center">Women's Day</div>
            </h1>
          </div>
          <div className="mt-6 hidden md:flex items-center justify-between bg-textPink gap-10 border-[3px] border-black md:min-w-[200px] w-full md:w-fit rounded-full px-4 py-2">
            <FontAwesomeIcon icon={faStar} />
            <div className="text-xl font-bold font-sriracha">20/10/2024</div>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="relative flex flex-col items-center justify-center w-full mt-8 md:hidden">
            <img
              src="/images/pam.png"
              alt="avatar"
              className="w-[222px] h-[222px] object-cover rounded-full border-black border-[3px]"
            />
            <div className="flex items-center justify-between bg-textPink gap-6 border-[3px] border-black md:min-w-[200px] w-fit rounded-full px-6 py-2 mt-2">
              <FontAwesomeIcon icon={faHeart} />
              <div className="text-2xl font-bold font-sriracha whitespace-nowrap">
                Nguyễn Văn Mon
              </div>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={() => {
                setIsOpenCardPopup(true)
              }}
              className="text-xl font-bold font-sriracha flex items-center justify-between bg-textPink gap-4 border-[2px] border-black rounded-full px-4 py-2 hover:bg-[#ff5a65] hover:border-[#ff5a6592] active:bg-[#ff5a6592] smooth-transform"
            >
              Nhấn vô đây nè
              <FontAwesomeIcon icon={faArrowPointer} />
            </button>
          </div>
        </div>
        <div className="relative items-center justify-center hidden w-full md:flex">
          <img
            src="/images/pam.png"
            alt="avatar"
            className="w-[372px] h-[372px] object-cover rounded-full border-black border-[3px]"
          />
          <div className="absolute left-[20%] bottom-0 flex items-center justify-between bg-textPink gap-6 border-[3px] border-black md:min-w-[200px] w-full md:w-fit rounded-full px-6 py-2">
            <FontAwesomeIcon icon={faHeart} />
            <div className="text-2xl font-bold font-sriracha whitespace-nowrap">Nguyễn Văn Mon</div>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
      <CardPopup showDialog={isOpenCardPopup} setShowDialog={setIsOpenCardPopup} />
      <div className="decorate_flower--one">
        <img width="20" src="./images/decorate_flower.png" alt="" />
      </div>
      <div className="decorate_flower--two">
        <img width="20" src="./images/decorate_flower.png" alt="" />
      </div>
      <div className="decorate_flower--three">
        <img width="20" src="./images/decorate_flower.png" alt="" />
      </div>
      <div className="decorate_star star1"></div>
      <div className="decorate_star star2"></div>
      <div className="decorate_star star3"></div>
      <div className="decorate_star star4"></div>
      <div className="decorate_star star5"></div>

      <div className="decorate_bottom">
        <img src="./images/decorate.png" alt="" width="100" />
      </div>
      <div className="smiley__icon">
        <img src="./images/smiley_icon.png" alt="" width="100" />
      </div>
    </div>
  )
}

export default Home
