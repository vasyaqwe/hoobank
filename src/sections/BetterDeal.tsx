import spiral from "../assets/spiral.svg"
import scan from "../assets/scan.svg"
import analysis from "../assets/analysis.svg"
import paymentMethod from "../assets/payment-method.svg"
import { EvenColumns } from "../components/EvenColumns"
import { Button } from "../components/Button"
import { H2 } from "../components/H2"
import { Subtitle } from "../components/Subtitle"

export const BetterDeal = () => {
    return (
        <EvenColumns className="mb-20">
            <div className="grid gap-8">
                <H2>Find a better card deal in few easy steps.</H2>
                <Subtitle>
                    Upgrade your credit card today with our user-friendly
                    comparison tools. Discover the best card deals and apply in
                    just a few easy steps.
                </Subtitle>
                <Button className="justify-self-start">Get Started</Button>
            </div>
            <div className="relative max-w-[510px] px-10 lg:justify-self-end">
                <img
                    src={spiral}
                    alt={"a spiral"}
                />
                <img
                    className="absolute left-0 top-[20%] max-w-[40%] sm:max-w-[100%] lg:left-[-30px]"
                    src={scan}
                    alt={'"Scan credit cards" section from the app'}
                />
                <img
                    className="absolute right-[-0%] top-[5%] max-w-[50%] sm:max-w-[100%]"
                    src={analysis}
                    alt={'"Online analysis" section from the app'}
                />
                <img
                    className="absolute bottom-[-50px] left-[20%] max-w-[50%]"
                    src={paymentMethod}
                    alt={'"Payment method" section from the app'}
                />
            </div>
        </EvenColumns>
    )
}
