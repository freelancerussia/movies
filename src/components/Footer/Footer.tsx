'use client'
import Container from '@/components/Container/Container'
import s from './Footer.module.scss'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={s.footer}>
            <Container>
                <nav className={s.footerMenu}>
                    <ul className={s.footerMenuList}>
                        <li>
                            <Link className={s.footerLink} href="/afisha">
                                Афиша фильмов
                            </Link>
                        </li>
                        <li>
                            <Link className={s.footerLink} href="/news">
                                Новости
                            </Link>
                        </li>
                        <li>
                            <Link className={s.footerLink} href="/persons">
                                Персоны
                            </Link>
                        </li>
                        <li>
                            <Link className={s.footerLink} href="/raitings">
                                Рейтинги
                            </Link>
                        </li>
                        <li>
                            <Link className={s.footerLink} href="/reviews">
                                Рецензии
                            </Link>
                        </li>
                        <li>
                            <Link className={s.footerLink} href="/catalog">
                                Каталог
                            </Link>
                        </li>
                    </ul>
                </nav>
                <p className={s.copyright}>
                    &copy; 2024 Ваше название компании. Все права защищены.
                </p>
                <p className={s.privatePolitic}>
                    <Link href="/">Политика конфиденциальности</Link>
                </p>
            </Container>
        </footer>
    )
}
