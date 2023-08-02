import React from 'react'
import './Comp.css'
import { useNavigate } from 'react-router-dom'

export default function AddDevice(props) {
    const nav = useNavigate();
    if(props.addRemove){
      return(
      <div className='deviceSpace'>
        <h2 style={{'background':'rgba(255,255,255,0.8)'}}>Select a device to remove</h2>
        <select id='devSelect' className='addInput'>
          {props.deviceList.map((val)=>{
            return <option>{val}</option>
          })}
        </select>
                <button style={{width:'100px', height:'30px',background:'rgba(255,255,255,0.8)', fontWeight:'bolder', borderRadius:'10%',}}
        onClick={()=>{props.deviceRemove(document.getElementById('devSelect').value,props.roomIndex); props.goBack()}}>Remove</button>
        <br/>
        <button style={{width:'100px', height:'30px',background:'rgba(255,255,255,0.8)', fontWeight:'bolder', borderRadius:'10%'}} 
        onClick={()=>{props.goBack()}}>Return</button>
      </div>
      )
    }

  return (
    <div className='deviceSpace'>
        <h2 style={{'background':'rgba(255,255,255,0.8)'}}>Select a device to add</h2>
        <select id='devSelect' className='addInput'>
            <option>Air Conditioner</option>
            <option>Electric Boiler</option>
            <option>Stereo System</option>
            <option>Lamp</option>
        </select>
        <button style={{width:'100px', height:'30px',background:'rgba(255,255,255,0.8)', fontWeight:'bolder', borderRadius:'10%'}}
        onClick={()=>{props.deviceAdd(document.getElementById('devSelect').value,props.roomIndex); props.goBack()}}>Add</button>
        <br/>
        <button style={{width:'100px', height:'30px',background:'rgba(255,255,255,0.8)', fontWeight:'bolder', borderRadius:'10%'}} 
        onClick={()=>{props.goBack()}}>Return</button>
    </div>
  )
}
