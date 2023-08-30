import React from 'react'
import { Outlet,NavLink,useLocation}
from 'react-router-dom'
const LayoutAlumno = () => {
  return (
    <div>
        <div className='md:flex md:min-h-screen'>

            
            <div className='bg-blue-500 md:w-1/4  px-5 py-10'>
                
                <div className=' flex flex-col justify-center items-center pt-48'>
                    <img src="/public/img/jefry.jpeg" alt="" className='rounded-full w-36 h-36'/>
                    <NavLink className={({isActive})=>isActive?'bg-blue-900 text-black py-2 px-4 m-2 rounded-xl w-32 text-center font-bold ':'bg-blue-700 hover:bg-blue-200 hover:text-black text-white font-bold py-2 px-4 m-2 rounded-xl w-32 text-center'} to={'/alumno/notas'}>Notas</NavLink>
                    <NavLink className={({isActive})=>isActive?'bg-blue-900 text-black py-2 px-4 m-2 rounded-xl w-32 text-center font-bold ':'bg-blue-700 hover:bg-blue-200 hover:text-black text-white font-bold py-2 px-4 m-2 rounded-xl w-32 text-center'} to={'/alumno/perfil'}>Perfil</NavLink>
                </div>

                <div className='mt-80'>
                    <button className=" text-white font-bold py-2 px-4 m-2 hover:underline rounded-full text-center ">Log Out</button>
                </div>
                
            </div>
           
                
            
            <div className='md:w-3/4 p-10 md:h-screen '>
                <Outlet/>
            </div>
        </div>
        
        
    </div>
  )
}

export default LayoutAlumno