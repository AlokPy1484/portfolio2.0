import Image, { StaticImageData } from 'next/image'
import Showcase1 from '../assets/Showcase1.png'
import { Button } from '@/components/ui/button'
import { Dot } from 'lucide-react'
import React from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type PortfolioCardProps = {
    title: string,
    subtitle: string,
    date: string,
    image: StaticImport,
    about: string,
}

export default function PortfolioCard(props:PortfolioCardProps){

    return(
        <section className="flex flex-col justify-center items-start p-4 max-w-[600px]  rounded-3xl bg-zinc-100  dark:bg-zinc-800 my-10">
            <Image src={props.image} alt="showcase1" className='w-full rounded-2xl dark:border border-zinc-950'/>
            <h1 className='text-2xl mt-4'>{props.title}</h1>
            <div className='flex flex-col justify-center items-start gap-1 w-full'>
                <span className='flex gap-1'>
                <span className=''>{props.subtitle} </span>
                <Dot/>
                <span className='text-sm'>{props.date}</span>
                </span>
            </div>
            <span className='text-sm mt-4'>
                {props.about}
            </span> 
        </section>
    )
}