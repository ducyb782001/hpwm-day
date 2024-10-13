import React from "react"
import SpecialBlutDot from "./icons/SpecialBlutDot"
import { AnimatePresence, motion } from "framer-motion"

function AboutUsTab() {
  return (
    <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
      <div>
        <div className="text-3xl font-semibold text-white">Who we are and what we do?</div>
        <div className="flex flex-col gap-6 mt-4 md:mt-10">
          <ContentAboutUs
            title="Vision"
            content="Pioneer ecosystem & platform for NFT gaming guilds ecosystem."
          />
          <ContentAboutUs
            title="Mission"
            content="Approach, educate, transfer traditional gamers on board NFT gamers & revolutionize gaming."
          />
          <ContentAboutUs
            title="Secret source"
            content={
              <div>
                <p>70M+ users on Facebook & Tiktok, reaches 1 billions/ month.</p>
                <p className="mt-1">
                  Top 1 traffice on Tiktok platform in Vietnam & Southest Asia.
                </p>
                <p className="mt-1">The first MCN gains 40B+ view on Tiktok.</p>
              </div>
            }
          />
        </div>
      </div>
      <div className="flex justify-end">
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
            <img className="md:w-[400px]" src="/images/dgg_network_big.svg" alt="dgg-img" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default AboutUsTab

function ContentAboutUs({ title, content }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <SpecialBlutDot />
        <div className="text-[20px] font-semibold text-white">{title}</div>
      </div>
      <div className="mt-3 text-sm font-medium text-gray">{content}</div>
    </div>
  )
}
