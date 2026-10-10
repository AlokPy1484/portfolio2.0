import ProjectsDetailsPage from "@/components/ui/project-details-page";





export default async function page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {

    const { slug } = await params;
    const ProjectID = Number(slug)

    const ProjectDetails = [
        {
            title: "Next.js Portfolio",
            liveLink: "https://nextjs-portfolio.vercel.app",
            githubLink: "https://github.com/alokpandey2004/nextjs-portfolio",
            stacks: [
                {
                    link: "https://thesvg.org/icons/nextjs/default.svg",
                    name: "Next.js"
                },
                {
                    link: "https://thesvg.org/icons/django/default.svg",
                    name: "Django"
                },
                {
                    link: "https://thesvg.org/icons/typescript/default.svg",
                    name: "TypeScript"
                },
                {
                    link: "https://thesvg.org/icons/motion/default.svg",
                    name: "Motion"
                },
                {
                    link: "https://thesvg.org/icons/tailwind-css/default.svg",
                    name: "Tailwind CSS"
                }
            ],
            descriptios: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore itaque quidem similique cumque voluptates natus adipisci doloremque illo maxime perspiciatis.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, blanditiis dolorem? Eaque cum voluptatem accusantium at quia consequuntur? Reiciendis, amet.",
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aspernatur, iusto natus, officiis non tempore, in odit vel dolorum culpa itaque quod repellat hic? Delectus voluptatibus autem repellendus. Minus, culpa.",
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam natus maxime aperiam porro sed similique consequuntur in tenetur officia, reiciendis doloremque debitis nisi aspernatur est. Harum modi accusantium quia autem.",
            ],
        }
    ]


    return (
        <ProjectsDetailsPage {...ProjectDetails[ProjectID]} />
    )
}