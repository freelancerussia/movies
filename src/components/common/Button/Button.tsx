import { CSSProperties } from 'react'
import s from './Button.module.scss'

export default function Button({
    children,
    onClick,
    style,
}: {
    children: string
    onClick: (e?: Event) => void
    style?: CSSProperties
}) {
    return (
        <button style={style} onClick={e => onClick()} className={s.btn}>
            {children}
        </button>
    )
}
