'use client'
import React, { useRef, useEffect } from 'react'

import s from './HorizontalScrollContainer.module.scss'

type HorizontalScrollContainerProps = {
    children: React.ReactNode
}

const HorizontalScrollContainer: React.FC<HorizontalScrollContainerProps> = ({
    children,
}) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleResize = () => {
            const container = containerRef.current
            if (container?.scrollWidth && container?.clientWidth) {
                if (container.scrollWidth > container.clientWidth) {
                    container.classList.add(s.scrollable)
                } else {
                    container.classList.remove(s.scrollable)
                }
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div ref={containerRef} className={`${s.horizontalScrollContainer} `}>
            {children}
        </div>
    )
}

export default HorizontalScrollContainer
