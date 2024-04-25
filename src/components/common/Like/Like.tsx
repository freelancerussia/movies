import { Icons } from '@/components/Icons'
import s from './Like.module.scss'
import { CSSProperties } from 'react'

export default function Like({
    style,
    handleClick,
}: {
    style?: CSSProperties
    handleClick: () => void
}) {
    return (
        <div className={s.likeContainer}>
            <button className={s.like} style={style} onClick={handleClick}>
                {Icons.like}
            </button>
            <div className={s.likesCount}>123</div>
        </div>
    )
}
