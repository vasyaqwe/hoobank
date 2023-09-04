import { Quote } from "../types"
import quoteImg from "../assets/quote.svg"

export const QuoteTestimonial = ({
    avatar,
    alt,
    quote,
    name,
    position,
}: Quote) => {
    return (
        <article
            className="group grid max-w-sm cursor-default gap-8 rounded-2xl from-neutral-800 to-secondary-900
        p-6 px-9 hover:bg-gradient-to-bl md:py-16"
        >
            <img
                className="opacity-50 group-hover:opacity-100"
                src={quoteImg}
                alt={"quote icon"}
            />
            <p className="text-white md:text-lg">{quote}</p>
            <div className="grid grid-cols-[max-content_1fr] gap-x-4">
                <img
                    className="row-start-1 row-end-3"
                    src={avatar}
                    alt={alt}
                />
                <p className="text-lg text-white md:text-xl">{name}</p>
                <p className="col-start-2 text-sm">{position}</p>
            </div>
        </article>
    )
}
