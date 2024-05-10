import Link from 'next/link'

import s from './Breadcrumbs.module.scss'

type CrumbType = {
    label: string
    path?: string
}

export default function Breadcrumbs({
    crumbs,
    classname,
}: {
    crumbs: CrumbType[]
    classname?: string
}) {
    return (
        <nav className={classname}>
            <ul className={s.breadCrumbsContainer}>
                {crumbs.map((crumb, index) => (
                    <li key={index} className={s.link}>
                        {crumb.path ? (
                            <Link href={crumb.path}>{crumb.label}</Link>
                        ) : (
                            <span className={s.currentCategory}>
                                {crumb.label}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
