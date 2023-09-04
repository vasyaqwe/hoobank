import { ReactNode } from "react"

export const EvenColumns = ({
    children,
    className = "",
}: {
    children: ReactNode
    className?: string
}) => {
    return (
        <section
            className={`${className} container mx-auto grid max-w-7xl gap-8 px-7 lg:grid-cols-[1fr_49%]
        lg:gap-0`}
        >
            {children}
        </section>
    )
}
