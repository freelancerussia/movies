'use client'
import { GetReviewsFilter, ReviewType } from '@/api/films'
import s from './Reviews.module.scss'
import Container from '@/components/Container/Container'
import ReviewComponent from '@/components/common/ReviewComponent/ReviewComponent'
import { useEffect, useState } from 'react'
import Api from '@/api'
import BlueButton from '@/components/common/BlueButton/BlueButton'

export default function Reviews({ filmId }: { filmId: string }) {
    const [page, setPage] = useState(1)
    const limit = 5
    const [reviews, setReviews] = useState<ReviewType[]>([])
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false)
    const [totalPagesCount, setTotalPagesCount] = useState(0)
    useEffect(() => {
        const filters: GetReviewsFilter = {
            page,
            limit,
            movieId: filmId,
        }
        async function getData() {
            setIsLoading(true)
            try {
                const res = await Api().films.getReviews(filters)
                if (res) {
                    setTotalPagesCount(res.pages)
                    if (page > 1) {
                        setReviews(prev => [...prev, ...res.docs])
                    } else {
                        setReviews(res.docs)
                    }
                }
            } catch (e) {
                //
            }
            setIsLoading(false)
        }
        getData()
    }, [page])
    return (
        <section className={s.section}>
            <Container>
                <h2 className={s.title}>Отзывы</h2>

                {reviews?.map((r, index) => (
                    <ReviewComponent key={r.id + index} review={r} />
                ))}
                {reviews.length ? (
                    <BlueButton
                        className={`${s.showMore} ${page === totalPagesCount ? s.hidden : ''}`}
                        handleClick={() => setPage(prev => ++prev)}
                    >
                        Показать еще
                    </BlueButton>
                ) : (
                    'Отзывов не найдено :('
                )}
            </Container>
        </section>
    )
}
