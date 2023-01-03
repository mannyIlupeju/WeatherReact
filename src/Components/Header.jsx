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
      <div className='container-width mx-auto p-20'>
        <div className='wrapper flex flex-row gap-x-2 bg-slate-600 p-5 rounded-3xl searchStyle'>
          <input
            ref={inputRef}
            type='text'
            size={40}
            placeholder='Enter City'
            onKeyDown={submit}
            className='rounded-2xl searchBar'
          />
          <div className='bg-gray-200 p-1 rounded-2xl'>
            <SearchIcon onClick={submitIcon}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header