import { Quote } from "../types"
import quoteImg from '../assets/quote.svg'

export const QuoteTestimonial = ({ avatar, alt, quote, name, position }: Quote) => {
    return (
        <article className="p-6 rounded-2xl grid gap-8 group max-w-sm md:py-16 px-9
        hover:bg-gradient-to-bl from-neutral-800 to-secondary-900 cursor-default">
            <img className="opacity-50 group-hover:opacity-100" src={quoteImg} alt={'quote icon'} />
            <p className="text-white md:text-lg">
                {quote}
            </p>
            <div className="grid grid-cols-[max-content_1fr] gap-x-4">
                <img className="row-start-1 row-end-3" src={avatar} alt={alt} />
                <p className="text-white text-lg md:text-xl">{name}</p>
                <p className="text-sm col-start-2">{position}</p>
            </div>
        </article>
    )
}
