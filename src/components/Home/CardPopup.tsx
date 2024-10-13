import React from "react"
import { DialogOverlay } from "@reach/dialog"
import { AnimatePresence, motion } from "framer-motion"
import MotionDialogContent from "../MotionDialogContent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

function CardPopup({ showDialog, setShowDialog, className = "" }) {
  const closeDepositPopup = () => setShowDialog(false)
  return (
    <div className={`${className}`}>
      <AnimatePresence>
        {showDialog && (
          <DialogOverlay
            onDismiss={closeDepositPopup}
            className="z-50 flex items-center justify-center"
          >
            {/* @ts-ignore */}
            <MotionDialogContent
              aria-label="Deposit popup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-50 min-w-[343px] md:min-w-[392px] !bg-transparent"
              style={{ width: 750 }}
            >
              <motion.div
                className="relative p-4 bg-white rounded-3xl"
                initial={{ y: +30 }}
                animate={{ y: 0 }}
              >
                <div onClick={closeDepositPopup} className="close">
                  <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-bgLetter">
                  <div className="flex items-center gap-2 text-2xl font-sriracha">
                    Dear Mon <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <div className="grid md:grid-cols-[47%53%] grid-cols-1 mt-6">
                    <div className="flex items-center justify-center min-h-[300px]">
                      <img src="/images/pam.png" alt="avt" className="w-[80%] object-cover" />
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/images/love.png"
                        alt="love"
                        className="w-[220px] object-cover hidden md:block"
                      />
                      <div className="mt-4 text-base font-bold md:text-xl font-dancing">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
                        molestiae dignissimos non sunt labore consectetur cum voluptates velit
                        magnam nesciunt, tempore enim magni iure eaque! Cupiditate nam reiciendis
                        corporis quidem.
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="/images/mewmew.gif"
                  alt="mew"
                  className="w-[80px] absolute bottom-0 right-0"
                />
              </motion.div>
            </MotionDialogContent>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CardPopup
