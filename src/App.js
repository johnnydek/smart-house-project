import './App.css';
import {useEffect, useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Roomlist from './components/Roomlist';
import Main from './components/Main';
import AddRoom from './components/AddRoom'
import RemoveRoom from './components/RemoveRoom';
import RoomProp from './components/RoomProp';
import appBG from './photos/sofa-living-room-with-copy-space.jpg'
import houseIcon from './photos/house.png'
import kitchenBG from './photos/kitchen-bg.jpg'
import bedroomBG from './photos/bedroom-bg.jpg'
import bathroomBG from './photos/bathroom-bg.jpg'


function App() {
  const [rooms,setRooms] = useState([]);
  const [appHeight,setAppHeight] =useState(450)
  const [houseBG,setHouseBG] = useState(appBG)

  const appStyle = {
    width:'550px',
    height:`${appHeight}px`,
    position: 'absolute',
    top: '37%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius:'5%',
    backgroundImage: `url(${houseBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  useEffect(()=>{

    let savedRoomsData = sessionStorage.getItem('roomsData');

    if(savedRoomsData != null){

    let parsedData = JSON.parse(savedRoomsData)

    setRooms(parsedData)
    }

  },[])



  useEffect(()=>{
    const appDiv = document.getElementById('mainFrame')

    if(appDiv){
      setAppHeight(appDiv.scrollHeight)
    }

  },[rooms])

  const addRoomToArr = (newRoom)=>{
    let temp = [...rooms]
    temp.push(newRoom)
    setRooms([...temp]);

    sessionStorage.setItem('roomsData',JSON.stringify(temp));

    return;
  }

  const removeRoom = (name) =>{
    let temp = rooms

    temp = temp.filter((val)=>val.Name !== name)

    setRooms(temp)

    sessionStorage.setItem('roomsData',JSON.stringify(temp));


  }

  const addDeviceToRoom =(device,roomIndex)=>{

    if(rooms[roomIndex]['Devices']['Sum'] == 5){
      alert('Room has exceeded the amount of allowed devices!')
      return
    }

    if(rooms[roomIndex]['Type'] != 'Bathroom' && device == 'Electric Boiler'){
      alert('Electric boilers can only be added to bathrooms!')
      return
    }

    if(rooms[roomIndex]['Devices'].hasOwnProperty('Stereo System1') && device == 'Stereo System'){
      alert('A room can only have one Stereo System!')
      return
    }
    let num = 1;
    while(rooms[roomIndex]['Devices'].hasOwnProperty(`${device}${num}`)){
      num++;
    }
 
    let temp = [...rooms]

    temp[roomIndex]['Devices'][`${device}${num}`] = 'Red';

    temp[roomIndex]['Devices']['Sum'] = temp[roomIndex]['Devices']['Sum'] +1;

    setRooms([...temp])

    sessionStorage.setItem('roomsData',JSON.stringify(temp));

  }

  const removeDeviceFromRoom =(device,roomIndex)=>{


    const checkName = (val) =>val.Devices == device;

    let temp = rooms

    delete temp[roomIndex]['Devices'][`${device}`]

    temp[roomIndex]['Devices']['Sum'] = temp[roomIndex]['Devices']['Sum'] -1;

    setRooms([...temp])

    sessionStorage.setItem('roomsData',JSON.stringify(temp));


  }

  const switchDevice = (deviceName,index)=>{
    let temp = rooms;
    if(temp[index].Devices[`${deviceName}`] == 'Red'){
      temp[index].Devices[`${deviceName}`] = 'Green';
    }else{
      temp[index].Devices[`${deviceName}`] = 'Red';
    }

    setRooms([...temp])

    sessionStorage.setItem('roomsData',JSON.stringify(temp));

  }

  return (
    <div className='outerApp'>
    <img src= {houseIcon} alt='house icon' width='100' height='100'/>
    <div id='mainFrame' style={appStyle}>

     <BrowserRouter>
     <Main/>
     <Routes>
      <Route path='/' element={<Roomlist rooms={rooms} height = {setAppHeight}/>}/>
      <Route path='/addroom' element={<AddRoom add = {addRoomToArr}/>}/>
      <Route path='/removeroom' element={<RemoveRoom roomList = {rooms} roomToRemove = {removeRoom}/>}/>
      {rooms.map((val,index)=>{
        return <Route path={`/room${val.Name}`} element={<RoomProp roomBG = {setHouseBG} roomData = {val} roomIndex={index} deviceRemove={removeDeviceFromRoom} deviceAdd = {addDeviceToRoom} deviceSwitch ={switchDevice}/>}/>
      })}
     </Routes>
     </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
