import { ReactNode } from "react"

export const GradientEl = ({ children }: { children: ReactNode }) => {
    return (
        <span className="text-transparent bg-clip-text bg-gradient-to-l from-accent-100 to-accent-700">
            {children}
        </span>
    )
}
