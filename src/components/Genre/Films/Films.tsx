'use client'

import Container from '@/components/Container/Container'
import s from './Films.module.scss'
import HorizontalFilmCard from './HorizontalFilmCard/HorizontalFilmCard'
import { useEffect, useState } from 'react'
import Api from '@/api'
import { genresFilter } from '@/components/Homepage/NowAtTheCinema/NowAtTheCinema'
import { FilmCardType, FilmsFilterType } from '@/api/films'
import NumbersPagination from '@/components/common/NumbersPagination/NumbersPagination'
import { useSearchParams } from 'next/navigation'

export default function Films({ genre }: { genre: string }) {
    const genreElement = genresFilter.filter(g => g.id === genre)
    const [films, setFilms] = useState<FilmCardType[]>([])
    const [page, setPage] = useState(1)
    const [isFetching, setIsFetching] = useState(false)

    const searchParams = useSearchParams()

    // const [sortField, setSortField] = useState(
    //     searchParams.get('sortField') || '',
    // )
    const sortField = searchParams.get('sortField') || ''
    const sortType = searchParams.get('sortType') || '-1'
    useEffect(() => {
        const filters: FilmsFilterType = {
            page,
            limit: 10,
            sortField,
            ticketsOnSale: true,
            sortType: sortType === '-1' || sortType === '1' ? sortType : '-1',
        }
        if (genreElement[0].id !== 'all') {
            filters['genres.name'] = genreElement[0].value
        }
        async function fetchData() {
            setIsFetching(true)
            try {
                const res = await Api().films.getFilms(filters)
                if (res) {
                    setFilms(res.docs)
                }
            } catch (e: any) {
                console.log(e.message)
            }
            setIsFetching(false)
        }

        fetchData()
    }, [page, sortField, sortType])
    return (
        <section className={s.section}>
            <Container>
                <div
                    className={s.filmsContainer}
                    style={isFetching ? { opacity: 0.5 } : {}}
                >
                    {films.length
                        ? films?.map(f => (
                              <HorizontalFilmCard
                                  key={f.id}
                                  engTitle={f.enName || ''}
                                  genres={f.genres}
                                  poster={f.poster?.previewUrl}
                                  rating={f.rating}
                                  title={f.name}
                                  slug={f.id}
                              />
                          ))
                        : 'Фильмов не найдено'}
                </div>
                <NumbersPagination setPage={setPage} currentPage={page} />
            </Container>
        </section>
    )
}
