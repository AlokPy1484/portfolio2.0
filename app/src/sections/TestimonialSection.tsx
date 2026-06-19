import { getCrossPatternBackground } from "@/app/background-style";
import { Marquee } from "../../../components/ui/marquee"
import { useTheme } from "next-themes";



const testimonials = [
  {
    quote:
      "Alok helped our business generate more leads by building Plex’s landing page with a strong focus on design, performance, and user experience.",
    name: "Mukund Gadekar",
    title: "Design Head, Plex Visuals",
  },
  {
    quote:
      "The quality of Alok’s work is exceptional. He helped us integrate APIs and built a scalable, manageable React frontend for our online travel platform.",
    name: "Utkarsh Nishad",
    title: "Founder, Trvalr.com",
  },
  {
    quote:
      "Alok’s development skills helped us build our website quickly and efficiently, delivering high-quality results within a short timeframe.",
    name: "Ansh Sharma",
    title: "Founder, Dax Logistics",
  }
];



export default function TestimonialSection() {

  const { theme } = useTheme()

  return (
    <section className="flex justify-center w-full my-30">
      <div className="w-full max-w-7xl px-4">
        <h1 className="text-5xl">What clients says</h1>
        <Marquee pauseOnHover className="relative [--duration:35s] mt-20">

          {testimonials.map((testimonial) => (
            <div
              className="relative w-[300px] md:w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-900/10 dark:border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(243,244,246,0.9))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-8 py-6 md:w-[450px] backdrop-blur-2xl  bg-neutral-100 dark:bg-black"
              style={getCrossPatternBackground(theme)}
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

