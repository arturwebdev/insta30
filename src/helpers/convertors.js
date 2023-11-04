export const bigNumbersConvertor = (n) => {
    return n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n
}

export const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = () => {
            resolve(reader.result)
        }

        reader.onerror = (err) => {
            reject(err)
        } 
    })
}