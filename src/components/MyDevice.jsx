import React,{useEffect} from 'react'


export default function MyDevice(props) {
    const innerSwitch=()=>{
        debugger;
        if(document.getElementById(`${props.name}id`).style.backgroundColor == 'red'){
            document.getElementById(`${props.name}id`).style.backgroundColor = 'green';
          }else{
            document.getElementById(`${props.name}id`).style.backgroundColor = 'red';
          }
    }
  return (
    <div id = {`${props.name}id`} style={{border:'solid', height:'40px', width:'150px',textAlign:'center', backgroundColor:props.mode, fontSize:'18px'}}
       onClick={()=>{props.deviceSwitch(props.name,props.roomIndex); innerSwitch()}}>{props.name}</div>
  )
}

