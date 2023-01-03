import Header from "./Components/Header"
import CurrentWeather from "./Components/CurrentWeather"
import { useState, useEffect } from "react"



function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null)

  console.log(city)


  //Fetch City
  useEffect(()=>{
    if(city === '') {
      console.log('nothing yet')
    } else {
      const fetchInfo = async() => {
        const response = await fetch(
          `https://api.weatherbit.io/v2.0/current?&city=${city}&key=3b86c1d049804ca1a4c9743fd9fe850d`
        );
        const data = await response.json();
        if(data.cod === '404') {
          alert('Please enter correct city')
        } else {
          setWeather(data)
        }
      }
      fetchInfo()
    }
    
    
    

  },[city])

  console.log(weather)
  
 
 


  return (
   <>
   <div className="container-width h-screen flex flex-col mx-auto bg-gray-200">
    <Header city={city} setCity={setCity}/>
    <CurrentWeather weather={weather}/>
   </div>
   </>
  )
}

export default App
