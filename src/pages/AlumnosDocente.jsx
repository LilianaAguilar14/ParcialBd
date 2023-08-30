import React from 'react'
import { useNavigate } from 'react-router-dom'


const AlumnosDocente = () => {
    const navigate=useNavigate()
  return (
    <div>
        
        <h1 className='text-6xl font-bold'>ALUMNOS</h1>
        <div className='flex justify-end'>
            <button onClick={()=>navigate('/docente/inicio')} className='bg-blue-700 hover:bg-blue-200 hover:text-black text-white font-bold py-2 px-4 m-2 rounded-xl w-46 uppercase text-center'>Volver al inicio</button>
        </div>
        <div class="mt-40">
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs bg-black uppercase text-white border border-solid border-gray-300">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            nombre del alumno
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border  border-gray-300 border-solid">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            <div className='flex items-center'>
                                <p className='md:w-10/12'>Mario Arrevillaga</p>
                                <button className='md:w-1/12 bg-blue-700 hover:underline hover:bg-blue-950 text-white rounded-lg h-8' onClick={()=>navigate('/docente/notas-alumno')}>ver</button>
                                
                            </div>
                           
                        </th>
                    
                    </tr>
                    <tr class="bg-white border  border-gray-300 border-solid">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            <div className='flex items-center'>
                                <p className='md:w-10/12'>Mario Arrevillaga</p>
                                <button className='md:w-1/12 bg-blue-700 hover:underline hover:bg-blue-950 text-white rounded-lg h-8' onClick={()=>navigate('/docente/notas-alumno')}>ver</button>
                                
                            </div>
                           
                        </th>
                    
                    </tr>
                    <tr class="bg-white border  border-gray-300 border-solid">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            <div className='flex items-center'>
                                <p className='md:w-10/12'>Mario Arrevillaga</p>
                                <button className='md:w-1/12 bg-blue-700 hover:underline hover:bg-blue-950 text-white rounded-lg h-8' onClick={()=>navigate('/docente/notas-alumno')}> ver</button>
                                
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