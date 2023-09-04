import { NumberData } from "../types"
import { GradientEl } from "./GradientEl"

export const NumberTestimonial = ({ title, number }: NumberData) => {
    return (
        <div className="divider flex items-center justify-center gap-5">
            <p className="text-2xl font-semibold text-white sm:text-3xl xl:text-4xl">
                {number}
            </p>
            <p className="text-lg uppercase sm:text-xl">
                <GradientEl>{title}</GradientEl>
            </p>
        </div>
    )
}
