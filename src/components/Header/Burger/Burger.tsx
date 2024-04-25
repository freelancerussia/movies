import s from './Burger.module.scss'

export default function Burger({ onOpenMenu }: { onOpenMenu: () => void }) {
    return (
        <button onClick={onOpenMenu} className={s.burgerBtn}>
            <span className={s.burgerLines} />
        </button>
    )
}
