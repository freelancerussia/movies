'use client'
import Container from '@/components/Container/Container'
import s from './Facts.module.scss'
import Fact from './Fact/Fact'
import BlueButton from '@/components/common/BlueButton/BlueButton'
import { useState } from 'react'

export default function Facts({
    facts,
}: {
    facts: { value: string }[] | null
}) {
    const limit = 4
    const [totalFactsCount, setTotalFactsCount] = useState(4)
    let length = 0
    if (facts) {
        length = facts.length
    }
    return (
        <section>
            <Container>
                <h2 className={s.title}>Интересные факты</h2>
                {facts?.length
                    ? facts
                          .filter((f, index) => index < totalFactsCount)
                          .map((f, index) => (
                              <Fact key={index} fact={f.value} />
                          ))
                    : 'Фактов не найдено :('}
                <BlueButton
                    className={`${s.showMore} ${totalFactsCount >= length ? s.hidden : ''}`}
                    handleClick={() => setTotalFactsCount(prev => prev + limit)}
                >
                    Показать еще
                </BlueButton>
            </Container>
        </section>
    )
}
