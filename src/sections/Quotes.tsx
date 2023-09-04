import { H2 } from "../components/H2"
import { Quote } from "../types"
import herman from "../assets/herman.svg"
import steve from "../assets/steve.svg"
import kenn from "../assets/kenn.svg"
import { QuoteTestimonial } from "../components/QuoteTestimonial"
import { Subtitle } from "../components/Subtitle"
import { GradientBlur } from "../components/GradientBlur"

const data: Quote[] = [
    {
        quote: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        position: "Founder & Leader",
        avatar: herman,
        alt: "Herman Jensen's avatar",
    },
    {
        quote: "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        position: "Founder & Leader",
        avatar: steve,
        alt: "Steve Mark's avatar",
    },
    {
        quote: "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        position: "Founder & Leader",
        avatar: kenn,
        alt: "Kenn Gallagher's avatar",
    },
]
export const Quotes = () => {
    return (
        <section className="relative mx-auto w-full max-w-7xl px-7">
            <div className="mb-12 grid gap-4 lg:grid-cols-[470px_1fr] lg:items-center lg:gap-28">
                <H2>What people are saying about us</H2>
                <Subtitle>
                    Everything you need to accept card payments and grow your
                    business anywhere on the planet.
                </Subtitle>
            </div>
            <div className="grid gap-2 lg:grid-cols-3">
                {data.map((quote, idx) => (
                    <QuoteTestimonial
                        key={idx}
                        {...quote}
                    />
                ))}
            </div>
            <GradientBlur
                className="right-[-400px]
         top-0 bg-gradient-to-br from-secondary-700 to-accent-400"
            />
        </section>
    )
}
