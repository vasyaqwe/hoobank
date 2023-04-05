import { ReactNode } from "react"

export const H2 = ({ children, className = '' }: { children: ReactNode, className?: string }) => {
    return (
        <h2 className={`${className} text-white text-4xl font-semibold lg:text-5xl lg:leading-normal leading-normal xl:leading-relaxed`}>
            {children}
        </h2>
    )
}
