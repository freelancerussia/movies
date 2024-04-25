import Rating from '../Rating/Rating'
import s from './FilmCard.module.scss'

type FilmData = {
    rating: number
    percent?: number
    title: string
    genres: string[]
}

export default function FilmCard({
    name,
    genres,
    rating,
    poster,
}: {
    name: string
    genres: { name: string }[]
    rating: {
        kp: number
    }
    poster: string
}) {
    const filmData: FilmData = {
        rating: 8,
        percent: 70,
        title: 'Побег из Претории',
        genres: ['Триллер'],
    }

    const setColorAddInfo = (value: number) => {
        if (!value) return ''
        if (value >= 8) return `${s._8}`
        else if (value >= 6 && value < 8) return `${s._6}`
        else if (value >= 5 && value < 6) return `${s._5}`
        else if (value >= 4 && value < 5) return `${s._4}`
    }

    return (
        <div className={s.filmCard}>
            <div className={s.imgContainer}>
                <img src={poster || '/images/default-poster.png'} alt="img" />
                {filmData.percent && (
                    <span
                        className={`${s.percent} ${s.addInfo} ${setColorAddInfo(filmData.percent / 10)}`}
                    >
                        {filmData.percent}%
                    </span>
                )}
                {/* <span
                    className={`${s.rating} ${s.addInfo} ${setColorAddInfo(rating?.kp)}`}
                >
                    {rating?.kp}
                </span> */}
                <Rating rating={rating?.kp}>{rating?.kp}</Rating>
            </div>
            <div className={s.description}>
                <p className={s.title}>{name}</p>
                <p className={s.genre}>
                    {genres?.reduce((acc, g) => acc + g.name + ', ', '')}
                </p>
            </div>
        </div>
    )
}
