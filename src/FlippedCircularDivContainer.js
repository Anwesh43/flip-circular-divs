import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import FlippedCircularDiv from './FlippedCircularDiv'
const FlipDivs = (n,w,h, scale) => {
    const divs = []
    for (var j = 0; j < n; j++) {
        divs.push(<FlippedCircularDiv key = {`fdc_${j}`} n = {n} w = {w} h = {h} n = {n} scale = {scale} i = {j}/>)
    }
    return divs
}

const FlippedCircularDivContainer = ({n}) => {
    const {w, h} = useDimension()
    const {scale, start} = useAnimatedScale(n)
    return <div>
      <button onClick = {start}>Start</button>
      {FlipDivs(n, w, h, scale)}
    </div>
}

export default FlippedCircularDivContainer

