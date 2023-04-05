import { Button } from "../components/Button"
import { H2 } from "../components/H2"

export const CTA = () => {
    return (
        <section className="max-w-7xl px-7 mx-auto w-full">
            <div className="py-8 px-10 sm:py-16 sm:px-10 lg:py-12 lg:px-24 rounded-2xl 
            bg-gradient-to-bl from-neutral-800 to-secondary-900
            grid gap-4 lg:grid-cols-[1fr_max-content] lg:items-center 
            ">
                <div>
                    <H2>Let’s try our service now!</H2>
                    <p className="md:text-lg mt-4 max-w-md">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
                <Button className="justify-self-start mt-3">Get Started</Button>
            </div>
        </section>
    )
}
