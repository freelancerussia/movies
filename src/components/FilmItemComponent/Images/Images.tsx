'use client'
import Container from '@/components/Container/Container'
import s from './Images.module.scss'
import { useEffect, useState } from 'react'
import Api from '@/api'
import { GetReviewsFilter, ImageType } from '@/api/films'

export default function Images({ filmId }: { filmId: string | null }) {
    const [page, setPage] = useState(1)
    const limit = 10
    const [isLoading, setIsLoading] = useState(false)

    const [images, setImages] = useState<ImageType[] | null>(null)
    useEffect(() => {
        const filter: GetReviewsFilter = {
            page,
            limit,
            movieId: filmId,
        }
        async function getData() {
            setIsLoading(true)
            try {
                const res = await Api().films.getImages(filter)
                if (res) {
                    setImages(res.docs)
                }
            } catch (e) {
                //
            }
            setIsLoading(false)
        }
        getData()
    }, [])
    return (
        <section>
            <Container>
                {' '}
                <h2 className={s.title}>Кадры из фильма</h2>
                <div className={s.imagesContainer}>
                    {images?.map((i, index) => {
                        return (
                            <img
                                key={i.previewUrl + index}
                                className={index % 3 === 0 ? s.three : ''}
                                src={i.url}
                                alt={i.type}
                            />
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}
