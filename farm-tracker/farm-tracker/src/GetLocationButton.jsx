import { useState } from "react";
import './index.css'

const GetLocationButton = ({ setLocations }) => {
  const [error, setError] = useState("");

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
           const newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        setLocations((previousLocations) => [
          ...previousLocations,
          newLocation,
        ]);
        
        console.log("latitude :" , position.coords.latitude , "\nlongitude: " , position.coords.longitude);
        setError("");
      },
      (error) => {
        setError(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  return (
    <div>
      <button onClick={handleGetLocation}>
        Add New Point <span>➕</span>
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default GetLocationButton;
