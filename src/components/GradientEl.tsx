import { ReactNode } from "react"

export const GradientEl = ({ children }: { children: ReactNode }) => {
    return (
        <span className="bg-gradient-to-l from-accent-100 to-accent-700 bg-clip-text text-transparent">
            {children}
        </span>
    )
}
