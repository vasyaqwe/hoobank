import { GradientEl } from "./GradientEl"
import arrowIcon from '../assets/arrow.svg'
import { motion } from 'framer-motion'

export const CircleCTA = ({ className = '' }: { className?: string }) => {
    const variants = {
        initial: { y: 0, x: 0 },
        hover: { y: -4, x: 4 }
    }
    return (
        <motion.a href="#" whileHover={'hover'} className={`${className} h-24 grid w-24 md:w-32 md:h-32 lg:w-36 lg:h-36
        rounded-full bg-gradient-to-r from-accent-100 to-accent-400`} style={{ padding: '.2rem' }}>
            <span className="h-full grid place-items-center w-full rounded-full
             bg-primary-800 text-sm sm:text-base lg:text-lg font-medium">
                <GradientEl>
                    Get <motion.img variants={variants}
                        className="inline" src={arrowIcon} alt={'arrow pointing in the top right direction'} /> <br />  Started
                </GradientEl>
            </span>
        </motion.a>
    )
}
