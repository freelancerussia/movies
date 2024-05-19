'use client'

import Container from '../Container/Container'
import s from './Header.module.scss'
import SearchButton from '../common/SearchButton/SearchButton'
import Logo from './Logo/Logo'
import BlueButton from '../common/BlueButton/BlueButton'
import Menu from './Menu/Menu'
import Burger from './Burger/Burger'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import SignIn from '../components-for-modal/SignIn/SignIn'
import SignUp from '../components-for-modal/SignUp/SignUp'

export default function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const [activeModal, setActiveModal] = useState(false)

    const onOpenMenu = () => {
        setIsOpenMenu(true)
    }
    const onCloseMenu = () => {
        setIsOpenMenu(false)
    }
    const setCloseModal = () => {
        setActiveModal(false)
    }
    const setSingUp = () => {
        setSign('up')
    }
    const [sign, setSign] = useState<'in' | 'up'>('in')
    return (
        <Container>
            <div className={s.header}>
                <Burger onOpenMenu={onOpenMenu} />
                <div className={s.logoContainer}>
                    <Logo />
                </div>
                <Menu isOpenMenu={isOpenMenu} onCloseMenu={onCloseMenu} />
                <div className={s.searchContainer}>
                    <SearchButton />
                </div>
                <div className={s.loginBtnContainer}>
                    {
                        <BlueButton
                            handleClick={() => {
                                setSign('in')
                                setActiveModal(true)
                            }}
                            className={s.loginBtn}
                        >
                            Войти
                        </BlueButton>
                    }
                </div>
            </div>
            <Modal active={activeModal} setActive={setActiveModal}>
                {sign === 'in' ? (
                    <SignIn
                        setSingUp={setSingUp}
                        setCloseModal={setCloseModal}
                    />
                ) : (
                    <SignUp setCloseModal={setCloseModal} />
                )}
            </Modal>
        </Container>
    )
}
