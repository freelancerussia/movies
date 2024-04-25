import Input from '@/components/common/Input/Input'
import s from './SignIn.module.scss'
import Button from '@/components/common/Button/Button'

export default function SignIn({
    setCloseModal,
    setSingUp,
}: {
    setCloseModal: () => void
    setSingUp: () => void
}) {
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
                <Input placeholder="Логин, почта или пароль" />
                <Input placeholder="Ваш пароль" type="password" />
                <Button onClick={() => {}}>Войти</Button>
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
                <button onClick={setSingUp} className={s.btn}>
                    Зарегистрироваться
                </button>
            </form>
        </div>
    )
}
