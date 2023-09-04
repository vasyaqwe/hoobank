import { GradientBlur } from "./components/GradientBlur"
import { Footer } from "./layout/Footer"
import { Header } from "./layout/Header"
import { AppPreview } from "./sections/AppPreview"
import { BetterDeal } from "./sections/BetterDeal"
import { CTA } from "./sections/CTA"
import { Features } from "./sections/Features"
import { Hero } from "./sections/Hero"
import { Numbers } from "./sections/Numbers"
import { Partners } from "./sections/Partners"
import { Quotes } from "./sections/Quotes"

function App() {
    return (
        <>
            <GradientBlur
                animate={false}
                className="left-[500px]
         top-[-500px] bg-gradient-to-br from-blue-100 to-blue-400"
            />
            <GradientBlur
                animate={false}
                className="right-0
         top-[-550px] bg-gradient-to-br from-gradient-pink-300 to-gradient-pink-700"
            />
            <Header />
            <main className="grid gap-14 lg:gap-28">
                <p className="fixed bottom-4 left-1/2 z-[40] w-max -translate-x-1/2 rounded-md border border-primary-800 bg-primary-800 p-2 text-center text-xs sm:text-sm">
                    Created by{" "}
                    <a
                        className="text-purple-400 hover:underline"
                        target="_blank"
                        href={
                            "https://www.upwork.com/freelancers/~015c1b113a62e11b13"
                        }
                    >
                        Vasyl P
                    </a>
                    . Source code available on{" "}
                    <a
                        target="_blank"
                        className="text-purple-400 hover:underline"
                        href="https://github.com/vasyaqwe/hoobank"
                    >
                        GitHub
                    </a>
                </p>
                <Hero />
                <Numbers />
                <Features />
                <AppPreview />
                <BetterDeal />
                <Quotes />
                <Partners />
                <CTA />
            </main>
            <Footer />
        </>
    )
}

export default App
