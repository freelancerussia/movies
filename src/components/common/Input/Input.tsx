import { useState } from 'react'
import s from './Input.module.scss'

export default function Input({
    placeholder,
    type = 'text',
}: {
    placeholder: string
    type?: string
}) {
    const [inputValue, setValue] = useState('')
    return (
        <label className={s.label}>
            <input
                value={inputValue}
                type={type}
                placeholder={placeholder}
                className={s.input}
                onChange={e => setValue(e.currentTarget.value)}
            />
        </label>
    )
}
