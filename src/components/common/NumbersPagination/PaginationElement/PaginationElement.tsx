import { CSSProperties } from 'react'
import s from './PaginationElement.module.scss'

export default function PaginationElement({
    children,
    style,
    onClick,
    disabled,
}: {
    children: any
    style?: CSSProperties
    onClick: () => void
    disabled?: boolean
}) {
    return (
        <button
            disabled={disabled}
            style={style}
            onClick={onClick}
            className={s.element}
        >
            {children}
        </button>
    )
}
