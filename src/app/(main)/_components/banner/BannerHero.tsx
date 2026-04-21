"use client"
import { motion, Variants } from "motion/react"
import Title from '../titles/Title'
import { ButtonPrimary } from "../buttons/ButtonPrimary"
import Link from "next/link"
import TitleTwo from "../titles/TitleTwo"
import Button from "../buttons/Button"

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            delay,
        },
    }),
}
 
export default function HeroBanner() {
    return ( 
        <section style={{
            backgroundImage: 'url("/assets/images/banner/02.jpg")',
        }} className="h-full relative w-full bg-fixed bg-center bg-cover bg-linear-to-br from-blue-500 to-blue-950 text-white">
            <div className="top-0 left-0 w-full h-full absolute z-5 bg-linear-to-tr from-gray-950 to-90% to-transparent">
                <div className="container__primary h-full flex flex-col items-start justify-center">
                    <div className="relative lg:w-[50%] w-[80%] h-full flex flex-col items-start justify-center">
                        {/*  */}
                        <div className="absolute text-shadow-lg z-10 pt-20 w-full h-full flex flex-col items-start justify-center">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                className="text-shadow-lg"
                                viewport={{ once: true, amount: 0.3 }}
                                custom={0.1}>
                                <TitleTwo name="Welcome to FambaNow" css="text-white mb-3" />
                            </motion.div>

                            <motion.p
                                className="text-xl font-light mb-6"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                custom={0.25}>
                                We are dedicated to harnessing the power of the sun to provide sustainable
                                energy solutions.
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                custom={0.4}>
                                <Link href='/about'>
                                    <Button
                                        name="View More"
                                        css="text-lg py-3 px-9 text-white"
                                    />
                                </Link>
                            </motion.div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}