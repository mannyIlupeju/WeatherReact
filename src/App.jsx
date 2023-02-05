import Header from "./Components/Header"
import CurrentWeather from "./Components/CurrentWeather"
import Highlight from "./Components/Highlight";
import ErrorMessage from "./Components/ErrorMessage";
import { useState, useEffect } from "react"
import ClockLoader from "react-spinners/ClockLoader";
import Preloader from "./Components/Preloader";



function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  let [color, setColor] = useState("#000000");
  const [message, setMessage] = useState(false)
  const [preLoader, setPreLoader] = useState(false)
  
  console.log(city)


  //PreLoader setting
  useEffect(()=>{
    setPreLoader(true)
    setTimeout(()=>{
      setPreLoader(false)
    }, 2000)
  },[])


  //Fetch City
  useEffect(()=>{
    if(city === '') {
      setMessage(false)
    } else {
      setLoading(true)

      setTimeout(()=>{
        const fetchInfo = async() => {
          const response = await fetch(
            `https://api.weatherbit.io/v2.0/current?&city=${city}&key=04a6375d8a1a49c4a709e5b9557f570c`
            // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf09fbf757049c5bb8e1c795e778ea4a`
            );

            //Error handling if fetch is rejected
            if(response.status !== 200){
              throw new Error('cannot fetch the data');
              
              setLoading(false)
              // return new Response(`Error from Above Promise`, {status: 500})
            }
            //If response is received, this happens next
            const data = await response.json();
            console.log(data)
            setWeather(data)
            setLoading(false)
            
          }
          fetchInfo()
          .then(data => console.log('resolved:', data))
          .catch(err => setMessage(true),setLoading(false))
      },1000)


    }
    

    

  },[city])


 
 


  return (
    <>
    {
      preLoader ? 

      <Preloader/>

      :

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
    }
    </>
  );
}

export default App
