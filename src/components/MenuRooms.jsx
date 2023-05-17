import React from 'react'
import './Comp.css'
import { useNavigate } from 'react-router-dom'

export default function MenuRooms(props) {
  const nav = useNavigate();


  return (
    <div className='roomSqr' style={{backgroundColor:props.roomObj.Color}} 
    onClick={()=>{nav(`/room${props.roomObj.Name}`)}}>
    <p style={{margin:'auto', fontSize:'30px'}}>{props.roomObj.Name}</p>
    </div>
  )
}
