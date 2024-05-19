import { Icons } from '@/components/Icons'
import s from './SearchButton.module.scss'
import { useState } from 'react'
import SearchPanel from './SearchPanel/SearchPanel'

export default function SearchButton() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <div className={s.searchContainer}>
            <button onClick={() => setIsSearchOpen(true)} className={s.btn}>
                {Icons.search}
            </button>
            {isSearchOpen && <SearchPanel setIsSearchOpen={setIsSearchOpen} />}
        </div>
    )
}
