import { FilmCardType } from '@/api/films'
import s from './FilmSearchCard.module.scss'
import Rating from '../../Rating/Rating'
import Link from 'next/link'

export default function FilmSearchCard({
    filmCard,
    setSearchPanelClose,
}: {
    filmCard: FilmCardType
    setSearchPanelClose: () => void
}) {
    return (
        <div className={s.cardContainer}>
            <Link
                onClick={setSearchPanelClose}
                className={s.link}
                href={`/films/film/${filmCard.id}`}
            />

            <div className={s.imgContainer}>
                <img
                    src={
                        filmCard.poster.previewUrl ||
                        '/images/default-poster.png'
                    }
                    alt={filmCard.name}
                />
            </div>
            <div className={s.filmInfo}>
                <h4 className={s.title}>{filmCard.name}</h4>
                <span className={s.engTitle}>{filmCard.enName}</span>
                <div className={s.genres}>
                    {filmCard.genres?.reduce(
                        (acc, g) => acc + g.name + ', ',
                        '',
                    )}
                </div>
            </div>
            <Rating rating={filmCard.rating.kp} />
        </div>
    )
}
