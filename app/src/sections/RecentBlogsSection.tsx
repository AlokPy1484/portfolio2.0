import BlogCard from "@/app/components/BlogCard";
import { Button } from "@/components/ui/button";
import blog1 from "../../assets/blog1.webp"
import blog2 from "../../assets/blog2.jpg"
import Image from "next/image";


const Blogs = [{
                heading: "GitHub for Beginners",
                description: " Everything You Need to Know to Start Using Version Control",
                date: "July 6 2025",
                link: "https://portfolio-five-silk-61.vercel.app/pages/blog"
                },
                {
                heading: "Frontend development deep dive",
                description: "A Deep dive into frontend development and its applications",
                date: "July 6 2025",
                link: "https://alokpydeepdive01.hashnode.dev/understanding-frontend-development-a-deep-dive"
                }
            ]

export default function RecentBlogsSection(){
    

    return(
            <div className="flex  justify-center items-center w-full h-full ">
            <div className="flex justify-center items-center md:w-[90vw] h-full my-4 p-2 bg-black border border-neutral-900"
          style={{
  backgroundImage:
    "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.05) 0.01px, transparent 0.5px, transparent 50px),repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.05) 0.01px, transparent 0.5px, transparent 50px)",
}}>

        <div className="flex flex-col  justify-center md:items-start items-center gap-8 p-4 w-full h-full  bg-black border border-neutral-900"
    style={{
  backgroundImage:
    "repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 100px)",
}}>
        <div className="w-full ">
            <div className="flex justify-between w-full px-2">
            <h1 className=" text-4xl md:text-5xl">Recent Blogs</h1>
            <Button><a href="https://alokpydeepdive01.hashnode.dev" target="*">View all</a></Button>
            </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center gap-8 md:gap-12 p-4 w-full">
            {Blogs.map((blog, index) => (
                <BlogCard key={index} heading={blog.heading} date={blog.date} link={blog.link} description={blog.description}/>
            ))}
        </div>
        </div>
        </div>
        

    </div>)
    
}