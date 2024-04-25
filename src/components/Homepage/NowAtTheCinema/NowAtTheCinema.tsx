'use client'

import { useEffect, useState } from 'react'
import Container from '../../Container/Container'
import s from './NowAtTheCinema.module.scss'
import FilmCard from '../../common/FilmCard/FilmCard'
import Link from 'next/link'
import Api from '@/api'
import { FilmCardType, FilmsFilterType } from '@/api/films'

export default function NowAtTheCinema() {
    const genresFilter = [
        { id: 1, filter: 'Все', value: 'любой' },
        { id: 2, filter: 'Боевики', value: 'боевик' },
        { id: 3, filter: 'Приключения', value: 'приключения' },
        { id: 4, filter: 'Комедии', value: 'комедия' },
        { id: 5, filter: 'Фантастика', value: 'фантастика' },
        { id: 6, filter: 'Триллеры', value: 'триллер' },
        { id: 7, filter: 'Драма', value: 'драма' },
    ]
    const [isActiveFilter, setIsActiveFilter] = useState(genresFilter[0])

    const [films, setFilms] = useState<null | FilmCardType[]>(null)

    useEffect(() => {
        const fetchData = async () => {
            const filters: FilmsFilterType = {
                page: 1,
                limit: 8,
                status: 'completed',
                notNullFields: 'name',
            }
            if (isActiveFilter.id !== 1) {
                filters['genres.name'] = isActiveFilter.value
            } else delete filters['genres.name']

            try {
                const data = await Api().films.getNowAtCinemaFilms(filters)
                if (data.docs.length) {
                    setFilms(data.docs)
                }
                // console.log(data)
            } catch (e) {
                // console.log(e)
            }
        }
        fetchData()
    }, [isActiveFilter])

    return (
        <section>
            <Container>
                <div className={s.titleAndFilterContainer}>
                    <h2 className={s.title}>Сейчас в кино</h2>
                    <ul className={s.filmsFilterContainer}>
                        {genresFilter.map(f => (
                            <li key={f.id}>
                                <button
                                    onClick={() => setIsActiveFilter(f)}
                                    className={`${s.filmsFilterBtn} ${isActiveFilter.id === f.id ? s.active : ''}`}
                                >
                                    {f.filter}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={s.filmCardsContainer}>
                    {films?.length
                        ? films.map(f => (
                              <FilmCard
                                  key={f.id}
                                  genres={f.genres}
                                  name={f.name}
                                  rating={f.rating}
                                  poster={f.poster?.url}
                              />
                          ))
                        : 'Фильов не найдено'}
                </div>
                <Link className={s.allNewFilmsBtn} href={'/'}>
                    Все новинки
                </Link>
            </Container>
        </section>
    )
}
