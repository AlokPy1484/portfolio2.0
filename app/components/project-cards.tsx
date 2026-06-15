"use client"


import Image from "next/image";
import showcase1 from "../../public/preview_1.webp"
import { CodeXml, Globe } from "lucide-react";
import StackButton from "../components/StackButton";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { StaticImageData } from "next/image";
import { strict } from "assert";

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
      name: "Typescript"
    },
    {
      logoLink: "https://thesvg.org/icons/tailwind-css/default.svg",
      name: "Tailwind"
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


  return (

    <div className="flex flex-col justify-start items-center gap-2 md:w-[550px] h-auto border border-neutral-900 bg-neutral-950 rounded-2xl overflow-hidden"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.05) 0.01px, transparent 0.5px, transparent 50px),repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.05) 0.01px, transparent 0.5px, transparent 50px)",
      }}>

      <Image src={props.image} alt="image" width={350} height={200} className="z-10 object-fill w-full" />


      <div className="flex flex-col justify-start items-start gap-4 w-full p-4 text-white">
        <div className="flex justify-between items-center w-full ">
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
        <div className="w-full text-sm">
          {props.description}
        </div>

        <div className="flex justify-start items-center gap-2 w-full flex-wrap">
          {props.StackList.map((stack) => (
            <StackButton logoLink={stack.logoLink} name={stack.name} />
          ))}
        </div>
      </div>

    </div>
  )
}