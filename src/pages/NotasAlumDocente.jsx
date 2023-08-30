import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotasAlumDocente = () => {

    const navigate=useNavigate()

  return (
    <div>
        <h1 className='text-6xl font-bold'>Notas por alumno</h1>
        <div className='flex justify-end'>
            <button onClick={()=>navigate('/docente/inicio')} className='bg-blue-700 hover:bg-blue-200 hover:text-black text-white font-bold py-2 px-4 m-2 rounded-xl w-46 uppercase text-center'>Volver al inicio</button>
        </div>
        <div class="relative  mt-40">
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs bg-black uppercase text-white border border-solid border-gray-300">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-center">
                            Periodo
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Actividad 1 (25%)
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Actividad 2 (25%)
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Parcial (50%)
                        </th>

                        
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border  border-gray-300 border-solid">
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">1</td>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'/></td>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'/></td>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'/></td>
                        
                    </tr>
                    <tr class="bg-white border  border-gray-300 border-solid">
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">2</td>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'/></td>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'/></td>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'/></td>
                    
                    </tr>
                    <tr class="bg-white border  border-gray-300 border-solid">
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">3</td>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'/></td>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'/></td>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'/></td>
                    
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default NotasAlumDocente