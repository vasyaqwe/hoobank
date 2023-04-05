import { motion, AnimatePresence } from 'framer-motion'

export const Navbar = ({ navOpen }: { navOpen: boolean }) => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    return (
        <AnimatePresence>
            {navOpen && <motion.nav
                variants={variants}
                initial={'hidden'}
                animate={'visible'}
                exit={'hidden'}
                className="fixed z-[2] inset-0 bg-gradient-to-bl from-gradient-purple-100 to-gradient-blue-100 sm:static sm:bg-none">
                <ul

                    className={`grid place-content-center text-white text-3xl text-semibold sm:text-base sm:font-normal text-center
            mt-20 gap-8 sm:flex sm:mt-0`}>
                    <li><a className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-accent-100 to-accent-700" href="#">Home</a></li>
                    <li><a className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-accent-100 to-accent-700" href="#">About Us</a></li>
                    <li><a className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-accent-100 to-accent-700" href="#">Features</a></li>
                    <li><a className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-accent-100 to-accent-700" href="#">Solution</a></li>
                </ul>
            </motion.nav>}

        </AnimatePresence>
    )
}
