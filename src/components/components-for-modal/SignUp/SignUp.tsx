'use client'
import Input from '@/components/common/Input/Input'
import s from './SignUp.module.scss'
import Button from '@/components/common/Button/Button'
import { useState } from 'react'

export default function SignUp({
    setCloseModal,
}: {
    setCloseModal: () => void
}) {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [replyPassword, setReplyPassword] = useState('')
    const [email, setEmail] = useState('')
    return (
        <div className={s.container}>
            <img
                src={'/images/homepage/close.png'}
                alt="close"
                className={s.close}
                onClick={setCloseModal}
            />
            <h2 className={s.title}>Зарегистрироваться</h2>
            <form className={s.form} action="#">
                <Input setValue={setName} value={name} placeholder="Имя" />
                <Input
                    setValue={setLastName}
                    value={lastName}
                    placeholder="Фамилия"
                />
                <Input
                    setValue={setLogin}
                    value={login}
                    placeholder="Придумайте логин"
                />
                <Input
                    setValue={setPassword}
                    value={password}
                    placeholder="Придумайте пароль"
                />
                <Input
                    setValue={setReplyPassword}
                    value={replyPassword}
                    placeholder="Повторите пароль"
                />
                <Input
                    setValue={setEmail}
                    value={email}
                    placeholder="Мобильный e-mail"
                />
                <Button onClick={() => {}}>Зарегистрироваться</Button>
            </form>
        </div>
    )
}
