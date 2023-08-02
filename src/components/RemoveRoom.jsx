import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function RemoveRoom(props) {
    const nav =useNavigate()

    const removal = (name)=>{
        props.roomToRemove(name)
        nav('/')
    }
  return (
    <div className='addRoomDiv'>
      <h2 style={{marginLeft:'50px'}}>Remove Room</h2>
      <select id ='cRemove'  className = 'addInput'>
          {props.roomList.map((val)=>{
            return <option>{val.Name}</option>
          })}
      </select>
      <button type= 'submit'className='addBtn' onClick={()=>{removal(document.getElementById('cRemove').value)}}>Remove</button>
      <br/>
      <button type= 'submit'className='addBtn' onClick={()=>{nav('/')}}>Cancel</button>
  </div>
  )
}
