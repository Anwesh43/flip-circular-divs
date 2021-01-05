import React from 'react'
import {useStyle} from './hooks'

const FlippedCircularDiv = ({w, h, scale, n, i}) => {
    const {flipStyle} = useStyle(w, h, n, scale)
    return (<div style = {flipStyle(i)}>
    </div>)
}

export default FlippedCircularDiv 
