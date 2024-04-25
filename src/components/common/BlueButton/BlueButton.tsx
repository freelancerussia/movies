import s from './BlueButton.module.scss'

export default function BlueButton({
    className,
    children,
    handleClick,
}: {
    className: string
    children: string
    handleClick: () => void
}) {
    return (
        <button onClick={handleClick} className={`${s.btn} ${className}`}>
            {children}
        </button>
    )
}
