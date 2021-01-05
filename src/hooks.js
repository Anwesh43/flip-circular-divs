import {useState, useEffect} from 'react'

const delay = 20 
const scGap = 0.02 
export const useAnimatedScale = (n) => {
    const [scale, setScale] = useState(0.02, 20)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale 
                const interval = setInterval(() => {
                    currScale += (scGap / n)
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
    })
}

const maxScale = (scale, i, n) => Math.max(0, scale - i / n)

const divideScale = (scale, i, n) => Math.min(1 / n, maxScale(scale, i, n)) * n 

const sinify = (scale) => Math.sin(scale * Math.PI)

export const useStyle = ({w, h, n, scale}) => {
    const sf = sinify(scale)   
    const position = 'absolute'
    const size = w / n
    const top = `${h / 2 - size / 2}px`
    const background = 'green'
    return {
        flipStyle(i) {
            const left = `${i * size}px`
            const width = `${size}px`
            const height = `${size}px`
            const sfi = divideScale(sf, 1, parts)
            const WebkitTransform = `rotateY(${180 * sfi}deg)`
            return {
                position, 
                left, 
                top, 
                width, 
                height, 
                background,
                WebkitTransform
            }
        }
    }
}