import { ReactNode } from 'react'

export const EvenColumns = ({ children, className = '' }: { children: ReactNode, className?: string }) => {
    return (
        <section className={`${className} max-w-7xl mx-auto px-7 grid container gap-8 lg:gap-0
        lg:grid-cols-[1fr_49%]`}>
            {children}
        </section>
    )
}
