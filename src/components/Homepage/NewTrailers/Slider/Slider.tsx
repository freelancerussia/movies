'use client'

import { useState } from 'react'
import 'swiper/css'
import { Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Slider() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
    return (
        <div>
            <Swiper
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                className="trailers-slider"
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => {}}
                // onSwiper={swiper => {}}
                touchEventsTarget="container"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>

            <Swiper
                className="trailers-slider-preview"
                modules={[Thumbs]}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                spaceBetween={20}
                slidesPerView={'auto'}
                freeMode
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </div>
    )
}
