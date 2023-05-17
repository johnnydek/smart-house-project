import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Comp.css'
import MenuRooms from './MenuRooms'

export default function Roomlist(props) {
    const nav = useNavigate();

    if (props.rooms.length === 0) {
        return (
        <div>
        <h2 style={{marginLeft:'100px'}}>No rooms have been added!</h2>
        <button className='addRoomBtn' style={{ position: 'relative', left:'40%'}} onClick={()=>{nav('/addroom')}}>+</button>
        </div>

        )
    }

    return (
        <div className='myRoomDiv'>
            <div className='listDiv'>
            {props.rooms.map((val,index)=>{
            return<MenuRooms roomObj = {val} roomIndx= {index}/>})}
            </div>
         <button className='addRoomBtn' style={{ height:'50px', position:'relative', left:'40%', bottom:'3%'}} onClick={()=>{nav('/addroom')}}>+</button>
        </div>

    )
}
