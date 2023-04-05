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
      <GradientBlur animate={false} className="bg-gradient-to-br
         from-blue-100 to-blue-400 left-[500px] top-[-500px]" />
      <GradientBlur animate={false} className="bg-gradient-to-br
         from-gradient-pink-300 to-gradient-pink-700 right-0 top-[-550px]" />
      <Header />
      <main className="grid gap-14 lg:gap-28">
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
