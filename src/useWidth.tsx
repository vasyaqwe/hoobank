import { useState, useEffect } from "react"

export const useWidth = () => {
    const [width, setWidth] = useState<undefined | number>(undefined)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        handleResize()
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const smallScreen = width !== undefined && width < 640
    const mediumScreen = width !== undefined && width < 850

    return { width, smallScreen, mediumScreen }
}
