import { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import { Navbar } from '../components/Navbar'
import { useWidth } from '../useWidth'
import { GradientBlur } from '../components/GradientBlur'

export const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    const { width, smallScreen } = useWidth()
    useEffect(() => {
        width! > 640 ? setNavOpen(true) : setNavOpen(false)
    }, [width])

    return (
        <header className='pt-7 flex items-center justify-between max-w-7xl mx-auto px-7 relative'>
            <img src={logo} alt={'HooBank logo'} />
            <Navbar navOpen={navOpen} />
            <button onClick={() => setNavOpen(open => !open)} className='nav-toggle sm:hidden' aria-expanded={navOpen}>
                <span className="sr-only">Menu</span>
            </button>
        </header>
    )
}
