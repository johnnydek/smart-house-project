import React,{useState} from 'react'
import AddDevice from './AddDevice'
import { useNavigate } from 'react-router-dom';
import './Comp.css'
import MyDevice from './MyDevice';
import { useEffect } from 'react';
import appBG from '../photos/sofa-living-room-with-copy-space.jpg'
import kitchenBG from '../photos/kitchen-bg.jpg'
import bedroomBG from '../photos/bedroom-bg.jpg'
import bathroomBG from '../photos/bathroom-bg.jpg'
import addOn from '../photos/socket-and-plug.png'
import addOff from '../photos/power-socket.png'
import backHome from '../photos/home.png'

export default function RoomProp(props) {
    const nav = useNavigate();

    const [showAddDevice,setShowAddDevice]=useState(false);

    const [deviceNames,setDeviceNames]=useState([]);

    const [deviceValues,setDeviceValues]=useState([]);

    const [addRemoveMode, setAddRemoveMode] = useState(false)

    const addDevice = {
        'height':'80px',
        'width':'80px',
        'background':'rgba(255,255,255,0.8)',
        'fontSize':'larger',
        'fontWeight':'bolder',
        'borderRadius':'10%',
        'textStroke': '1px white',
        'WebkitTextStroke': '1px white',
        'color':'black',
        'backgroundImage': `url(${addOn})`,
        'backgroundSize': 'cover',
        'backgroundPosition': 'center',
    }

    useEffect(()=>{
        setBackground()
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

    const setBackground = ()=>{
        switch(props.roomData.Type){
            case "Kitchen":
                props.roomBG(kitchenBG)
                break;
            case "Bedroom":
                props.roomBG(bedroomBG)
                break;
            case 'Bathroom':
                props.roomBG(bathroomBG)
                break;
        }
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
        <h2 style={{background: 'rgba(255, 255, 255, 0.8)'}}>Room Name:{props.roomData.Name}</h2>
        <br/>
        <h2 style={{background: 'rgba(255, 255, 255, 0.8)'}}>Room Type:{props.roomData.Type}</h2>
        </div>
        <div style={{marginLeft:'100px', width:'200px', height:'200px',display:'flex',flexWrap:'wrap',flexDirection:'row'}}>
        {deviceNames.map((val,index)=>{
            return <MyDevice name={val} mode={deviceValues[index]} roomIndex = {props.roomIndex} deviceList={props.roomData.Devices} deviceSwitch={props.deviceSwitch}/>
        })}
        </div>
        </div>
        {showAddDevice && <AddDevice addRemove = {addRemoveMode} deviceList={deviceNames} roomIndex={props.roomIndex} deviceRemove={props.deviceRemove} deviceAdd ={props.deviceAdd} goBack ={setDevice}/>}
        <div style={{width:'250px', height:'80px', marginLeft:'50px', display:'flex'}}>
        <button id ='addBtn' style={addDevice} 
        onClick={()=>{setAddRemoveMode(false); setDevice()}}>Add Device</button>
        <button id ='remvBtn' style={{...addDevice, marginLeft:'2px', 'backgroundImage': `url(${addOff})`,}}
        onClick={()=>{setAddRemoveMode(true); setDevice()}}>Remove Device</button>
        <button id ='exitBtn' className='addDevice' style={{...addDevice, marginLeft:'2px', 'backgroundImage': `url(${backHome})`}}
        onClick={()=>{ props.roomBG(appBG); nav('/')}}>Return</button>
        </div>

    </div>
  )
}
