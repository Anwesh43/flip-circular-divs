import {useState, useEffect} from 'react'

const backgrounds = ['#F44336', '#3F51B5']
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
    return {
        w, 
        h
    }
}

const maxScale = (scale, i, n) => Math.max(0, scale - i / n)

const divideScale = (scale, i, n) => Math.min(1 / n, maxScale(scale, i, n)) * n 

const sinify = (scale) => Math.sin(scale * Math.PI)

export const useStyle = (i, w, h, n, scale) => {
    const sf = sinify(scale)   
    const position = 'absolute'
    const size = w / n
    const top = `${h / 2}px`
    const borderRadius = '50%'
    const sfi = divideScale(sf, i, n)
    return {
        mainStyle() {

          const left = `${i * size + size / 2}px`
          
          const WebkitTransform = `rotateY(${180 * sfi}deg)`
          return {
            WebkitTransform,
            position, 
            left, 
            top
          }
        },
        flipStyle(j = 0) {
            const color = 'white'
            const background = backgrounds[j]
            const textAlign = 'center'
            const fontSize = `${size / 4}px`
            const opacity = (1 - j) * (1 - sfi) + sfi 
            const width = `${size}px`
            const height = `${size}px`
            const left = `${-size / 2}px`
            const top = `${-size / 2}px`
            const WebkitTransform = `rotateY(${180 * j}deg)`
            return {
                position,
                width, 
                height, 
                background,
                borderRadius,
                left, 
                top,
                opacity, 
                WebkitTransform, 
                color, 
                textAlign, 
                fontSize
            }
        }
    }
}