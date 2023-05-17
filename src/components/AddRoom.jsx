import React from 'react'
import './Comp.css'
import { useNavigate } from 'react-router-dom'

export default function AddRoom(props) {
  const nav = useNavigate();
  

  const checkDetails = () =>{
    let roomType = document.forms['createRoom']['rType'].value;
    let roomName = document.forms['createRoom']['rName'].value;
    let roomColor = document.forms['createRoom']['rColor'].value;

    if(roomName.length > 0 && roomName.length <=5){
      let roomData = {Name:roomName, Type:roomType, Color:roomColor, Devices:{Sum:0}}
      props.add(roomData);
      nav('/');
    }
    else{
      alert('Error: Room name must contain between 1 to 5 characters!')
      nav('/');
      return
    }
  }
  return (
    <div className='addRoomDiv'>
      <form name ='createRoom' onSubmit={()=>checkDetails()}>
        <h2 style={{marginLeft:'50px'}}>Add New Room</h2>
        <h3 style={{marginLeft:'90px'}}>Room Type</h3>
        <select name ='rType'  className = 'addInput'>
        <option value='Bathroom'>Bathroom</option>
        <option value='Bedroom'>Bedroom</option>
        <option value = 'Kitchen'>Kitchen</option>
        </select>
        <h3 style={{marginLeft:'90px'}}>Room Name</h3>
        <input name='rName' style={{width:'292px'}} type ='text' className = 'addInput'/>
        <h3 style={{marginLeft:'90px'}}>Room Color</h3>
        <input name = 'rColor' style={{width:'292px', marginLeft:'5px'}} type ='color' className = 'addInput'/>
        <button type= 'submit'className='addBtn'>Add</button>
        </form>
    </div>
  )
}
