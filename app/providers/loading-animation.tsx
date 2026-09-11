"use client"

import { easeInOut, motion } from "motion/react"


export default function RenderAnimate({ children }: React.PropsWithChildren) {

    return (
        <motion.div
            initial={{
                y: 16,
                opacity: 0
            }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            transition={{
                duration: 0.5,
                ease: easeInOut
            }}
            className="">
            {children}
        </motion.div>
    )
}