import React from "react"
import { AnimatePresence, motion } from "framer-motion"

function PartnerTab() {
  return (
    <div className="flex items-center justify-between mt-20">
      <div>
        <PartnerItemCore />
      </div>
      <div className="bg-secondary h-full w-[1px]" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <PartnerItem />
      </div>
    </div>
  )
}

export default PartnerTab

function PartnerItemCore() {
  return (
    <div className="relative w-[243px]">
      <img src="/images/circle-partner.png" alt="cirlce" className="w-full" />
      <img
        src="/images/sui-icon.png"
        alt="sui-dgg"
        className="w-[92px] absolute top-[25%] m-auto left-0 right-0"
      />
    </div>
  )
}

function PartnerItem() {
  return (
    <div className="relative w-[195px]">
      <img src="/images/circle-partner.png" alt="cirlce" className="w-full" />
      <img
        src="/images/partner/dc-icon.svg"
        alt="dc-dgg"
        className="w-[70px] absolute top-[25%] m-auto left-0 right-0"
      />
    </div>
  )
}
