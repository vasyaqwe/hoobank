import { NumberData } from "../types"
import { GradientEl } from "./GradientEl"

export const NumberTestimonial = ({ title, number }: NumberData) => {
    return (
        <div className="flex gap-5 justify-center divider items-center">
            <p className="text-white font-semibold text-2xl sm:text-3xl xl:text-4xl">{number}</p>
            <p className="uppercase text-lg sm:text-xl"><GradientEl>
                {title}
            </GradientEl></p>
        </div>
    )
}
