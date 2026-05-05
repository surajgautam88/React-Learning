import React from 'react'
import Try from './Try'

function Card(props) {
  return (
    <>
    <div>Life is Card it is written by Mr {props.name}</div>
    <Try data={props.name}/>
    </>
  )
}

export default Card