'use client'

import Input from '@/components/common/Input/Input'
import s from './SignIn.module.scss'
import Button from '@/components/common/Button/Button'
import { LoginApi } from '@/api/login'
import { useEffect, useState } from 'react'
import { validateEmail } from '@/utils/validateEmail'

export default function SignIn({
    setCloseModal,
    setSingUp,
}: {
    setCloseModal: () => void
    setSingUp: () => void
}) {
    // eslint-disable-next-line no-unused-vars
    const [fakeAuth, setFakeAuth] = useState<boolean>(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)

    function checkError() {
        if (email.length === 0 || password.length === 0) {
            setError('Заполните все поля')
            return true
        } else if (password.length < 6) {
            setError('Пароль должен быть длинной 6 и более символов')
            return true
        } else if (!validateEmail(email)) {
            setError('Введите корректный email')
            return true
        } else {
            setError(null)
        }
    }

    async function Login() {
        checkError()
        try {
            const res = await LoginApi()

            if (res) {
                setFakeAuth(res.data.isAuth)
                localStorage.setItem('email', email)
            }
        } catch (err) {
            //
        }
    }
    useEffect(() => {
        setError(null)
    }, [email, password])

    return (
        <div className={s.container}>
            <img
                src={'/images/homepage/close.png'}
                alt="close"
                className={s.close}
                onClick={setCloseModal}
            />
            <h2 className={s.title}>Войти</h2>
            <form className={s.form} action="#">
                <Input
                    value={email}
                    setValue={setEmail}
                    placeholder="Логин, почта или пароль"
                />
                <Input
                    setValue={setPassword}
                    value={password}
                    placeholder="Ваш пароль"
                    type="password"
                />
                <span className={s.error}>{error}</span>
                <button
                    className={s.btn}
                    onClick={e => {
                        e?.preventDefault()
                        Login()
                    }}
                >
                    Войти
                </button>
                <Button
                    style={{
                        backgroundColor: 'rgb(30, 37, 56)',
                        color: '#fff',
                    }}
                    onClick={setSingUp}
                >
                    Зарегистрироваться
                </Button>
                {/* <button className={s.btn}>Войти</button> */}
            </form>
        </div>
    )
}
