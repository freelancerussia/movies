'use client'

import Container from '@/components/Container/Container'
import s from './SubscribeToNewsletter.module.scss'
import { Icons } from '@/components/Icons'
import Link from 'next/link'
import { useState } from 'react'

export default function SubscribeToNewsletter() {
    const [isAgreeWithPolicy, setIsAgreeWithPolicy] = useState(false)
    return (
        <section>
            <Container>
                <div className={s.container}>
                    <span className={s.logo}>
                        {Icons.logoIcon}
                        <span>Kinoarea</span>
                    </span>
                    <h2 className={s.title}>Подпишитесь на E-mail рассылку</h2>
                    <p className={s.subtitle}>
                        Если хотиет быть в курсе последних новостей и новинок
                        кино - заполните форму ниже и оформите бесплатную E-mail
                        рассылку!
                    </p>
                    <div className={s.form}>
                        <div className={s.formTopContainer}>
                            <input
                                className={s.subscribeInput}
                                type="email"
                                placeholder="Введите свой E-mail адрес"
                            />
                            <button className={s.subscribeBtn}>
                                Подписаться
                            </button>
                        </div>
                        <label className={s.checkboxLabel}>
                            <input
                                checked={isAgreeWithPolicy}
                                className={s.checkbox}
                                type="checkbox"
                                onChange={() =>
                                    setIsAgreeWithPolicy(prev => !prev)
                                }
                            />
                            Соглашаюсь на условия &nbsp;
                            <Link href="/">политики конфиденциальности</Link>
                        </label>
                    </div>
                </div>
            </Container>
        </section>
    )
}
