export function formatDateTime(dateTimeString: string) {
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    }
    if (!dateTimeString) return
    const dateTime: Date = new Date(dateTimeString)
    return dateTime.toLocaleDateString('ru-RU', options)
}
