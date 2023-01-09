import React from 'react'
import {motion} from 'framer-motion'




const Highlight = ({weather}) => {



   const highlightVariant = {
    hidden: {
      x: "10vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: '10',
        duration: 1
      }
    }
  }
  

  if(!weather) {
  return null
  }
  else {
    const {data} = weather
    const humidity = data[0].rh + "%"
    const dewPoint = data[0].dewpt + "°"
    const visibility = data[0].vis + 'km'
    const feelsLike = data[0].app_temp + "°C"
    
      return (
        <>
          <div>
            <motion.div className='bg-Card w-fit p-3 ml-8 md:ml-0'
            variants={highlightVariant}
            initial={'hidden'}
            animate={'visible'}>
              <h2 className='text-white text-sm'>Today's Highlight</h2>

              {/* Humidity */}
              <div className='flex flex-row gap-x-20 mt-8 bg-Card rounded-xl p-4'>
                <div className='text-white'>
                  <div>
                    <h4>Humidity</h4>
                  </div>
                  <div className='flex flex-row gap-x-20 mt-3'>
                    <div className='mt-2'>
                      <p className='text-2xl md:text-4xl'>{humidity}</p>
                    </div>

                    <div className='flex flex-col gap-y-2'>
                      <svg
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        height='1em'
                        width='1em'
                      >
                        <path d='M12 22c4.636 0 8-3.468 8-8.246C20 7.522 12.882 2.4 12.579 2.185a1 1 0 00-1.156-.001C11.12 2.397 4 7.503 4 13.75 4 18.53 7.364 22 12 22zm-.001-17.74C13.604 5.55 18 9.474 18 13.754 18 17.432 15.532 20 12 20s-6-2.57-6-6.25c0-4.29 4.394-8.203 5.999-9.49z' />
                      </svg>
                      <p className='text-sm'>
                        The dew point is {dewPoint} right now
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visibility */}
              <div className='flex flex-row gap-x-20 mt-8 bg-Card rounded-xl p-4'>
                <div className='text-white'>
                  <div>
                    <h4>Visibility</h4>
                  </div>
                  <div className='flex flex-row gap-x-20 mt-3'>
                    <div className='mt-2'>
                      <p className='text-2xl md:text-4xl'>{visibility}</p>
                    </div>

                    <div className='flex flex-col gap-y-2'>
                      <svg
                        fill='currentColor'
                        viewBox='0 0 16 16'
                        height='1em'
                        width='1em'
                      >
                        <path d='M4 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm-3 2a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm2 2a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM13.405 4.027a5.001 5.001 0 00-9.499-1.004A3.5 3.5 0 103.5 10H13a3 3 0 00.405-5.973zM8.5 1a4 4 0 013.976 3.555.5.5 0 00.5.445H13a2 2 0 010 4H3.5a2.5 2.5 0 11.605-4.926.5.5 0 00.596-.329A4.002 4.002 0 018.5 1z' />
                      </svg>
                      <p className='text-sm'>Haze is affecting visibility</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feels like */}
              <div className='flex flex-row gap-x-20 mt-8 bg-Card rounded-xl p-4'>
                <div className='text-white'>
                  <div>
                    <h4>Feels like</h4>
                  </div>
                  <div className='flex flex-row gap-x-2 mt-3'>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 16 16'
                      height='2em'
                      width='1em'
                    >
                      <path d='M9.5 12.5a1.5 1.5 0 11-2-1.415V6.5a.5.5 0 011 0v4.585a1.5 1.5 0 011 1.415z' />
                      <path d='M5.5 2.5a2.5 2.5 0 015 0v7.55a3.5 3.5 0 11-5 0V2.5zM8 1a1.5 1.5 0 00-1.5 1.5v7.987l-.167.15a2.5 2.5 0 103.333 0l-.166-.15V2.5A1.5 1.5 0 008 1z' />
                    </svg>
                    <p className='text-2xl md:text-4xl'>{feelsLike}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      );
  }
}

export default Highlight