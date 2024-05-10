'use client'

import Container from '@/components/Container/Container'
import BlueButton from '@/components/common/BlueButton/BlueButton'
import { useRouter } from 'next/navigation'
import s from './styles/not-found.module.scss'

export default function NotFound() {
    const { replace } = useRouter()
    return (
        <section>
            <Container>
                <div className={s.notFoundContainer}>
                    <h2 className={s.notFoundTitle}>404 </h2>
                    <div className={s.notFoundTitle}>{`Кина не будет :(`}</div>
                    <p className={s.notFoundDescription}>
                        Возможно, данного адреса страницы не сущетсвует, или
                        странциа была перемещена.
                    </p>
                    <BlueButton
                        className={s.btn}
                        handleClick={() => replace('/')}
                    >
                        На главную
                    </BlueButton>
                </div>
            </Container>
        </section>
    )
}
