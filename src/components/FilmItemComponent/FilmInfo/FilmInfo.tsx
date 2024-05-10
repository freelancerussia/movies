'use client'
import Container from '@/components/Container/Container'
import s from './FilmInfo.module.scss'
import Breadcrumbs from '@/components/common/Breadcrumbs/Breadcrumbs'
import CircleRating from './CircleRating/CircleRating'
import Link from 'next/link'
import { Icons } from '@/components/Icons'
import { FilmCardType } from '@/api/films'

export default function FilmInfo({
    filmItem,
}: {
    filmItem: FilmCardType | null
}) {
    return (
        <section className={s.section}>
            <div className={s.background}>
                <img
                    // className={s.background}
                    src={filmItem?.backdrop.url}
                    alt=""
                />
            </div>

            <Container>
                {' '}
                <div className={s.topContainer}>
                    <div className={s.imgContainer}>
                        <img src={filmItem?.poster.url} alt="" />
                    </div>
                    <div className={s.infoContainer}>
                        <Breadcrumbs
                            crumbs={[
                                { label: 'Главная', path: '/' },
                                { label: 'Фильмы', path: '/films/all' },
                                {
                                    label:
                                        filmItem?.name || 'Названия не найдено',
                                    path: '',
                                },
                            ]}
                        />

                        <h2 className={s.title}>{filmItem?.name}</h2>
                        <h4 className={s.enTitle}>{filmItem?.enName || ''}</h4>
                        <div className={s.ratingsContainer}>
                            <CircleRating
                                rating={filmItem?.rating.kp || 0}
                                title="Kinopoisk"
                            />
                            <CircleRating
                                rating={filmItem?.rating.imdb || 0}
                                title="IMDb"
                            />
                        </div>
                    </div>
                    <p className={s.description}>{filmItem?.description}</p>
                    {/* <Link className={s.showTrailerBtn} href={'/'}>
                        {Icons.transparentPlay} Смотреть трейлер
                    </Link> */}
                </div>
                <div className={s.aboutFilm}>
                    <div className={s.leftColumn}>
                        <div className={s.aboutFilmElement}>
                            <span className={s.characteristic}>Год:</span>{' '}
                            <span className={s.infoText}>{filmItem?.year}</span>
                        </div>
                        <div className={s.aboutFilmElement}>
                            <span className={s.characteristic}>Страна:</span>{' '}
                            <span className={s.infoText}>
                                {filmItem?.countries.reduce(
                                    (acc, item) => acc + item.name + ', ',
                                    '',
                                )}
                            </span>{' '}
                        </div>
                        <div className={s.aboutFilmElement}>
                            <span className={s.characteristic}>Слоган:</span>{' '}
                            <span className={s.infoText}>
                                {filmItem?.slogan}
                            </span>
                        </div>
                        <div className={s.aboutFilmElement}>
                            <span className={s.characteristic}>Премьера:</span>{' '}
                            <span className={s.infoText}>
                                {filmItem?.premiere.world}
                            </span>
                        </div>
                    </div>
                    <div className={s.rightColumn}>
                        <div className={s.aboutFilmElement}>
                            <span className={s.characteristic}>Режиссер:</span>{' '}
                            <span className={s.infoText}>{}</span>{' '}
                        </div>
                        <div className={s.aboutFilmElement}>
                            <span className={s.characteristic}>Жанр:</span>{' '}
                            <span className={s.infoText}>
                                {filmItem?.genres.reduce(
                                    (acc, item) => acc + item.name + ', ',
                                    '',
                                )}
                            </span>{' '}
                        </div>
                        <div className={s.aboutFilmElement}>
                            <span className={s.characteristic}>
                                Сборы в мире:
                            </span>{' '}
                            <span className={s.infoText}>{}</span>
                        </div>
                        <div className={s.aboutFilmElement}>
                            <span className={s.characteristic}>Время:</span>{' '}
                            <span className={s.infoText}>
                                {filmItem?.movieLength}
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
