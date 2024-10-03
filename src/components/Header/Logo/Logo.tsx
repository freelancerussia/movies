import s from './Logo.module.scss'
import { Icons } from '../../Icons'
import Link from 'next/link'
import { CSSProperties } from 'react'

export default function Logo({ style }: { style?: CSSProperties }) {
    return (
        <div className={s.logoContainer}>
            <div className={s.logo}>
                 <Link href={'/'}>
                    {Icons.logoIcon} <span> Kino</span>area
                </Link>
            </div>
            <div className={s.logoSocials} style={style}>
                <ul className={s.socialsList}>
                    <li className={s.socialsElement}>
                        <Link href={'/'}>{Icons.vk}</Link>
                    </li>
                    <li className={s.socialsElement}>
                        <Link href={'/'}>{Icons.inst}</Link>
                    </li>
                    <li className={s.socialsElement}>
                        <Link href={'/'}>{Icons.fb}</Link>
                    </li>
                    <li className={s.socialsElement}>
                        <Link href={'/'}>{Icons.tw}</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
