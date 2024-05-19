import Link from 'next/link'
import Rating from '../Rating/Rating'
import s from './FilmCard.module.scss'

export default function FilmCard({
    name,
    genres,
    rating,
    poster,
    slug,
}: {
    name: string
    genres: { name: string }[]
    rating: {
        kp: number
        imdb: number
    }
    poster: string
    slug: number
}) {
    return (
        <div className={s.filmCard}>
            <Link className={s.link} href={`/films/film/${slug}`} />
            <div className={s.imgContainer}>
                <img src={poster || '/images/default-poster.png'} alt="img" />
                {/* {filmData.percent && (
                    <span
                        className={`${s.percent} ${s.addInfo} ${setColorAddInfo(filmData.percent / 10)}`}
                    >
                        {filmData.percent}%
                    </span>
                )} */}
                <Rating
                    styles={{ left: '12.5px', position: 'absolute' }}
                    rating={rating?.imdb}
                />
                <Rating
                    styles={{ right: '12.5px', position: 'absolute' }}
                    rating={rating?.kp}
                />
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
