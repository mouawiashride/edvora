import React, { createContext  } from 'react'


 
  
export  const DataApp = createContext();

export default function Ridescontextprovider({children}) {
  const user = {
    station_code: 80,
    name: "Dhruv Singh",
    profile_key: 'ur'
 };
   var  Distancenearidride = [  ],
   defaultStationCode= user.station_code ,
   maxStationcode=0,
   currentpastid,
   pastRide=[],
   minStationcode=user.station_code,
   currentriedeid,NearetridRide = [] ,Distancpastidride = []  ;
  const  Rides = [
    {
      id: '001',
      origin_station_code: '23',
      station_path: [23, 42, 45, 48, 56, 60, 77, 81, 93],
      destination_station_code: '93',
      date: '1644924365',
      map_url: "url",
      state: 'Maharashtra',
      city: 'Panvel'
    },
    {
      id: '002',
      origin_station_code: '20',
      station_path: [20, 39, 40, 42, 54, 63, 72, 88, 98],
      destination_station_code: '98',
      date: '1644924365',
      map_url: "url",
      state: 'Maharashtra',
      city: 'Panvel'
    },
    {
      id: '003',
      origin_station_code: '13',
      station_path: [13, 25, 41, 48, 59, 64, 75, 81, 91],
      destination_station_code: '91',
      date: '1644924365',
      map_url: "url",
      state: 'Maharashtra',
      city: 'Panvel'
    },
  ];
  (function getMaxStationcode()
  {
    for (let Ride of Rides)
    { 
      if ( maxStationcode  < Math.max(...Ride.station_path))
      maxStationcode = Math.max(...Ride.station_path);
    }
 
  })();
  (function getMinStationcode()
  {
    for (let Ride of Rides)
    { 
      if ( minStationcode  > Math.min(...Ride.station_path))
      minStationcode = Math.min(...Ride.station_path);
     
    }
 
  })();



(function getNearsetRide(minnearStationdoe = defaultStationCode )
{ 
while(minnearStationdoe <= maxStationcode)
{  for(let i = 0 ; i<Rides.length; i++)
  if(Rides[i].id !== currentriedeid && Rides[i].station_path.includes(minnearStationdoe)) 
  {
    NearetridRide.push(Rides[i]);
    Distancenearidride.push(minnearStationdoe);
    currentriedeid =Rides[i].id;
    minnearStationdoe++ ;
    break;
   }
   minnearStationdoe++;
}
})();

(function getPastRides( maxpastStationcode = defaultStationCode)
{   
   
  for (let Ride of Rides) {
    if(Ride.station_path.includes(maxpastStationcode))
    {
      currentpastid =Ride.id;
      pastRide.push(Ride);
      Distancpastidride.push(maxpastStationcode);
      maxpastStationcode -= 1;
      console.log(currentpastid);
      break; 
    }
  }
  
  while(minStationcode <= maxpastStationcode)
  {  
   
    for(let i = Rides.length-1 ; i >=0 ; i--)
    if(Rides[i].id !== currentpastid && Rides[i].station_path.includes(maxpastStationcode)) 
    {
      pastRide.push(Rides[i]);
      Distancpastidride.push(maxpastStationcode);
      currentpastid =Rides[i].id;
      break;
     }
     maxpastStationcode--;
}
})();



  return (
    <DataApp.Provider value={{defaultStationCode,pastRide,Distancpastidride,NearetridRide,Distancenearidride}}> 
           {children }
    </DataApp.Provider> 
  )
}

