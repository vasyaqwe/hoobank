import { NumberTestimonial } from "../components/NumberTestimonial"
import { NumberData } from "../types"

const data: NumberData[] = [
    { title: 'Users active', number: '3800+' },
    { title: 'Trusted by company', number: '230+' },
    { title: 'Transactions', number: '$230M+' },
]

export const Numbers = () => {
    return (
        <section className="max-w-7xl px-7 mx-auto flex flex-col justify-center gap-9
         md:flex-wrap lg:flex-row lg:flex-nowrap xl:gap-24">
            {data.map((item, idx) => <NumberTestimonial key={idx} {...item} />)}
        </section>
    )
}
