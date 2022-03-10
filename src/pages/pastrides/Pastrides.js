import React, { useContext } from 'react'
import Shoecard from '../../component/shoecard/Shoecard'
import { DataApp } from '../../ridescontext/Ridescontextprovider';
export default function Pastrides() {
  const { pastRide ,Distancpastidride } =  useContext(DataApp);
  const content =  pastRide?.map((item,index)=>
   <Shoecard item={item} Distance={Distancpastidride[index]} key={index}  />
 )
  return (  <>{content} </>
  )
}