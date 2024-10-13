import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Typed from "react-typed"
import AOS from "aos"
import Carousel from "react-multi-carousel"

const listSubMenu = [
  { id: "trending", label: "Trending" },
  { id: "top", label: "Top" },
]

const tabs = [
  { id: "world", label: "World" },
  { id: "ny", label: "N.Y." },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" },
]

function Test() {
  let [activeTab, setActiveTab] = useState(tabs[0].id)
  // const [activeTab, setActiveTab] = useState<string>("trending")
  const [stateOne, setStateOne] = useState(false)

  useEffect(() => {
    AOS.init({
      // easing: "ease-out-cubic",
      // offset: 100,
      duration: 500,
    })
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="mb-10 overflow-hidden bg-white">
      <SubMenu setActiveTab={setActiveTab} activeTab={activeTab} listMenu={listSubMenu} />
      <motion.div
        className="w-[20px] h-[20px] bg-red-500"
        animate={{ x: activeTab === "trending" ? 30 : 160 }}
      />
      <button
        onClick={() => {
          setStateOne(!stateOne)
        }}
      >
        Click
      </button>
      {activeTab === "top" && (
        <AnimatePresence>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Top top
          </motion.div>
        </AnimatePresence>
      )}
      {activeTab === "trending" && (
        <AnimatePresence>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Trending top
          </motion.div>
        </AnimatePresence>
      )}
      <div className="scroll">
        <div className="m-scroll">
          <span>Game in ecosystem&nbsp;&nbsp;</span>
          <span>Game in ecosystem&nbsp;&nbsp;</span>
        </div>
      </div>
      <div>ABCD</div>
      <Typed
        className="text-red-500"
        strings={[
          "I'm a Full Stack Developer",
          "I Love Software Development",
          "I Love All My Subscribers",
        ]}
        typeSpeed={150}
        backSpeed={100}
        loop
      />
      <AnimatePresence>
        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
          }}
          className="bg-black w-fit rounded-xl"
        >
          <img src="/images/dgg_network_big.svg" alt="dgg-img" />
        </motion.div>
      </AnimatePresence>
      <div className="mt-10">ABCd</div>
      <div className="flex bg-gray">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/60"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white rounded-full mix-blend-difference"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {activeTab === tab.id && (
              <motion.span
                layoutId="text"
                className="absolute top-[32px] left-[42%] text-blue"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              >
                A
              </motion.span>
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-black">
        <div className="bg-gradient-to-b from-[#01061300] to-[#013452]">
          <AnimatePresence mode="wait">
            {activeTab === "world" && (
              <motion.div
                key="world"
                data-aos="fade-left"
                data-aos-delay="100"
                className="flex justify-center mt-8"
              >
                <img src="/images/meow.png" alt="dgg-img" className="max-w-[740px]" />
              </motion.div>
            )}
            {activeTab === "ny" && (
              <motion.div
                data-aos="fade-right"
                data-aos-delay="100"
                className="flex justify-center mt-8"
              >
                <img src="/images/plant.png" alt="dgg-img" className="max-w-[740px]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="h-[100px]" data-aos="fade-up" data-aos-delay="100">
        Carousel down
      </div>
      <div>
        <Carousel
          className="w-full"
          responsive={responsiveCarouselNft}
          containerClass="w-full"
          partialVisbile={true}
        >
          <div className="bg-blue">
            <img src="/images/meow.png" alt="dgg-img" className="max-w-[600px]" />
          </div>
          <div className="bg-red-500">
            <img src="/images/plant.png" alt="dgg-img" className="max-w-[600px]" />
          </div>
          <div className="bg-blue">
            <img src="/images/meow.png" alt="dgg-img" className="max-w-[600px]" />
          </div>
          <div className="bg-red-500">
            <img src="/images/plant.png" alt="dgg-img" className="max-w-[600px]" />
          </div>
        </Carousel>
      </div>
      <div className="pb-10 mt-10 bg-black">
        <AnimatePresence>
          <motion.div
            animate={{
              y: [0, 30, 0],
            }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity,
            }}
            className="bg-black w-fit rounded-xl"
          >
            <div className="relative w-[243px]">
              <motion.div
                className=""
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <img src="/images/circle-partner.png" alt="cirlce" className="w-full" />
              </motion.div>
              <img
                src="/images/sui-icon.png"
                alt="sui-dgg"
                className="w-[92px] absolute top-[25%] m-auto left-0 right-0"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function SubMenu({ setActiveTab, activeTab, listMenu, className = "" }) {
  return (
    <div className={`flex md:min-h-[60px] items-baseline gap-4 md:gap-16 ${className}`}>
      {listMenu?.map((i) => (
        <TabItem setActiveTab={setActiveTab} key={i?.id} activeTab={activeTab} subMenuItem={i} />
      ))}
    </div>
  )
}

function TabItem({ setActiveTab, activeTab, subMenuItem }) {
  const handleClickItem = () => {
    setActiveTab(subMenuItem?.id)
  }
  return (
    <div
      onClick={handleClickItem}
      className={`cursor-pointer smooth-transform hover:text-blue ${
        subMenuItem?.id === activeTab
          ? "text-xl md:text-xl text-blue"
          : "text-xl md:text-xl text-gray"
      }`}
    >
      {subMenuItem.label}
    </div>
  )
}

export default Test

const responsiveCarouselNft = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}
