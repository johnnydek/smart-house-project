import React,{useState} from 'react'
import AddDevice from './AddDevice'
import { useNavigate } from 'react-router-dom';
import './Comp.css'
import MyDevice from './MyDevice';
import { useEffect } from 'react';

export default function RoomProp(props) {
    const nav = useNavigate();

    const [showAddDevice,setShowAddDevice]=useState(false);

    const [deviceNames,setDeviceNames]=useState([]);

    const [deviceValues,setDeviceValues]=useState([]);

    const [addRemoveMode, setAddRemoveMode] = useState(false)

    useEffect(()=>{
        displayDevices()
    },[]);

    const displayDevices = ()=>{
        let temp =props.roomData.Devices;

        let deviceName = Object.keys(temp);

        let deviceValue = Object.values(temp);

        deviceName.shift();

        deviceValue.shift();

        setDeviceNames([...deviceName])

        setDeviceValues([...deviceValue])
        
        return
    }

    const setDevice =()=>{
        if(showAddDevice == false){
        document.getElementById('addBtn').style.display = 'none';
        document.getElementById('exitBtn').style.display = 'none';
        document.getElementById('remvBtn').style.display = 'none';
        setShowAddDevice(true)
        }
        else{
            document.getElementById('addBtn').style.display = 'inline-block';
            document.getElementById('exitBtn').style.display = 'inline-block';
            document.getElementById('remvBtn').style.display = 'inline-block';
            displayDevices()
    
            setShowAddDevice(false)

        }
        
    }
  return (
    <div>
        <div style={{width:'750px', height:'190px',display:'flex',flexWrap:'wrap',flexDirection:'row'}}>
        <div style={{width:'250px', height:'170px'}}>
        <h2>Room Name:{props.roomData.Name}</h2>
        <br/>
        <h2>Room Type:{props.roomData.Type}</h2>
        </div>
        <div style={{marginLeft:'100px', width:'150px', height:'200px',display:'flex',flexWrap:'wrap',flexDirection:'row'}}>
        {deviceNames.map((val,index)=>{
            return <MyDevice name={val} mode={deviceValues[index]} roomIndex = {props.roomIndex} deviceList={props.roomData.Devices} deviceSwitch={props.deviceSwitch}/>
        })}
        </div>
        </div>
        {showAddDevice && <AddDevice addRemove = {addRemoveMode} deviceList={deviceNames} roomIndex={props.roomIndex} deviceRemove={props.deviceRemove} deviceAdd ={props.deviceAdd} goBack ={setDevice}/>}
        <div style={{width:'250px', height:'80px', marginLeft:'50px', display:'flex'}}>
        <button id ='addBtn' className='addDevice'  
        onClick={()=>{setAddRemoveMode(false); setDevice()}}>Add Device</button>
        <button id ='remvBtn' className='addDevice' style={{marginLeft:'1px'}}
        onClick={()=>{setAddRemoveMode(true); setDevice()}}>Remove Device</button>
        <button id ='exitBtn' className='addDevice' style={{marginLeft:'1px'}}
        onClick={()=>{nav('/')}}>Return</button>
        </div>

    </div>
  )
}
