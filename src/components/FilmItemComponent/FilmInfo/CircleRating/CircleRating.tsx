'use client'

import s from './CircleRating.module.scss'

import { Chart as ChartJS, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement)

export default function CircleRating({
    rating,
    title,
}: {
    rating: number
    title: string
}) {
    const setColor = () => {
        if (rating >= 9) return 'rgb(40, 255, 4)'
        if (rating >= 8 && rating < 9) return 'rgb(52, 234, 22)'
        if (rating >= 7 && rating < 8) return 'rgb(75, 203, 54)'
        if (rating >= 6 && rating < 7) return 'rgb(120, 203, 54)'
        else if (rating >= 5 && rating < 6) return `rgb(137, 203, 54)`
        else if (rating >= 4 && rating < 5) return `rgb(203, 108, 54)`
        else if (rating >= 3 && rating < 4) return `rgb(203, 63, 54)`
        else if (rating >= 2 && rating < 3) return `rgb(218, 52, 52)`
        else if (rating >= 1 && rating < 2) return `rgb(241, 48, 48)`
        else if (rating >= 0 && rating < 1) return `rgb(255, 0, 0);`
    }
    const data = {
        //  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                // label: '# of Votes',
                data: [rating, 10 - rating],
                backgroundColor: [setColor(), 'transparent'],
                borderColor: ['transparent'],
                radius: 35,
            },
        ],
    }

    const setColorAddInfo = (value: number | string) => {
        if (!value) return ''
        const number = +value
        if (number) {
            if (number >= 9) return `${s._10}`
            else if (number >= 8 && number < 9) return `${s._9}`
            else if (number >= 7 && number < 8) return `${s._8}`
            else if (number >= 6 && number < 7) return `${s._7}`
            else if (number >= 5 && number < 6) return `${s._6}`
            else if (number >= 4 && number < 5) return `${s._5}`
            else if (number >= 3 && number < 4) return `${s._4}`
            else if (number >= 2 && number < 3) return `${s._3}`
            else if (number >= 1 && number < 2) return `${s._2}`
            else if (number >= 0 && number < 1) return `${s._1}`
        } else {
            return `${s._0}`
        }
    }
    return (
        <div className={s.container}>
            <div className={`${s.ratingGraph} ${setColorAddInfo(rating)}`}>
                <Doughnut data={data} />
                <div className={s.ratingCount}>{rating ? rating : '-'}</div>
            </div>
            <span>{title}</span>
        </div>
    )
}
