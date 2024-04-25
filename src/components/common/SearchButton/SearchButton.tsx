import { Icons } from '@/components/Icons'
import s from './SearchButton.module.scss'

export default function SearchButton() {
    return <button className={s.btn}>{Icons.search}</button>
}
