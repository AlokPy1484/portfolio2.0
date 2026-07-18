"use client"


import Image from "next/image";
import { motion } from "motion/react"
import { cn } from "@/lib/utils";



interface StackButtonProps {
    logoLink: string,
    name: string,
    size: string
}



export default function StackButton(props: StackButtonProps) {


    return (
        <motion.div

            initial={
                { ...(props.size === "small" ? { width: 30 } : { width: 40 }) }
            }
            whileHover={{
                width: "auto"
            }}
            transition={{
                duration: 0.2,
                ease: "easeInOut"
            }}


            className={cn(props.size === "small" ? "h-[30px] p-[4px]" : "h-[40px] p-2", "group flex justify-start  items-center overflow-hidden bg-neutral-200/50 dark:bg-neutral-900 border border-dashed border-white dark:border-neutral-700 border-[1px] rounded-lg gap-2  cursor-pointer")} >
            <Image src={props.logoLink} alt="logo" width={props.size === "small" ? 20 : 30} height={props.size === "small" ? 20 : 30} className=" rounded-full" />
            <motion.span
                className="font-light block opacity-0 group-hover:opacity-100 transition-all duration-300 text-[12px] whitespace-nowrap">
                {props.name}</motion.span>
        </motion.div >
    )
}