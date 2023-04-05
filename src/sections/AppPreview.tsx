import { EvenColumns } from "../components/EvenColumns"
import lastTransaction from '../assets/last-transaction.svg'
import paypal from '../assets/paypal.svg'
import successPill from '../assets/success-pill.svg'
import { Subtitle } from "../components/Subtitle"
import { H2 } from "../components/H2"
import { GradientBlur } from "../components/GradientBlur"
import { ReactComponent as GooglePlay } from '../assets/googleplay.svg'
import { ReactComponent as AppStore } from '../assets/appstore.svg'
export const AppPreview = () => {
    return (
        <EvenColumns className="relative">
            <GradientBlur className="bg-gradient-to-br
         from-gradient-pink-300 to-gradient-pink-700 left-[-600px] top-0" />
            <div className="flex flex-col gap-8 lg:order-1 lg:items-end">
                <H2 className="max-w-md">Easily control your billing & invoicing.</H2>
                <Subtitle>Effortlessly manage your finances with our intuitive tools. Simplify your billing process, and easily generate invoices. Get started today, take control of your finances.</Subtitle>
                <div className="flex items-center gap-5 md:mt-6 justify-start w-full max-w-md">
                    <a href="#"><GooglePlay /></a>
                    <a href="#"><AppStore /></a>
                </div>
            </div>
            <div className="relative w-fit mt-20 xs:mt-40 mb-10">
                <img className="max-w-[80%] xs:max-w-[100%]" src={lastTransaction}
                    alt={'preview of application section "Last transaction"'} />
                <img className="max-w-[60%] xs:max-w-[100%] absolute top-[-50%] right-[-20px] xs:right-[-145px] sm:right-[-165px] xs:top-[-65%]" src={paypal}
                    alt={'preview of application section "Make payment"'} />
                <img className="absolute left-5 bottom-[-65px] xs:left-auto xs:right-[-125px]"
                    src={successPill} alt={'A pill notifying of a successfull operation'} />
            </div>
        </EvenColumns>
    )
}
