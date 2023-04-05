import { ReactNode } from "react"

export const Subtitle = ({ children }: { children: ReactNode }) => {
    return (
        <p className="md:text-lg max-w-md">
            {children}
        </p>
    )
}
