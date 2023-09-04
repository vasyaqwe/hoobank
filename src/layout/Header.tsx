import { useEffect, useState } from "react"
import logo from "../assets/logo.svg"
import { Navbar } from "../components/Navbar"
import { useWidth } from "../useWidth"

export const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    const { width, smallScreen } = useWidth()
    useEffect(() => {
        width! > 640 ? setNavOpen(true) : setNavOpen(false)
    }, [width])

    return (
        <header className="relative mx-auto flex max-w-7xl items-center justify-between px-7 pt-7">
            <img
                src={logo}
                alt={"HooBank logo"}
            />
            <Navbar navOpen={navOpen} />
            <button
                onClick={() => setNavOpen((open) => !open)}
                className="nav-toggle sm:hidden"
                aria-expanded={navOpen}
            >
                <span className="sr-only">Menu</span>
            </button>
        </header>
    )
}
