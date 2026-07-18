"use client"


import Image from "next/image";
import showcase1 from "../../public/preview_1.webp"
import { CodeXml, Globe } from "lucide-react";
import StackButton from "../components/StackButton";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { StaticImageData } from "next/image";
import { strict } from "assert";
import { getCrossPatternBackground } from "../background-style";
import { useTheme } from "next-themes";

type ShowcaseProps = {
  title: string,
  description: string,
  image: StaticImageData,
  link: string,
  github: string,
  StackList: {
    logoLink: string,
    name: string
  }[]
}





export default function ProjectCard(props: ShowcaseProps) {


  const StackList = [
    {
      logoLink: "https://thesvg.org/icons/nextdotjs/default.svg",
      name: "Next.js"
    },
    {
      logoLink: "https://thesvg.org/icons/typescript/default.svg",
      name: "Typescript CSS"
    },
    {
      logoLink: "https://thesvg.org/icons/tailwind-css/default.svg",
      name: "Tailwind CSS"
    },
    {
      logoLink: "https://thesvg.org/icons/django/default.svg",
      name: "Django"
    },
    {
      logoLink: "https://thesvg.org/icons/nodedotjs/default.svg",
      name: "Node.js"
    }
  ]

  const { theme } = useTheme()

  return (

    <div className="flex flex-col justify-start items-center gap-2 md:w-[550px] h-auto border  dark:border-neutral-900 bg-neutral-100 dark:bg-neutral-950 rounded-2xl overflow-hidden "
      style={getCrossPatternBackground(theme)}>

      <Image src={props.image} alt="image" width={350} height={200} className="z-10 object-fill w-full" />


      <div className="flex flex-col justify-start items-start gap-4 w-full p-4 text-black dark:text-white border-t border dark:border-none">
        <div className="flex justify-between items-center w-full  ">
          <h1 className="text-lg">{props.title}</h1>
          <div className="flex justify-end items-center text-neutral-600 gap-2">
            <Tooltip>
              <TooltipTrigger className="cursor-pointer">
                <a href={props.github} target="*">< CodeXml strokeWidth={2} size={20} /></a>
              </TooltipTrigger>
              <TooltipContent>
                <a>View Code</a>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="cursor-pointer">
                <a href={props.link} target="*">
                  <Globe strokeWidth={2} size={20} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <a>Live Preview</a>
              </TooltipContent>
            </Tooltip>

          </div>
        </div>
        <div className="w-full text-sm ">
          {props.description}
        </div>

        <div className="flex justify-start items-center gap-2 w-full flex-wrap">
          {props.StackList.map((stack) => (
            <StackButton logoLink={stack.logoLink} name={stack.name} size="" />
          ))}
        </div>
      </div>

    </div>
  )
}