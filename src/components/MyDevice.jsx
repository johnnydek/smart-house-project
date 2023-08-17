import React,{useEffect} from 'react'
import { useState } from 'react';
import boilerIcon from '../photos/boiler.png'
import ACIcon from '../photos/air-conditioner.png'
import lampIcon from '../photos/floor-lamp.png'
import stereoIcon from '../photos/speaker.png'
import 'bootstrap/dist/js/bootstrap.min.js'


export default function MyDevice(props) {
  const [deviceTurn,setDeviceTurn] =useState("")

  useEffect(()=>{
    props.mode == 'Red'? setDeviceTurn("OFF"):setDeviceTurn("ON")
  },[props.mode])

  const deviceStyle ={
    'border':'solid',
    'height':'40px',
    'width':'150px',
    'textAlign':'center',
    'fontWeight':'bolder',
    'backgroundColor':props.mode,
    'fontSize':'18px',
    'borderRadius':'10%',
    
  }

    const innerSwitch=()=>{
        if(document.getElementById(`${props.name}id`).style.backgroundColor == 'red'){
            document.getElementById(`${props.name}id`).style.backgroundColor = 'green';
            setDeviceTurn("ON")
          }else{
            document.getElementById(`${props.name}id`).style.backgroundColor = 'red';
            setDeviceTurn("OFF")
          }
    }
  return (
    <div id = {`${props.name}id`} style={deviceStyle}onClick={()=>{props.deviceSwitch(props.name,props.roomIndex); innerSwitch()}}>{props.name} <div style={{fontSize:'10px',marginTop:'-10px',left:'75%'}}><p>{deviceTurn}</p></div>
      <div className='row '>
       <div className='col'>
        {props.name.includes('Air Conditioner') && <img src= {ACIcon} alt='ac icon' width='50' height='50' style={{transform: 'translate(-210%, -43%)',marginTop:'-35px'}}/>}
        </div>
        <div className='col'>
        {props.name.includes('Lamp') && <img src= {lampIcon} alt='lamp icon' width='40' height='40' style={{transform: 'translate(-250%, -63%',marginTop:'-35px'}}/>}
        </div>
        <div className='col'>
        {props.name.includes('Electric Boiler') && <img src= {boilerIcon} alt='boiler icon' width='40' height='40' style={{transform: 'translate(-250%, -68%)',marginTop:'-35px'}}/>}
        </div>
        <div className='col'>
        {props.name.includes('Stereo System') && <img src= {stereoIcon} alt='stereo0 icon' width='40' height='40' style={{transform: 'translate(-250%, -68%)',marginTop:'-30px'}}/>}
        </div>
        </div>
       </div> 

      
  )
}

