import React, { ReactNode } from 'react'

export const Button = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <button className={`bg-gradient-to-br ${className}
         from-accent-100 via-accent-400 to-accent-700 hover:from-accent-700 hover:to-accent-100
          text-black py-4 px-7 rounded-lg font-medium md:text-lg`}>
            {children}
        </button>
    )
}
