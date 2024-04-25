export const formatQueryParams = params => {
    const query = []
    if (typeof params === 'object') {
        for (const [key, val] of Object.entries(params)) {
            if ((typeof val === 'string' && val) || typeof val === 'number') {
                query.push(key + '=' + val)
            }
        }
    }

    if (query.length > 0) {
        return '?' + query.join('&')
    }

    return ''
}
