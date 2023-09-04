import { Button } from "../components/Button"
import { H2 } from "../components/H2"

export const CTA = () => {
    return (
        <section className="mx-auto w-full max-w-7xl px-7">
            <div
                className="grid gap-4 rounded-2xl bg-gradient-to-bl from-neutral-800 to-secondary-900 px-10 
            py-8 sm:px-10 sm:py-16
            lg:grid-cols-[1fr_max-content] lg:items-center lg:px-24 lg:py-12 
            "
            >
                <div>
                    <H2>Let’s try our service now!</H2>
                    <p className="mt-4 max-w-md md:text-lg">
                        Everything you need to accept card payments and grow
                        your business anywhere on the planet.
                    </p>
                </div>
                <Button className="mt-3 justify-self-start">Get Started</Button>
            </div>
        </section>
    )
}
