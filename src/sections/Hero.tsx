import { GradientEl } from "../components/GradientEl"
import discountIcon from '../assets/discount.svg'
import { CircleCTA } from "../components/CircleCTA"
import { HeroImg } from "../components/HeroImg"

export const Hero = () => {
    return (
        <section className="relative md:mt-20 lg:mt-32 md:grid md:grid-cols-[453px_1fr] lg:grid-cols-[580px_1fr] lg:max-w-7xl lg:gap-8 lg:w-full lg:mx-auto
         justify-center xl:grid-cols-[670px_1fr]">
            <div className="mt-12 mb-8 flex flex-col gap-8 relative container px-7 md:pl-5 md:pr-0">
                <p className="uppercase flex items-center gap-1 w-fit h-fit pr-1 sm:pl-2 sm:pr-3 text-sm sm:text-lg 
                bg-gradient-to-bl from-neutral-900 to-primary-900 rounded-lg
                ">
                    <img src={discountIcon} alt="discount percent icon" />
                    <span className="text-white">20%</span> Discount for <span className="text-white">1 month</span> account</p>
                <h1 className="text-4xl max-w-[350px] md:max-w-[700px] leading-normal font-semibold md:text-5xl md:leading-normal
                 lg:text-6xl xl:text-7xl xl:leading-snug lg:leading-snug">
                    <span className="text-white">The Next </span>
                    <GradientEl>
                        Generation
                    </GradientEl>
                    <span className="text-white"> Payment Method.</span>
                </h1>
                <p className="max-w-[500px] md:text-lg">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                    We examine annual percentage rates, annual fees.</p>
                <CircleCTA className="absolute left-[240px] top-[55px] md:right-[30px] md:top-[55px] md:left-auto xl:top-[65px]" />
            </div>
            <HeroImg />
        </section>
    )
}
