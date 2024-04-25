'use client'

import Container from '@/components/Container/Container'
import s from './NewTrailers.module.scss'
import Link from 'next/link'
import { Icons } from '@/components/Icons'
import HorizontalScrollContainer from '@/components/common/HorizontalScrollContainer/HorizontalScrollContainer'
import { useState } from 'react'
import Like from '@/components/common/Like/Like'

export default function NewTrailers() {
    const trailersPreview = [
        {
            id: 1,
            title: 'Форсаж1',
            imageSrs: '/images/homepage/small-trailer.jpeg',
            videoSrs: '/videos/trailer.mp4',
        },
        {
            id: 2,
            title: 'Форсаж2',
            imageSrs: '/images/homepage/small-trailer.jpeg',
            videoSrs: '/videos/trailer-2.mp4',
        },
        {
            id: 3,
            title: 'Форсаж3',
            imageSrs: '/images/homepage/small-trailer.jpeg',
            videoSrs: '/videos/trailer.mp4',
        },
        {
            id: 4,
            title: 'Форсаж4',
            imageSrs: '/images/homepage/small-trailer.jpeg',
            videoSrs: '/videos/trailer-2.mp4',
        },
        {
            id: 5,
            title: 'Форсаж5',
            imageSrs: '/images/homepage/small-trailer.jpeg',
            videoSrs: '/videos/trailer.mp4',
        },
    ]

    const [activeTrailerPreview, setActiveTrailerPreview] = useState(
        trailersPreview[0],
    )

    return (
        <section className={s.section}>
            <Container>
                <div className={s.titleAndLinkContainer}>
                    <h2 className={s.title}>Новые трейлеры</h2>
                    <Link className={s.allTrailersBtn} href={'/'}>
                        Все трейлеры <span>{Icons.arrow}</span>
                    </Link>
                </div>
                <div className={s.videoContainer}>
                    <video src={activeTrailerPreview.videoSrs} controls />{' '}
                </div>
                <div className={s.trailerInfo}>
                    <div className={s.trailerVideotitle} />
                    <div className={s.feedbackButtons}>
                        <h3 className={s.trailerTitle}>
                            {activeTrailerPreview.title}
                        </h3>
                        <div className={s.likesContainer}>
                            <Like handleClick={() => console.log('like')} />
                            <Like
                                style={{ transform: 'rotate(180deg)' }}
                                handleClick={() => console.log('dislike')}
                            />
                        </div>
                    </div>
                </div>
                <HorizontalScrollContainer>
                    <div className={s.videoPreview}>
                        {trailersPreview?.map(tp => (
                            <div
                                key={tp.id}
                                className={`${s.videoPreviewElement} ${tp.id === activeTrailerPreview.id ? s.active : ''}`}
                                onClick={() => {
                                    setActiveTrailerPreview(tp)
                                }}
                            >
                                <img
                                    src="/images/homepage/small-trailer.jpeg"
                                    alt="title"
                                />
                                <span className={s.play}>{Icons.play}</span>
                            </div>
                        ))}
                    </div>
                </HorizontalScrollContainer>
            </Container>
        </section>
    )
}
