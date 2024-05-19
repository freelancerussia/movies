'use client'

import Container from '@/components/Container/Container'
import s from './ExpectedReleases.module.scss'
import Pagination from '@/components/common/Pagination/Pagination'
import FilmCard from '@/components/common/FilmCard/FilmCard'
import { useEffect, useState } from 'react'
import { FilmCardType, FilmsFilterType } from '@/api/films'
import Api from '@/api'

export default function ExpectedReleases() {
    const [page, setPage] = useState(1)
    const [films, setFilms] = useState<FilmCardType[] | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [totalPages, setTotalPages] = useState(0)

    const limit = 4
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const filterYear = `${currentYear + 1}-${currentYear + 5}`

    const filter: FilmsFilterType = {
        page,
        limit,
        sortField: 'votes.await',
        'releaseYears.end': filterYear,
        sortType: '-1' as const,
    }

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
    }, [page])
    return (
        <section>
            <Container>
                <div className={s.titleContainer}>
                    <h2 className={s.title}>Ожидаемые новинки</h2>
                    <Pagination
                        limit={limit}
                        page={page}
                        setPage={setPage}
                        totalPages={totalPages}
                    />
                </div>

                <div
                    className={`${s.releasesContainer} ${isLoading ? s.loading : ''}`}
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
