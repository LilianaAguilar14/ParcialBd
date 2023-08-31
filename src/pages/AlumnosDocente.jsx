import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from'react'
import axios from 'axios'


const AlumnosDocente = () => {
    const navigate=useNavigate()

    const [alumnos, setAlumnos] = useState(localStorage.getItem("alumnos") ?? []);
    const [alumno, setAlumno] = useState(localStorage.getItem("alumno") ?? []);
    
    const getAlumnos = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/alumnos/2023JJ110')
            const data = res.data;
            setAlumnos(data.data)
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        getAlumnos()
    }, [])

    useEffect(() => {
        localStorage.setItem("alumnos", JSON.stringify(alumnos));
      }, [alumnos]);

    
    const getAlumno = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/alumnos/2023KC120')
            const data = res.data;
            setAlumno(data.data)
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        getAlumno()
    }, [])

    useEffect(() => {
        localStorage.setItem("alumno", JSON.stringify(alumno));
      }, [alumno]);
 

  return (
    <div>
        <div className='flex justify-center'>
        <h1 className='text-6xl font-bold'>Funciones de Bases de Datos</h1>
        </div>
        <div className='flex justify-center py-5'>
        <h1 className='text-6xl font-bold'>ALUMNOS</h1>
        </div>
      
       
        <div className="mt-40">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs bg-black uppercase text-white border border-solid border-gray-300">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            nombre del alumno
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border  border-gray-300 border-solid">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            <div className='flex items-center'>
                                <p className='md:w-10/12'>{alumnos.nombre} {alumnos.apellido}</p>
                                <button className='md:w-1/12 bg-blue-700 hover:underline hover:bg-blue-950 text-white rounded-lg h-8' onClick={()=>navigate('/docente/notas-alumno')}>ver</button>
                                
                            </div>
                           
                        </th>
                    
                    </tr>
                    <tr className="bg-white border  border-gray-300 border-solid">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            <div className='flex items-center'>
                           {  <p className='md:w-10/12'>{alumno.nombre} {alumno.apellido}</p> }
                                <button className='md:w-1/12 bg-blue-700 hover:underline hover:bg-blue-950 text-white rounded-lg h-8' onClick={()=>navigate('/docente/notas-alumno')}>ver</button>
                            </div>
                           
                        </th>
                    
                    </tr>
                   
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default AlumnosDocente