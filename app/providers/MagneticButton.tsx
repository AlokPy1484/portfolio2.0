"use client"

import { useRef, useState } from "react"
import { motion, spring } from "motion/react"



export default function MagneticButton({ children }: { children: React.ReactNode }) {


    const ref = useRef<HTMLDivElement>(null)

    const [position, setPosition] = useState({ x: 0, y: 0 })

    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {

        let newX: number = 0
        let newY: number = 0

        const threshold = 3

        if (!ref.current) return
        const { clientX, clientY } = e
        const { width, height, left, top } = ref.current.getBoundingClientRect()

        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)

        if (x > 0) {
            newX = Math.min(clientX - (left + width / 2), threshold)
        }
        else {
            newX = Math.max(clientX - (left + width / 2), -threshold)
        }

        if (y > 0) {
            newY = Math.min(clientY - (top + height / 2), threshold)
        }
        else {
            newY = Math.max(clientY - (top + height / 2), -threshold)
        }


        console.log(newX, newY)

        setPosition({ x: newX, y: newY })
    }

    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    const { x, y } = position

    return (
        <motion.div
            className=""
            ref={ref}
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            animate={{ x, y }}
            transition={{ type: spring, stiffness: 150, damping: 15, mass: 1 }}
        >
            <div className="m-0">

                {children}
            </div>

        </motion.div>
    )
}