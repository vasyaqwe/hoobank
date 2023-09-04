import { ReactNode } from "react"

export const Subtitle = ({ children }: { children: ReactNode }) => {
    return <p className="max-w-md md:text-lg">{children}</p>
}
