import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  const newPageContact = () =>{
    navigate("/newContact")
  }

  return (
    <div  className='w-[100%]  text-right bg-green-300 p-10 '>
      <button onClick={()=>newPageContact()} className='p-2 rounded-2xl hover:bg-orange-300 bg-slate-50'>Create a new connection</button>
    </div>
  )
}

export default Header
