import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from'react'
import axios from 'axios'


const PerfilDocente = () => {
    const navigate=useNavigate()

    const [docentes, setDocente] = useState(localStorage.getItem("docentes") ?? []);

    
    const getDocente = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/docentes/2020JP110D')
            const data = res.data;
            setDocente(data.data)
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        getDocente()
    }, [])

    useEffect(() => {
        localStorage.setItem("docentes", JSON.stringify(docentes));
      }, [docentes]);
    
  return (
    <div>
        <div className='flex justify-center'>
        <h1 className='text-6xl font-bold'>{docentes.nombre} {docentes.apellido}</h1>
        </div>
    </div>
  )
}

export default PerfilDocente