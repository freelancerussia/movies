import { ReactNode } from 'react'

export function hasHTMLTags(text: string | ReactNode): boolean {
    if (typeof text !== 'string') return false
    const htmlTagsRegex = /<\/?[a-z][\s\S]*>/i
    return htmlTagsRegex.test(text)
}
