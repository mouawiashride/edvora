import React , {useContext} from 'react'
import Header from '../header/Header'
import Nearsetrides from '../../pages/nearsetrides/Nearsetrides';
import Upcomingrides from '../../pages/upcomingrides/Upcomingrides';
import Pastrides from '../../pages/pastrides/Pastrides';
import  {DataApp} from '../../ridescontext/Ridescontextprovider';
import {  Routes, Route,useLocation ,Navigate, Link} from "react-router-dom";
import  './style.css';
export default function Main () {
 const {NearetridRide,pastRide} = useContext(DataApp) ;
 
  let {pathname} = useLocation();

  return (
    <>
        <Header />
        <div  className='navcontainer' >
          <Link
            to="/"
           className= {`nearestridestitle ${pathname === '/' ? 'isactive' : '' }`}
          >
            Nearest rides 
          </Link>
          <Link
            to="/Upcomingrides"
            className= {`upcomingridestitle ${pathname === '/Upcomingrides' ? 'isactive' : '' }`}
          >
            Upcoming rides { NearetridRide.length > 3 ? ( `(${NearetridRide.length-3})`) : '' }
      
          </Link>
          <Link
            to="/Pastrides"
        className= {`pastridestitle ${pathname === '/Pastrides' ? 'isactive' : '' }`}
          >
           Past rides { pastRide.length > 0 ? ( `(${pastRide.length})`) : '' }
          </Link>
            <div className='filtercontainer'>
                  <div className='spancollection'>
                     <div></div>
                     <div></div>
                     <div></div>
                  </div>
                  <p className='filtername'>
                    Filter
                  </p>
                  <div className='filterstatecity'>
                    <label className='filterplaceholder'>
                      Filters
                    </label>
                    <select className='statefilter'>
                      <option value="">State</option>
                      <option value='Maharashtra'>Maharashtra</option>
                      <option value='Maharashtra'>Maharashtra</option>
                      <option value='Maharashtra'>Maharashtra</option>
                    </select>
                    <select className='cityfilter'>
                    <option value="">City</option>
                      <option value='Panvel'>Panvel</option>
                      <option value='Panvel'>Panvel</option>
                      <option value='Panvel'>Panvel</option>
                    </select>
                  </div>
            </div>
          </div>
       
   <Routes>
          <Route index path="/" element={<Nearsetrides  />} />
          <Route path="/Upcomingrides" element={<Upcomingrides />} />
          <Route path="/Pastrides" element={<Pastrides />} />
          <Route path="*" element={<Navigate to="/" replace />} />
 </Routes>
       

    </>
  )
}
