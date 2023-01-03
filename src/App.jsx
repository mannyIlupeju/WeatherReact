import Header from "./Components/Header"
import CurrentWeather from "./Components/CurrentWeather"
import Highlight from "./Components/Highlight";
import { useState, useEffect } from "react"



function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null)




  //Fetch City
  useEffect(()=>{
    if(city === '') {
      console.log('please enter city')
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
    
    // localStorage.setItem('search', city)
    

  },[city])


 
 


  return (
    <>
      <div className='container-width h-screen flex flex-col'>
        <div className='grid col-span-2'>
          <Header city={city} setCity={setCity} />
       </div>    

        <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 justify-center">
        <CurrentWeather weather={weather}/>
        <Highlight weather={weather}/>
        </div>
      
     
       
      
       
     
       
      </div>
    </>
  );
}

export default App
