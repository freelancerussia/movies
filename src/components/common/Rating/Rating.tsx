import { CSSProperties } from 'react'
import s from './Rating.module.scss'

export default function Rating({
    rating,
    // eslint-disable-next-line no-unused-vars
    styles,
}: {
    rating: number
    styles?: CSSProperties
}) {
    const setColorAddInfo = (value: number) => {
        if (!value) return ''
        if (value >= 8) return `${s._8}`
        else if (value >= 6 && value < 8) return `${s._6}`
        else if (value >= 5 && value < 6) return `${s._5}`
        else if (value >= 4 && value < 5) return `${s._4}`
    }
    return (
        <span
            // styles={styles}
            className={` ${s.addInfo} ${setColorAddInfo(rating)}`}
        >
            {rating}
        </span>
    )
}
