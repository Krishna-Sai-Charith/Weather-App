import { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './infoBox'
import './App.css'

function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    temp:"",
    condition:"",
    icon:"",
    location:"",
    region:"",
    time:"",
    feelslike:"",
    country:""
});
let updateInfo=(result)=>{
  setWeatherInfo(result);
}
 
  return (
    <>
    <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo}/>
    </>
  )
}

export default App
