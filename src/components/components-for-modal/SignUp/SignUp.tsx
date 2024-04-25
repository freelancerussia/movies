import Input from '@/components/common/Input/Input'
import s from './SignUp.module.scss'
import Button from '@/components/common/Button/Button'

export default function SignUp({
    setCloseModal,
}: {
    setCloseModal: () => void
}) {
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
                <Input placeholder="Имя" />
                <Input placeholder="Фамилия" />
                <Input placeholder="Придумайте логин" />
                <Input placeholder="Придумайте пароль" />
                <Input placeholder="Повторите пароль" />
                <Input placeholder="Мобильный телефон или e-mail" />
                <Button onClick={() => {}}>Зарегистрироваться</Button>
            </form>
        </div>
    )
}
