import { motion, AnimatePresence } from "framer-motion"

export const Navbar = ({ navOpen }: { navOpen: boolean }) => {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <AnimatePresence>
            {navOpen && (
                <motion.nav
                    variants={variants}
                    initial={"hidden"}
                    animate={"visible"}
                    exit={"hidden"}
                    className="fixed inset-0 z-[2] bg-gradient-to-bl from-gradient-purple-100 to-gradient-blue-100 sm:static sm:bg-none"
                >
                    <ul
                        className={`text-semibold mt-20 grid place-content-center gap-8 text-center text-3xl text-white
            sm:mt-0 sm:flex sm:text-base sm:font-normal`}
                    >
                        <li>
                            <a
                                className="from-accent-100 to-accent-700 hover:bg-gradient-to-l hover:bg-clip-text hover:text-transparent"
                                href="#"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className="from-accent-100 to-accent-700 hover:bg-gradient-to-l hover:bg-clip-text hover:text-transparent"
                                href="#"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                className="from-accent-100 to-accent-700 hover:bg-gradient-to-l hover:bg-clip-text hover:text-transparent"
                                href="#"
                            >
                                Features
                            </a>
                        </li>
                        <li>
                            <a
                                className="from-accent-100 to-accent-700 hover:bg-gradient-to-l hover:bg-clip-text hover:text-transparent"
                                href="#"
                            >
                                Solution
                            </a>
                        </li>
                    </ul>
                </motion.nav>
            )}
        </AnimatePresence>
    )
}
