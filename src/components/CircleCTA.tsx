import { GradientEl } from "./GradientEl"
import arrowIcon from "../assets/arrow.svg"
import { motion } from "framer-motion"

export const CircleCTA = ({ className = "" }: { className?: string }) => {
    const variants = {
        initial: { y: 0, x: 0 },
        hover: { y: -4, x: 4 },
    }
    return (
        <motion.a
            href="#"
            whileHover={"hover"}
            className={`${className} grid h-24 w-24 rounded-full bg-gradient-to-r from-accent-100 to-accent-400
        md:h-32 md:w-32 lg:h-36 lg:w-36`}
            style={{ padding: ".2rem" }}
        >
            <span
                className="grid h-full w-full place-items-center rounded-full
             bg-primary-800 text-sm font-medium sm:text-base lg:text-lg"
            >
                <GradientEl>
                    Get{" "}
                    <motion.img
                        variants={variants}
                        className="inline"
                        src={arrowIcon}
                        alt={"arrow pointing in the top right direction"}
                    />{" "}
                    <br /> Started
                </GradientEl>
            </span>
        </motion.a>
    )
}
