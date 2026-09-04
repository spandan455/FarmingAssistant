import React from 'react'
import { useState } from 'react';
function FarmCanvas({locations}) {

    const startDraw=()=>{
        // const [Lat , setLat] = useState([]);
        // const [Lon , setLon] = useState([]);
        // locations.forEach(element => {
        //     setLat([Math.min(Lat[0] , element.latitude) ,Math.max(Lat[1] , element.latitude) ]);
        //     setLon([Math.min(Lon[0] , element.longitude) ,Math.max(Lon[1] , element.longitude) ]);
        // });
    }; 
  return (
    <div>
      <h3 className="text-2xl my-3">Locations</h3>
      {locations.length > 0 && (
        <div>

          {locations.map((location, index) => (
            <div key={index} className="border-white border-2 rounded-lg p-4 m-2 flex ">
              <p className="mx-5">
                Point {index + 1}  | {" "}</p>
                <p className="mx-5">{location.latitude}</p> 
                <p className="mx-5">{location.longitude}</p>
              
            </div>
          ))}
        </div>
      )}

      <button onClick={startDraw}>Draw !</button>
    </div>
  )
}

export default FarmCanvas
