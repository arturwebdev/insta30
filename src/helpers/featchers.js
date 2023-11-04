
export const syncTimeOut = (ms) => {
    const end = new Date().getTime() + ms
    
    while (true) {
        const now = new Date().getTime()
        if (now >= end) {
            return
        }
    }
}