import { ReactNode } from 'react'
import s from './Container.module.scss'

export default function Container({ children }: { children: ReactNode }) {
    return <div className={s.container}>{children}</div>
}
