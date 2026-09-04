import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import GetLocationButton from "./getLocationButton";
import FarmCanvas from './FarmCanvas'

function App() {
 const [locations, setLocations] = useState([]);

  return (
    <>
    <GetLocationButton setLocations={setLocations} />

      <FarmCanvas locations={locations} />
    </>
  )
}

export default App
