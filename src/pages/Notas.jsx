import React from 'react'
import { useNavigate } from 'react-router-dom'



const Notas = () => {
    const navigate=useNavigate();
  return (
    <div>
        <div className='flex justify-end'>
            <button onClick={()=>navigate('/alumno/inicio')} className='bg-blue-700 hover:bg-blue-200 hover:text-black text-white font-bold py-2 px-4 m-2 rounded-xl w-46 uppercase text-center'>Volver al inicio</button>
        </div>
       
       <h1 className='text-6xl'>Estas son las notas</h1>
        
        
    </div>
  )
}

export default Notas