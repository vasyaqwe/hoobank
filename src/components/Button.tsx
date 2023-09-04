import { ReactNode } from "react"
import { cn } from "../lib/utils"

type ButtonProps = React.ComponentProps<"button"> & {
    children: ReactNode
    className?: string
}

export const Button = ({ children, className }: ButtonProps) => {
    return (
        <button
            className={cn(
                `rounded-lg bg-gradient-to-br from-accent-100 via-accent-400 to-accent-700 px-7 py-4 font-medium text-black
                 hover:from-accent-700 hover:to-accent-100 md:text-lg`,
                className
            )}
        >
            {children}
        </button>
    )
}
