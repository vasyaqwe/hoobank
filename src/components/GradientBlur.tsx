import { motion } from 'framer-motion'

export const GradientBlur = ({ className, animate = true }: { className: string, animate?: boolean }) => {
    return (
        // animate ? <motion.div animate={{ y: [0, 30, 30], x: [0, 50, 50], scale: [1, 1.2, 1], }}
        //     transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", }}
        //     aria-hidden="true" className={`${className} w-[750px] blur-[325px] z-[-1] h-[550px] rounded-3xl absolute`} /> :
        //     <div aria-hidden="true" className={`${className} w-[750px] blur-[325px] z-[-1] h-[550px] rounded-3xl absolute`} />
        <div></div>
    )
}
