import React from 'react'
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import {format} from 'date-fns'





const CurrentWeather = ({weather}) => {




let today = new Date();
let date =
  today.getDate() +
  "/" +
  parseInt(today.getMonth() + 1) +
  "/" +
  today.getFullYear();
console.log(date);

  
  if(!weather) {
    console.log('nada')
  }
  else {
    console.log(weather)
    const {data} = weather
    console.log(data[0].weather.icon)
    return (
      
      <div className='container-width mx-auto'>
        <div>
          <div className='bg-Card p-8 rounded-xl'>
            <div>
              <h2 className='text-white'>Hi</h2>
            </div>
            <div className='flex'>
              <div></div>
              <div>
                {/* <img
                  src={`https://openweathermap.org/img/wn/04.png`}
                  width={200}
                /> */}
              </div>
            </div>
            <div>
              <p className='text-white'>Hello</p>
            </div>
            <div className='flex flex-row mt-5 gap-x-1'>
              <div>
                <FaMapMarkerAlt size={30} className='text-gray-600' />
              </div>
              <p className='text-white'>Hello</p>
            </div>
            <div className='flex flex-row mt-5 gap-x-1'>
              <div>
                <FaRegCalendarAlt size={30} className='text-gray-600' />
              </div>
              <p className='text-white'>Hello</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
  
}



export default CurrentWeather