import BlogCard from "@/app/components/BlogCard";
import { Button } from "@/components/ui/button";
import blog from "../../assets/blog1.webp"
import Image from "next/image";


const Blogs = [{
                heading: "GitHub for Beginners: Everything You Need to Know to Start Using Version Control",
                date: "July 6 2025",
                views: 432,
                image: <Image src={blog} alt="blog"/>
                },
                {
                heading: "GitHub for Beginners: Everything You Need to Know to Start Using Version Control",
                date: "July 6 2025",
                views: 432,
                image: <Image src={blog} alt="blog"/>
                }
            ]

export default function RecentBlogsSection(){
    

    return(
    <section className="flex justify-center items-center w-full mt-30 mx-2">
        <div className="flex-col justify-center items-center max-w-7xl w-full">
        <div className="w-full ">
            <div className="flex justify-between w-full px-2">
            <h1 className=" text-4xl md:text-5xl">Recent Blogs</h1>
            <Button>View all</Button>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 mt-14 p-4 w-full">
            {Blogs.map((blog, index) => (
                <BlogCard key={index} heading={blog.heading} date={blog.date} views={blog.views} image={blog.image}/>
            ))}
        </div>
        </div>
        

    </section>)
    
}