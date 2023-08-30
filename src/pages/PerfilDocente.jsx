import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const obtenerPersonajes = async (pageNumber) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/docentes/${pageNumber}`);
    const data = response.data;
    setPersonajes(data.results);
    setTotalPages(data.info.pages);
  } catch (error) {
    console.log(error);
  }
};
const PerfilDocente = () => {
    const navigate=useNavigate()
    
  return (
    <div>
        <div className='flex justify-end'>
            <button onClick={()=>navigate('/docente/inicio')} className='bg-blue-700 hover:bg-blue-200 hover:text-black text-white font-bold py-2 px-4 m-2 rounded-xl w-46 uppercase text-center'>Volver al inicio</button>
        </div>
    </div>
  )
}

export default PerfilDocente