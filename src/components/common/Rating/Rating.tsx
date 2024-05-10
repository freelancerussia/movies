import { CSSProperties } from 'react'
import s from './Rating.module.scss'

export default function Rating({
    rating,
    // eslint-disable-next-line no-unused-vars
    styles,
}: {
    rating: number | string
    styles?: CSSProperties
}) {
    const setColorAddInfo = (value: number | string) => {
        if (!value) return ''
        const number = +value
        if (number) {
            if (number >= 9) return `${s._10}`
            else if (number >= 8 && number < 9) return `${s._9}`
            else if (number >= 7 && number < 8) return `${s._8}`
            else if (number >= 6 && number < 7) return `${s._7}`
            else if (number >= 5 && number < 6) return `${s._6}`
            else if (number >= 4 && number < 5) return `${s._5}`
            else if (number >= 3 && number < 4) return `${s._4}`
            else if (number >= 2 && number < 3) return `${s._3}`
            else if (number >= 1 && number < 2) return `${s._2}`
            else if (number >= 0 && number < 1) return `${s._1}`
        } else {
            return `${s._0}`
        }
    }
    return (
        <span
            style={styles}
            className={` ${s.addInfo} ${setColorAddInfo(rating)}`}
        >
            {rating}
        </span>
    )
}
