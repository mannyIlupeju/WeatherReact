import React, {useRef} from 'react'
import SearchIcon from "@mui/icons-material/Search";



const Header = ({city, setCity}) => {
  const inputRef = useRef(null)
  


  const submit = (e) => {
    if(e.key === 'Enter'){
      setCity(inputRef.current.value)
    }
  }

  const submitIcon = (e) => {
    e.preventDefault();
    setCity(inputRef.current.value);
  }

  console.log(city)




  return (
    <>
      <div className='container-width mx-auto p-10'>
        <div className='wrapper flex flex-row gap-x-2 bg-slate-600 p-5 rounded-3xl searchStyle w-full'>
          <input
            ref={inputRef}
            type='text'
            size={40}
            placeholder='Enter City'
            onKeyDown={submit}
            className='rounded-2xl searchBar'
          />
          <div className='bg-gray-200 p-2 rounded-3xl items-center flex cursor-pointer searchBubble '>
            <svg
              fill='currentColor'
              viewBox='0 0 16 16'
              height='1em'
              width='1em'
            >
              <path d='M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z' />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header