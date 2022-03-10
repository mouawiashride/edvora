import React, { useContext } from 'react'

import { DataApp } from '../../ridescontext/Ridescontextprovider';
import './style.css'

export default function Shoecard({item,Distance}) {
  const {defaultStationCode} = useContext(DataApp);

  return (
    
    <div className='shoecard'>
     <div className='shoecardimg' >  </div>
      <div className='raiddetail'>
        <p className='Rideid'>Ride Id : {item.id} </p>
        <p className='originstation'>Origin Station :{item.origin_station_code}</p>
        <p className='stationpath'> station_path : [{item.station_path.toString()}]</p>
        <p className='date'>Date : 15th Feb 2022 16:33 </p>
        <p className='distance'>Distance :  { Math.abs(Distance - defaultStationCode) }</p>
      </div>
        <div className='optionaldetail'>
          <p className='cityname'>{item.city}</p>
          <p className='statename'>{item.state}</p>
        </div>
   
    </div>
  )
}
