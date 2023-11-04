import { useCallback, useState } from "react"

export const whithSelectImg = (Component) => {
    return (props) => {
        const [myImg, setMyImg] = useState('')

        const toggleMyImg = useCallback((img) => {
            setMyImg(img)
        }, [])

        const resetMyImg = useCallback(() => {
            setMyImg('')
        }, [])

        return <Component {...props} {...{myImg, resetMyImg, toggleMyImg}} />
    }   
}