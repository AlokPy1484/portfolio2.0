import { Marquee } from "../../../components/ui/marquee"



const testimonials = [
  {
    quote:
      "Plex transformed our brand visuals completely. Engagement increased almost instantly after launch, and the motion work feels premium and intentional.",
    name: "Aarav Mehta",
    title: "Founder, Grow Rev",
  },
  {
    quote:
      "The attention to detail and motion design quality was exceptional. Our product now feels polished, modern, and far more trustworthy.",
    name: "Daniel Parker",
    title: "CEO, Parker Cards",
  },
  {
    quote:
      "Working with Plex was seamless. The visuals perfectly matched our energy and helped us connect better with our fitness community.",
    name: "Valeria Gomez",
    title: "Founder, Valeria Fitness",
  },
  {
    quote:
      "Plex understood our vision instantly. The final designs elevated our platform and made complex ideas feel simple and elegant.",
    name: "Rohit Sharma",
    title: "Product Lead, The Grids",
  },
  {
    quote:
      "From concept to execution, everything felt strategic and refined. The motion design added real value to our brand experience.",
    name: "Emily Chen",
    title: "Marketing Director, Grow Rev",
  },
];



export default function TestimonialSection(){

    return(
        <section className="flex justify-center w-full mt-30">
            <div className="w-full max-w-7xl px-4">
                <h1 className="text-5xl">What clients says</h1>
                 <Marquee pauseOnHover className="[--duration:35s] mt-20">
                    {testimonials.map((testimonial) => (
                        <div 
                        className="relative w-[300px] md:w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-900/10 dark:border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(243,244,246,0.9))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-8 py-6 md:w-[450px] backdrop-blur-sm"
                        key={testimonial.name}>
                                    <blockquote>
                                    <div
                                        aria-hidden="true"
                                        className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] rounded-2xl border border-white/5 bg-gradient-to-br from-white/10 to-transparent"
                                    ></div>
                                    <span className="relative z-20 leading-[1.6] text-sm md:text-xl  dark:text-white/80">
                                        {testimonial.quote}
                                    </span>
                                    <div className="relative z-20 mt-6 flex flex-row items-center">
                                        <span className="flex flex-col gap-1">
                                        <span className="text-sm leading-[1.6] font-normal dark:text-white/60">
                                            {testimonial.name}
                                        </span>
                                        <span className="text-sm leading-[1.6] font-normal dark:text-white/60">
                                            {testimonial.title}
                                        </span>
                                        </span>
                                    </div>
                                    </blockquote>
                                </div>
                    ))}
                 </Marquee>
            </div>

        </section>

    )
}

