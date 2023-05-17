import './App.css';
import {useEffect, useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Roomlist from './components/Roomlist';
import Main from './components/Main';
import AddRoom from './components/AddRoom'
import RoomProp from './components/RoomProp';

function App() {
  const [rooms,setRooms] = useState([]);

  const addRoomToArr = (newRoom)=>{
    let temp = [...rooms]
    temp.push(newRoom)
    setRooms([...temp]);
    return;
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
  }

  const removeDeviceFromRoom =(device,roomIndex)=>{


    const checkName = (val) =>val.Devices == device;

    let temp = rooms

    delete temp[roomIndex]['Devices'][`${device}`]

    temp[roomIndex]['Devices']['Sum'] = temp[roomIndex]['Devices']['Sum'] -1;

    setRooms([...temp])

  }

  const switchDevice = (deviceName,index)=>{
    let temp = rooms;
    if(temp[index].Devices[`${deviceName}`] == 'Red'){
      temp[index].Devices[`${deviceName}`] = 'Green';
    }else{
      temp[index].Devices[`${deviceName}`] = 'Red';
    }

    setRooms([...temp])
  }

  return (
    <div className="App">

     <BrowserRouter>
     <Main/>
     <Routes>
      <Route path='/' element={<Roomlist rooms={rooms}/>}/>
      <Route path='/addroom' element={<AddRoom add = {addRoomToArr}/>}/>
      {rooms.map((val,index)=>{
        return <Route path={`/room${val.Name}`} element={<RoomProp roomData = {val} roomIndex={index} deviceRemove={removeDeviceFromRoom} deviceAdd = {addDeviceToRoom} deviceSwitch ={switchDevice}/>}/>
      })}
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
