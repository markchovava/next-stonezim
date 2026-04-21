"use client"
import { motion, AnimatePresence } from "motion/react"
import IconDefault from "@/_components/icons/IconDefault"
import { useNavStore } from "../../_store/useNavStore"


export default function ButtonMenu() {
    const {
        setIsMenu, 
        isMenu 
    } = useNavStore()

    const handleIsMenu = () => {
        setIsMenu(!isMenu)
    }

  return (
    <button 
        className="cursor-pointer relative h-8 w-8 flex items-center justify-center" 
        onClick={handleIsMenu}>
        <AnimatePresence mode="wait" initial={false}>
            {isMenu ? (
            <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }} >
                <IconDefault type={'close'} css="text-3xl text-gray-800" />
            </motion.div>
            ) : (
            <motion.div
                key="menu"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}>
                <IconDefault type="menu" css="text-2xl text-gray-800" />
            </motion.div>
            )}
        </AnimatePresence>
    </button>
  )
}
