"use client"

import Link from "next/link"
import { useNavStore } from "../../_store/useNavStore"
import ButtonMenu from "../buttons/ButtonMenu"
import Logo from "../logos/Logo"
import { AnimatePresence, motion } from "motion/react"
import { useEffect } from "react"
import NavTop from "../navs/NavTop"
import IconNav from "../navs/IconNav"




export default function HeaderTwoResponsive() {
  const {
    isMenu,
    navList,
    setIsMenu,
  } = useNavStore()

  const handleClose = () => setIsMenu(false)
  const handleToggle = () => setIsMenu(!isMenu)

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenu ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMenu])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenu) handleClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isMenu])

  return (
    <>
    <header className="lg:hidden block">
        
        <section className="w-full bg-white drop-shadow">
            <div className="text-white bg-blue-900">
                <NavTop />
            </div>
            <section className="container__primary">
            </section>
            <section className="container__primary flex items-center justify-between pt-4 pb-4">
            <Logo color="text-blue-900" />
            <ButtonMenu aria-label="Open navigation menu" />
            </section>
        </section>

        <AnimatePresence>
            {isMenu && (
            <div
                className="fixed inset-0 z-50 pointer-events-auto"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                {/* Backdrop */}
                <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                onClick={handleClose}
                className="absolute inset-0 z-10 bg-black/50 backdrop-blur-sm"
                />

                {/* Slide-in panel */}
                <motion.div
                key="panel"
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 280, damping: 32, mass: 0.85 }}
                className="w-[80%] max-w-xs absolute right-4 top-8 bottom-8 z-20
                            bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                >
                {/* Panel header */}
                <div className="shrink-0 flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <Logo color="text-blue-900" />
                    <ButtonMenu
                    aria-label="Close navigation menu"
                    />
                </div>

                {/* Nav list */}
                <nav className="flex-1 overflow-y-auto py-3">
                    <ul className="flex flex-col mb-4">
                    {navList.map((item, index) => {
                        return (
                        <li key={item.href ?? index}>
                            <Link
                            href={item.href}
                            onClick={handleClose}
                            className="flex items-center gap-3 px-5 py-3.5 text-gray-800 font-medium
                                        hover:bg-gray-100 active:bg-gray-100
                                        transition-colors duration-150 rounded-lg mx-2">
                            <span>{item.name}</span>
                            </Link>
                        </li>
                        )
                    })}
                    </ul>
                    <IconNav />
                </nav>
                </motion.div>
            </div>
            )}
        </AnimatePresence>

    </header>
        
    </>
  )
}