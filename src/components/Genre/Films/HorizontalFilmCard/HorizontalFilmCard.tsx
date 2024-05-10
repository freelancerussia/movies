import Rating from '@/components/common/Rating/Rating'
import s from './HorizontalFilmCard.module.scss'
import BlueButton from '@/components/common/BlueButton/BlueButton'
import { useRouter } from 'next/navigation'

export default function HorizontalFilmCard({
    title,
    engTitle,
    genres,
    poster,
    rating,
    slug,
}: {
    title: string
    engTitle: string
    genres: { name: string }[]
    poster: string
    rating: {
        kp: number
        imdb: number
    }
    slug: number
}) {
    const router = useRouter()
    return (
        <div className={s.horizontalFilmCard}>
            <div className={s.imgContainer}>
                <img src={poster || '/images/default-poster.png'} alt={title} />
            </div>
            <div className={s.filmInfo}>
                <h4 className={s.title}>{title}</h4>
                <span className={s.engTitle}>{engTitle}</span>
                <div className={s.genres}>
                    {genres?.reduce((acc, g) => acc + g.name + ', ', '')}
                </div>
            </div>
            <div className={s.ratingsContainer}>
                <div className={s.ratingElement}>
                    <Rating rating={rating.kp} />
                    <span className={s.ratingElementTitle}>kp</span>
                </div>
                <div className={s.ratingElement}>
                    <Rating rating={rating.imdb} />
                    <span className={s.ratingElementTitle}>imdb</span>
                </div>
            </div>
            <BlueButton
                handleClick={() => {
                    router.push(`/films/film/${slug}`)
                }}
                className={s.filmCardBtn}
            >
                Карточка фильма
            </BlueButton>{' '}
        </div>
    )
}
