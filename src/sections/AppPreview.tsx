import { EvenColumns } from "../components/EvenColumns"
import lastTransaction from "../assets/last-transaction.svg"
import paypal from "../assets/paypal.svg"
import successPill from "../assets/success-pill.svg"
import { Subtitle } from "../components/Subtitle"
import { H2 } from "../components/H2"
import { GradientBlur } from "../components/GradientBlur"
import googlePlay from "../assets/googleplay.svg"
import appStore from "../assets/appstore.svg"

export const AppPreview = () => {
    return (
        <EvenColumns className="relative">
            <GradientBlur
                className="left-[-600px]
         top-0 bg-gradient-to-br from-gradient-pink-300 to-gradient-pink-700"
            />
            <div className="flex flex-col gap-8 lg:order-1 lg:items-end">
                <H2 className="max-w-md">
                    Easily control your billing & invoicing.
                </H2>
                <Subtitle>
                    Effortlessly manage your finances with our intuitive tools.
                    Simplify your billing process, and easily generate invoices.
                    Get started today, take control of your finances.
                </Subtitle>
                <div className="flex w-full max-w-md items-center justify-start gap-5 md:mt-6">
                    <a href="#">
                        <img
                            src={googlePlay}
                            alt="Google Play"
                        />
                    </a>
                    <a href="#">
                        <img
                            src={appStore}
                            alt="App Store"
                        />
                    </a>
                </div>
            </div>
            <div className="relative mb-10 mt-20 w-fit xs:mt-40">
                <img
                    className="max-w-[80%] xs:max-w-[100%]"
                    src={lastTransaction}
                    alt={'preview of application section "Last transaction"'}
                />
                <img
                    className="absolute right-[-20px] top-[-50%] max-w-[60%] xs:right-[-145px] xs:top-[-65%] xs:max-w-[100%] sm:right-[-165px]"
                    src={paypal}
                    alt={'preview of application section "Make payment"'}
                />
                <img
                    className="absolute bottom-[-65px] left-5 xs:left-auto xs:right-[-125px]"
                    src={successPill}
                    alt={"A pill notifying of a successfull operation"}
                />
            </div>
        </EvenColumns>
    )
}
