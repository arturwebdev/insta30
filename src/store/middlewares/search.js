const ignoreSpaceInSearch = () => (next) => (action) => {
    if (action.type === 'search/toggleSearch') {
        action.payload = action.payload.replaceAll(' ', '')
    }

    next(action)
}

export default function getSearchMiddlewares() {
    return [
        ignoreSpaceInSearch
    ]
}