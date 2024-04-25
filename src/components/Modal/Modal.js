import { useCallback, useEffect } from 'react'
import s from './Modal.module.scss'
import Logo from '../Header/Logo/Logo'

const Modal = ({ active, setActive, children }) => {
    const escFunc = useCallback(e => {
        if (e.key === 'Escape') {
            setActive(false)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', escFunc, false)
        return () => {
            document.removeEventListener('keydown', escFunc, false)
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            const element = document.querySelector('html')
            const newScrollWidth = window.innerWidth - element.offsetWidth

            if (active) {
                element.style.marginRight = newScrollWidth + 'px'
                element.style.overflow = 'hidden'
            } else {
                element.style.marginRight = 0
                //тут остановился
                element.style.overflow = 'auto'
            }

            // setScrollWidth(newScrollWidth)
        }

        // Выполняем вычисления при монтировании компонента и при изменении размера окна
        handleResize()
        window.addEventListener('resize', handleResize)

        // Очищаем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [active])

    return (
        <div
            className={`${s.overflow} ${active && s.active}`}
            onClick={() => setActive(false)}
        >
            <div className={s.modal} onClick={e => e.stopPropagation()}>
                <Logo />
                {children}
            </div>
        </div>
    )
}

export default Modal
