import React from 'react'
import {useStyle} from './hooks'

const FlippedCircularDiv = ({w, h, scale, n, i}) => {
    const {flipStyle, mainStyle} = useStyle(i, w, h, n, scale)
    return <div style = {mainStyle()}>
      <div style = {flipStyle(0)}>
          {`A${i}`}
      </div>
      <div style = {flipStyle(1)}>
          {`B${i}`}
      </div>
    </div>
}

export default FlippedCircularDiv 
