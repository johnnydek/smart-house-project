import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Comp.css'
import MenuRooms from './MenuRooms'
import toolsIcon from '../photos/tools.png'

export default function Roomlist(props) {
    const nav = useNavigate();

    const checkLimit = ()=>{
        if(props.rooms.length < 9){
            nav('/addroom')
        }
        else{
            alert("Room limit reached!")
        }
    }

    if (props.rooms.length === 0) {
        return (
        <div>
        <h2 style={{marginLeft:'120px'}}>No rooms have been added!</h2>
        <h2 style={{marginLeft:'210px'}}>Add Room</h2>
        <button className='addRoomBtn' style={{color:'red', position: 'relative', left:'40%',  backgroundImage: `url(${toolsIcon})`, backgroundSize: 'cover',backgroundPosition: 'center',}} onClick={()=>{nav('/addroom')}}>+</button>
        </div>

        )
    }

    return (
        <div className='myRoomDiv'>
            <div className='listDiv'>
            {props.rooms.map((val,index)=>{
            return<MenuRooms roomObj = {val} roomIndx= {index} />})}
            </div>
         <button className='addRoomBtn' style={{color:'red', height:'50px', position:'relative', left:'30%', bottom:'3%' ,  backgroundImage: `url(${toolsIcon})`, backgroundSize: 'cover',backgroundPosition: 'center'}} onClick={()=>{checkLimit()}}>+</button>
         <button className='addRoomBtn' style={{color:'red', height:'50px', position:'relative', left:'35%', bottom:'3%' ,  backgroundImage: `url(${toolsIcon})`, backgroundSize: 'cover',backgroundPosition: 'center'}} onClick={()=>{nav('/removeroom')}}>-</button>
        </div>

    )
}
