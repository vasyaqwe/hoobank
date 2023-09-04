import { Button } from "../components/Button"
import { EvenColumns } from "../components/EvenColumns"
import { Feature } from "../types"
import star from "../assets/star.svg"
import shield from "../assets/shield.svg"
import message from "../assets/message.svg"
import { FeatureTestimonial } from "../components/FeatureTestimonial"
import { H2 } from "../components/H2"
import { Subtitle } from "../components/Subtitle"

const data: Feature[] = [
    {
        title: "Rewards",
        description:
            "The best credit cards offer some tantalizing combinations of promotions and prizes",
        icon: star,
        alt: "a star icon",
    },
    {
        title: "100% Secured",
        description:
            "We take proactive steps make sure your information and transactions are secure.",
        icon: shield,
        alt: "a shield icon",
    },
    {
        title: "Balance Transfer",
        description:
            "A balance transfer credit card can save you a lot of money in interest charges.",
        icon: message,
        alt: "a message icon",
    },
]

export const Features = () => {
    return (
        <EvenColumns className="max-w-7xl px-7">
            <div className="grid gap-8">
                <H2>You do the business, we’ll handle the money.</H2>
                <Subtitle>
                    With the right credit card, you can improve your financial
                    life by building credit, earning rewards and saving money.
                    But with hundreds of credit cards on the market.
                </Subtitle>
                <Button className="justify-self-start">Get Started</Button>
            </div>
            <div className="grid gap-3 lg:place-content-center lg:justify-end">
                {data.map((feature, idx) => (
                    <FeatureTestimonial
                        key={idx}
                        {...feature}
                    />
                ))}
            </div>
        </EvenColumns>
    )
}
