import React from 'react'
import './Comp.css'
import { useNavigate } from 'react-router-dom'
import kitchenIcon from '../photos/kitchen.png'
import toiletIcon from '../photos/toilet.png'
import bedIcon from '../photos/bedroom.png'

export default function MenuRooms(props) {
  const nav = useNavigate();


  return (
    <div className='roomSqr' style={{backgroundColor:props.roomObj.Color, position: 'relative', textAlign: 'center' }} 

    onClick={()=>{nav(`/room${props.roomObj.Name}`)}}>
    {props.roomObj.Type == 'Kitchen' && <img src= {kitchenIcon} alt='kitchen icon' width='90' height='90' style={{display: 'block', margin:'auto'}}/>}
    {props.roomObj.Type == 'Bedroom' && <img src= {bedIcon} alt='kitchen icon' width='105' height='105' style={{display: 'block', margin:'auto'}}/>}
    {props.roomObj.Type == 'Bathroom' && <img src= {toiletIcon} alt='kitchen icon' width='90' height='90' style={{display: 'block', margin:'auto'}}/>}
    <p style={{ background: 'rgba(255, 255, 255, 0.8)', display: 'inline-block', position: 'absolute', bottom: 0, left: 0, right: 0, fontSize:'30px'}}>{props.roomObj.Name}</p>
    </div>
  )
}
