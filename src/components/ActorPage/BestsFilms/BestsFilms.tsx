'use client'
import Container from '@/components/Container/Container'
import s from './BestsFilms.module.scss'
import Pagination from '@/components/common/Pagination/Pagination'
import FilmCard from '@/components/common/FilmCard/FilmCard'
import { useEffect, useState } from 'react'
import Api from '@/api'
import { FilmCardType } from '@/api/films'

export default function BestsFilms({ personId }: { personId: number | null }) {
    const [page, setPage] = useState(1)
    const [films, setFilms] = useState<FilmCardType[] | null>(null)
    const [totalPages, setTotalPages] = useState(0)
    const limit = 4
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        const filters = {
            page,
            limit,
            sortField: 'rating.kp',
            sortType: '-1' as const,
            'persons.id': personId?.toString(),
        }
        async function fetchData() {
            setIsFetching(true)

            const res = await Api().films.getFilms(filters)
            try {
                if (res) {
                    setFilms(res.docs)
                    setTotalPages(res.pages)
                }
            } catch (e) {
                //
            }
            setIsFetching(false)
        }
        fetchData()
    }, [page])

    return (
        <section>
            <Container>
                <div className={s.titleContainer}>
                    <h2 className={s.title}> Лучшие фильмы</h2>
                    <Pagination
                        limit={limit}
                        page={page}
                        setPage={setPage}
                        totalPages={totalPages}
                    />
                </div>
                <div
                    className={`${s.filmsContainer} ${isFetching ? s.fetching : ''}`}
                >
                    {films?.map(f => (
                        <FilmCard
                            key={f.id}
                            genres={f.genres}
                            name={f.name}
                            poster={f.poster.previewUrl}
                            rating={f.rating}
                            slug={f.id}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}
