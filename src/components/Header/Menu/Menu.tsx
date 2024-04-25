'use client'

import Logo from '../Logo/Logo'
import s from './Menu.module.scss'
import Link from 'next/link'

export default function Menu({
    isOpenMenu,
    onCloseMenu,
}: {
    isOpenMenu: boolean
    onCloseMenu: () => void
}) {
    return (
        <nav className={`${s.menu} ${isOpenMenu ? s.open : ''}`}>
            <div className={s.menuLogo}>
                <Logo style={{ display: 'none' }} />
            </div>
            <ul className={s.menuList}>
                <li className={s.menuElement}>
                    <Link href="/">Афиша</Link>
                </li>
                <li className={s.menuElement}>
                    <Link href="/">Медиа </Link>
                </li>
                <li className={s.menuElement}>
                    <Link href="/"> Фильмы </Link>
                </li>
                <li className={s.menuElement}>
                    <Link href="/">Актёры </Link>
                </li>
                <li className={s.menuElement}>
                    <Link href="/"> Новости </Link>
                </li>
                <li className={s.menuElement}>
                    <Link href="/"> Подборки </Link>
                </li>
                <li className={s.menuElement}>
                    <Link href="/"> Категории</Link>
                </li>
            </ul>
            <button onClick={onCloseMenu} className={s.closeMenuBtn}>
                x
            </button>
        </nav>
    )
}
