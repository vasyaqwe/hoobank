import heroImg from "../assets/heroImg.png"
import { motion, useScroll, useTransform } from "framer-motion"
import ball1 from "../assets/ball1.svg"
import ball2 from "../assets/ball2.svg"
import ball3 from "../assets/ball3.svg"
import { useRef } from "react"
import { useWidth } from "../useWidth"
export const HeroImg = () => {
    const ref = useRef(null)
    const { mediumScreen } = useWidth()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })
    const y1 = useTransform(
        scrollYProgress,
        [0, 1],
        mediumScreen ? ["0rem", "-32rem"] : ["0rem", "-32rem"]
    )
    const y2 = useTransform(
        scrollYProgress,
        [0, 1],
        mediumScreen ? ["0rem", "-84rem"] : ["0rem", "-102rem"]
    )
    const y3 = useTransform(
        scrollYProgress,
        [0, 1],
        mediumScreen ? ["0rem", "-86rem"] : ["0rem", "-110rem"]
    )
    const className = `absolute w-[300px] h-[500px] z-[-1]`

    return (
        <div className="relative ml-auto grid max-w-[572px] pl-5">
            <motion.img
                className="absolute bottom-[35%] left-10"
                style={{ y: y1 }}
                src={ball1}
                alt={"a floating blue ball"}
            />
            <motion.img
                className="absolute bottom-[38%] right-[10%] md:right-[30%]"
                style={{ y: y2 }}
                src={ball2}
                alt={"a floating blue ball"}
            />
            <motion.img
                className="absolute left-[10%] top-[-50px] md:left-auto"
                src={ball3}
                style={{ y: y3 }}
                alt={"a floating blue ball"}
            />
            <img
                className="justify-self-end"
                src={heroImg}
                alt=""
            />
            <div
                className="shapes-wrapper absolute min-h-[600px] w-full"
                aria-hidden={"true"}
            >
                <motion.div
                    className={`${className} blurred-bg 
                left-[11%] rounded-full bg-gradient-to-br from-gradient-purple-400 to-gradient-blue-400  blur-2xl `}
                    animate={{ y: [0, 10, 10], scale: [1, 1.2, 1] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </div>
        </div>
    )
}
