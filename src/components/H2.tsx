import { ReactNode } from "react"

export const H2 = ({
    children,
    className = "",
}: {
    children: ReactNode
    className?: string
}) => {
    return (
        <h2
            className={`${className} text-4xl font-semibold leading-normal text-white lg:text-5xl lg:leading-normal xl:leading-relaxed`}
        >
            {children}
        </h2>
    )
}
