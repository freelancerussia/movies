'use client'
import Container from '@/components/Container/Container'
import s from './PopularFilms.module.scss'
import FilmCard from '@/components/common/FilmCard/FilmCard'
import Pagination from '@/components/common/Pagination/Pagination'
import Filters from '@/components/common/Filters/Filters'
import { useEffect, useState } from 'react'
import Api from '@/api'
import { FilmCardType, FilmsFilterType } from '@/api/films'

export default function PopularFilms() {
    const filters = [
        { id: '1', title: 'Всё время', value: null },
        { id: '2', title: '2020', value: '2020' },
        { id: '3', title: '2019', value: '2019' },
        { id: '4', title: '2018', value: '2018' },
        { id: '5', title: '2017', value: '2017' },
        { id: '6', title: '2016', value: '2016' },
        { id: '7', title: '2015', value: '2015' },
    ]

    const [page, setPage] = useState(1)
    const [films, setFilms] = useState<FilmCardType[] | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [year, setYear] = useState<string | null>(null)

    const limit = 4

    const filter: FilmsFilterType = {
        page,
        limit,
        sortField: 'votes.kp',
        sortType: '-1' as const,
    }

    if (year) {
        filter['year'] = year
    }

    useEffect(() => {
        setPage(1)
    }, [year])

    useEffect(() => {
        async function getData() {
            setIsLoading(true)
            try {
                const res = await Api().films.getFilms(filter)
                setFilms(res.docs)
                setTotalPages(res.pages)
            } catch (error) {
                // console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [page, year])
    return (
        <section>
            <Container>
                <div className={s.popularFilmsFilterContainer}>
                    <h2 className={`${s.title} ${s.line}`}>
                        Популярные фильмы
                    </h2>
                    <Filters
                        setValue={setYear}
                        value={year}
                        filters={filters}
                    />
                </div>
                <div
                    className={`${s.filmsContainer} ${isLoading ? s.loading : ''}`}
                >
                    {films?.map(f => (
                        <FilmCard
                            genres={f.genres}
                            name={f.name}
                            poster={f.poster.previewUrl}
                            rating={f.rating}
                            slug={f.id}
                            key={f.id}
                        />
                    )) ?? 'Фильмов не найдено :('}
                </div>
                <Pagination
                    limit={limit}
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                />
            </Container>
        </section>
    )
}
