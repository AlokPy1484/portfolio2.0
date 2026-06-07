import BlogCard from "@/app/components/BlogCard";
import { Button } from "@/components/ui/button";
import blog1 from "../../assets/blog1.webp"
import blog2 from "../../assets/blog2.jpg"
import Image from "next/image";


const Blogs = [{
                heading: "GitHub for Beginners: Everything You Need to Know to Start Using Version Control",
                date: "July 6 2025",
                views: 432,
                image: <Image src={blog1} alt="blog" className="md:max-h-[120px]"/>,
                link: "https://portfolio-five-silk-61.vercel.app/pages/blog"
                },
                {
                heading: "Understanding Frontend Development and its application: A Deep Dive",
                date: "July 6 2025",
                views: 432,
                image: <Image src={blog2} alt="blog" className="md:max-h-[120px]"/>,
                link: "https://alokpydeepdive01.hashnode.dev/understanding-frontend-development-a-deep-dive"
                }
            ]

export default function RecentBlogsSection(){
    

    return(
            <div className="flex justify-center items-center w-full h-full ">
            <div className="flex justify-center items-center md:w-[56vw] h-full my-20 p-2 bg-black border border-neutral-900"
style={{
  backgroundImage:
    "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 5px)",
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
        <div className="flex flex-col justify-between items-center gap-8 md:gap-12 p-4 w-full">
            {Blogs.map((blog, index) => (
                <BlogCard key={index} heading={blog.heading} date={blog.date} views={blog.views} image={blog.image} link={blog.link}/>
            ))}
        </div>
        </div>
        </div>
        

    </div>)
    
}