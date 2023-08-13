import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { change } from './feature/Theme'

export default function Color() {
  const dispatch = useDispatch()
  const [color, setcolor] = useState()


  return (
    <div>
      <input type="color" onChange={(e) => {
        setcolor(e.target.value)
      }} />
      <button
        onClick={() => {
          dispatch(change({ color: color }))
        }}
      >change</button>
    </div>
  )
}
