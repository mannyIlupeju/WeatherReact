import Header from "./Components/Header"
import CurrentWeather from "./Components/CurrentWeather"
import Highlight from "./Components/Highlight";
import ErrorMessage from "./Components/ErrorMessage";
import { useState, useEffect } from "react"
import ClockLoader from "react-spinners/ClockLoader";


function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  let [color, setColor] = useState("#000000");
  const [message, setMessage] = useState(false)
  
  console.log(loading)



  //Fetch City
  useEffect(()=>{
    if(city === '') {
      setMessage(false)
    } else {
      setLoading(true)
      setTimeout(()=>{
        const fetchInfo = async() => {
          const response = await fetch(
            `https://api.weatherbit.io/v2.0/current?&city=${city}&key=3b86c1d049804ca1a4c9743fd9fe850d`
            );

            //Error handling if fetch is rejected
            if(response.status !== 200){
              throw new Error('cannot fetch the data');
              
              setLoading(false)
              // return new Response(`Error from Above Promise`, {status: 500})
            }
            //If response is received, this happens next
            const data = await response.json();
            setWeather(data)
            setLoading(false)
            
          }
          fetchInfo()
          .then(data => console.log('resolved:', data))
          .catch(err => setMessage(true),setLoading(false))
      },1000)


    }
    
    // localStorage.setItem('search', city)
    

  },[city])


 
 


  return (
    <>
      <div className='container-width h-screen flex flex-col app'>
        <div className='grid col-span-2'>
          <Header city={city} setCity={setCity} />
       </div> 

      {
      loading ?
         <ClockLoader
        color={color}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
        (<div className="flex flex-col md:flex-row gap-x-6 gap-y-6 justify-center">
        <CurrentWeather weather={weather} />
        <Highlight weather={weather}/>
        </div>)
    }
    <div className="my-6">
      {
        message ? 
        <ErrorMessage weather={weather}/>
        : ''
      }
    </div>
    </div>
    </>
  );
}

export default App
