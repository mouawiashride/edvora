import React,{useContext} from 'react'
import Shoecard from '../../component/shoecard/Shoecard'
import './style.css'
import {DataApp}   from '../../ridescontext/Ridescontextprovider'
export default function Nearsetrides( ) {
   const { NearetridRide ,Distancenearidride } =  useContext(DataApp);
   const content =  NearetridRide?.filter((item, index) => (index < 3)).map((item,index)=>
    <Shoecard item={item} Distance={Distancenearidride[index]} key={index}  />
  )
  return (
   <>   
          {
      content
      }
       </>


  )
}
