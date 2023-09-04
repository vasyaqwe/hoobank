import { GradientEl } from "../components/GradientEl"
import discountIcon from "../assets/discount.svg"
import { CircleCTA } from "../components/CircleCTA"
import { HeroImg } from "../components/HeroImg"

export const Hero = () => {
    return (
        <section
            className="relative justify-center md:mt-20 md:grid md:grid-cols-[453px_1fr] lg:mx-auto lg:mt-32 lg:w-full lg:max-w-7xl lg:grid-cols-[580px_1fr]
         lg:gap-8 xl:grid-cols-[670px_1fr]"
        >
            <div className="container relative mb-8 mt-12 flex flex-col gap-8 px-7 md:pl-5 md:pr-0">
                <p
                    className="flex h-fit w-fit items-center gap-1 rounded-lg bg-gradient-to-bl from-neutral-900 to-primary-900 pr-1 text-sm 
                uppercase sm:pl-2 sm:pr-3 sm:text-lg
                "
                >
                    <img
                        src={discountIcon}
                        alt="discount percent icon"
                    />
                    <span className="text-white">20%</span> Discount for{" "}
                    <span className="text-white">1 month</span> account
                </p>
                <h1
                    className="max-w-[350px] text-4xl font-semibold leading-normal md:max-w-[700px] md:text-5xl md:leading-normal
                 lg:text-6xl lg:leading-snug xl:text-7xl xl:leading-snug"
                >
                    <span className="text-white">The Next </span>
                    <GradientEl>Generation</GradientEl>
                    <span className="text-white"> Payment Method.</span>
                </h1>
                <p className="max-w-[500px] md:text-lg">
                    Our team of experts uses a methodology to identify the
                    credit cards most likely to fit your needs. We examine
                    annual percentage rates, annual fees.
                </p>
                <CircleCTA className="absolute left-[240px] top-[55px] md:left-auto md:right-[30px] md:top-[55px] xl:top-[65px]" />
            </div>
            <HeroImg />
        </section>
    )
}
