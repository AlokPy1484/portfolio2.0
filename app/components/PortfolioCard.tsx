import Image from 'next/image'
import Showcase1 from '../assets/Showcase1.png'
import { Button } from '@/components/ui/button'
import { Dot } from 'lucide-react'



export default function PortfolioCard(){

    return(
        <section className="flex flex-col justify-center items-start p-4 max-w-[600px] rounded-3xl bg-zinc-100  dark:bg-zinc-800 my-10">
            <Image src={Showcase1} alt="showcase1" className='w-full rounded-2xl'/>
            <h1 className='text-2xl mt-4'>Blognest</h1>
            <div className='flex flex-col justify-center items-start gap-1 w-full'>
                <span className='flex gap-1'>
                <a className=''>Social Networking Platform </a>
                <Dot/>
                <a className='text-sm'>July 2025</a>
                </span>
            </div>
            <span className='text-sm mt-4'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur laudantium voluptate culpa aliquid eveniet cumque corrupti veritatis voluptas distinctio, reprehenderit, nobis perferendis placeat modi repellendus dolores fuga saepe, molestias quod.
            </span> 
        </section>
    )
}