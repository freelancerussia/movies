import { hasHTMLTags } from '@/utils/hasHTMLtags'
import s from './Fact.module.scss'

export default function Fact({ fact }: { fact: string }) {
    return (
        <div className={s.container}>
            {hasHTMLTags(fact) ? (
                <p
                    dangerouslySetInnerHTML={{ __html: fact || '' }}
                    className={s.fact}
                />
            ) : (
                <p className={s.fact}>{fact}</p>
            )}
        </div>
    )
}
