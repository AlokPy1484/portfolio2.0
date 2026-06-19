import PortfolioCard from "@/app/components/PortfolioCard";
import Showcase1 from '../../assets/Showcase1.png'
import Showcase2 from '../../assets/Showcase2.png'
import Showcase3 from '../../assets/Showcase3.png'
import Showcase4 from '../../assets/Showcase4.png'
import ProjectCard from "@/app/components/project-cards";
import { useTheme } from "next-themes";
import { getStripedBackground } from "@/app/background-style";

export default function PortfolioWork() {


  const { theme } = useTheme()

  return (
    <div className="flex justify-center items-center w-screen h-full mt-30">


      <div className="flex justify-center items-center md:w-[90vw] h-full my-20 p-2 "
        style={getStripedBackground(theme)}>

        <div className="flex flex-col md:flex-row  justify-between md:items-start items-center gap-8 p-4 w-full h-full  bg-white dark:bg-black "
        >

          <div className="flex flex-col text-4xl md:text-5xl gap-8">Selected Works


            <div className="flex flex-col md:flex-row flex-wrap md:gap-16 w-full h-full py-8  justify-center md:items-start items-center gap-8">

              {Projects.map((project) => (
                <ProjectCard title={project.title} description={project.description} StackList={project.StackList} image={project.image} link={project.link} github={project.github} />
              ))}
            </div>
          </div>
        </div>

      </div>

    </div >
  )
}


const Projects = [
  {
    title: "Blognest",
    description: "BlogNest is an innovative social networking app designed for creators to share stories, build communities, and engage with diverse audiences.",
    image: Showcase3,
    github: "https://github.com/AlokPy1484/BlogNestAPI",
    link: "https://blog-nest-ui-98u2.vercel.app",
    StackList: [
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
      }
    ]
  },
  {
    title: "Agency Landing Page",
    description: "A sleek, responsive SaaS landing page built using modern components to drive user conversions, showcase features, and accelerate business growth.",
    image: Showcase2,
    github: "https://github.com/AlokPy1484/landingPage",
    link: "https://landing-page-kappa-five-88.vercel.app",
    StackList: [
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
      }
    ]
  },
  {
    title: "Trvalr.com",
    description: "Trvalr.com is a smart, AI-powered online travel agency platform designed to personalize itineraries, simplify bookings, and elevate your global adventures.",
    image: Showcase1,
    link: "https://trvalr.com",
    github: "https://github.com",
    StackList: [
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
        logoLink: "https://thesvg.org/icons/nodedotjs/default.svg",
        name: "Node.js"
      }
    ]
  },
  {
    title: "Restro Landing Page",
    description: "A sleek, modern restaurant landing page featuring interactive menu cards and detailed ingredient highlights to captivate diners and boost reservations.",
    image: Showcase4,
    github: "",
    link: "",
    StackList: [
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
      }
    ]
  }
]