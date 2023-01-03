import React from 'react'
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import DateObject from 'react-date-object';





const CurrentWeather = ({weather}) => {

// let today = new Date();
// let date = today.getFullDay().toString()
// console.log(date)
// // let date =
// //   today.getDate() +
// //   "/" +
// //   parseInt(today.getMonth() + 1) +
// //   "/" +
// //   today.getFullYear();
// // console.log(date);

 var date = new DateObject();
 let currentDate = date.format("dddd, MMMM YYYY");

  
  if(!weather) {
    console.log('nada')
  }
  else {
    const {data} = weather
    const iconUrl = data[0].weather.icon
    const cityName = data[0].city_name;
    const weatherDescription = data[0].weather.description;
    const countryName = data[0].country_code;
    const temp = Math.ceil(data[0].temp) + "°c";

    return (
      <div className='container-width mx-auto'>
        <div>
          <div className='bg-Card p-8 rounded-xl w-fit'>
              <div className='relative right-6'>
                <img
                  src={`https://weatherbit.io/static/img/icons/${iconUrl}.png`}
                  alt='wweather-icon'
                />
              </div>

            <div className='flex flex-col hBar'>
              <div>
                <p className='text-7xl font-semibold text-white'>{temp}</p>
              </div>

              <div className='mt-2'>
                <p className='text-white'>{weatherDescription}</p>
              </div>
            </div>

            <div className='mt-2'>
              <div className='flex flex-row mt-5 gap-x-1'>
                <div>
                  <FaMapMarkerAlt size={26} className='text-gray-600' />
                </div>
                <p className='text-white'>{cityName}, {countryName}</p>
              </div>
              <div className='flex flex-row mt-5 gap-x-1'>
                <div>
                  <FaRegCalendarAlt size={26} className='text-gray-600' />
                </div>
                <p className='text-white'>{currentDate}</p>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    );
  }
  
}



export default CurrentWeather