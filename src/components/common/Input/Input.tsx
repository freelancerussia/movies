import { useState } from 'react'
import s from './Input.module.scss'

export default function Input({
    placeholder,
    type = 'text',
    value,
    setValue,
}: {
    placeholder: string
    type?: string
    value: string
    setValue: (value: string) => void
}) {
    // const [inputValue, setValue] = useState('')
    return (
        <label className={s.label}>
            <input
                value={value}
                type={type}
                placeholder={placeholder}
                className={s.input}
                onChange={e => setValue(e.currentTarget.value)}
            />
        </label>
    )
}
