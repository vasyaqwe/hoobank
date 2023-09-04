import { motion } from "framer-motion"

export const GradientBlur = ({
    className,
    animate = true,
}: {
    className: string
    animate?: boolean
}) => {
    return animate ? (
        <motion.div
            animate={{ y: [0, 30, 30], x: [0, 50, 50], scale: [1, 1.2, 1] }}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            aria-hidden="true"
            className={`${className} absolute z-[-1] h-[550px] w-[750px] rounded-2xl blur-[325px]`}
        />
    ) : (
        <div
            aria-hidden="true"
            className={`${className} absolute z-[-1] h-[550px] w-[750px] rounded-2xl blur-[325px]`}
        />
    )
}
