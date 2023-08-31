import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
const NotasAlumDocente = () => {

    const navigate=useNavigate()

   
      const [per1ac1, setPer1ac1] = useState(
        localStorage.getItem("per1ac1") ?? []
      );
      const [per1ac2, setPer1ac2] = useState(
        localStorage.getItem("per1ac2") ?? []
      );
      const [per1ac3, setPer1ac3] = useState(
        localStorage.getItem("per1ac3") ?? []
      );
      const [prom, setProm] = useState(
        localStorage.getItem("prom") ?? []
      );

      const [per2ac1, setPer2ac1] = useState(
        localStorage.getItem("per2ac1") ?? []
      );
      const [per2ac2, setPer2ac2] = useState(
        localStorage.getItem("per2ac2") ?? []
      );
      const [per2ac3, setPer2ac3] = useState(
        localStorage.getItem("per2ac3") ?? []
      );
      const [prom2, setProm2] = useState(
        localStorage.getItem("prom2") ?? []
      );

      const [per3ac1, setPer3ac1] = useState(
        localStorage.getItem("per3ac1") ?? []
      );
      const [per3ac2, setPer3ac2] = useState(
        localStorage.getItem("per3ac2") ?? []
      );
      const [per3ac3, setPer3ac3] = useState(
        localStorage.getItem("per3ac3") ?? []
      );
      const [prom3, setProm3] = useState(
        localStorage.getItem("prom3") ?? []
      );

      const [com1, setCom1] = useState(
        localStorage.getItem("com1") ?? []
      );
      const [com2, setCom2] = useState(
        localStorage.getItem("com2") ?? []
      );
      const [com3, setCom3] = useState(
        localStorage.getItem("com3") ?? []
      );

      const getPer1ac1 = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/periodos/1`);
          const data = response.data;
          setPer1ac1(data.data);
        } catch (error) {
          console.log(error);
        }
      };
      const getPer1ac2 = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/periodos/1`);
          const data = response.data;
          setPer1ac2(data.data);
        } catch (error) {
          console.log(error);
        }
      };
      const getPer1ac3 = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/periodos/1`);
          const data = response.data;
          setPer1ac3(data.data);
        } catch (error) {
          console.log(error);
        }
      };
      const getProm = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/periodos/1`);
          const data = response.data;
          setProm(data.data);
        } catch (error) {
          console.log(error);
        }
      };

      const getPer2ac1 = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/periodos/2`);
          const data = response.data;
          setPer2ac1(data.data);
        } catch (error) {
          console.log(error);
        }
      };
      const getPer2ac2 = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/periodos/2`);
          const data = response.data;
          setPer2ac2(data.data);
        } catch (error) {
          console.log(error);
        }
      };
      const getPer2ac3 = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/periodos/2`);
          const data = response.data;
          setPer2ac3(data.data);
        } catch (error) {
          console.log(error);
        }
      };
      const getProm2 = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/periodos/2`);
          const data = response.data;
          setProm2(data.data);
        } catch (error) {
          console.log(error);
        }
      };

      const getPer3ac1 = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/periodos/3`);
          const data = response.data;
          setPer3ac1(data.data);
        } catch (error) {
          console.log(error);
        }
      };
      const getPer3ac2 = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/periodos/3`);
          const data = response.data;
          setPer3ac2(data.data);
        } catch (error) {
          console.log(error);
        }
      };
      const getPer3ac3 = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/periodos/3`);
          const data = response.data;
          setPer3ac3(data.data);
        } catch (error) {
          console.log(error);
        }
      };
      const getProm3 = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/periodos/3`);
          const data = response.data;
          setProm3(data.data);
        } catch (error) {
          console.log(error);
        }
      };

      const getCom1 = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/periodos/1`);
          const data = response.data;
          setCom1(data.data);
        } catch (error) {
          console.log(error);
        }
      };

      
      const getCom2 = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/periodos/2`);
          const data = response.data;
          setCom2(data.data);
        } catch (error) {
          console.log(error);
        }
      };
      
      const getCom3 = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/periodos/3`);
          const data = response.data;
          setCom3(data.data);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        getPer1ac1();
      }, []);
      useEffect(() => {
        getPer1ac2();
      }, []);
      useEffect(() => {
        getPer1ac3();
      }, []);
      useEffect(() => {
        getProm();
      }, []);

      useEffect(() => {
        getPer2ac1();
      }, []);
      useEffect(() => {
        getPer2ac2();
      }, []);
      useEffect(() => {
        getPer2ac3();
      }, []);
      useEffect(() => {
        getProm2();
      }, []);

      useEffect(() => {
        getPer3ac1();
      }, []);
      useEffect(() => {
        getPer3ac2();
      }, []);
      useEffect(() => {
        getPer3ac3();
      }, []);
      useEffect(() => {
        getProm3();
      }, []);
      useEffect(() => {
        getCom1();
      }, []);
      useEffect(() => {
        getCom2();
      }, []);
      useEffect(() => {
        getCom3();
      }, []);

      useEffect(() => {
        localStorage.setItem("per1ac1", JSON.stringify(per1ac1));
      }, [per1ac1]);
  
      useEffect(() => {
        localStorage.setItem("per1ac2", JSON.stringify(per1ac2));
      }, [per1ac2]);

      useEffect(() => {
        localStorage.setItem("per1ac3", JSON.stringify(per1ac3));
      }, [per1ac3]);

      useEffect(() => {
        localStorage.setItem("prom", JSON.stringify(prom));
      }, [prom]);

      useEffect(() => {
        localStorage.setItem("per2ac1", JSON.stringify(per2ac1));
      }, [per2ac1]);
  
      useEffect(() => {
        localStorage.setItem("per2ac2", JSON.stringify(per2ac2));
      }, [per2ac2]);

      useEffect(() => {
        localStorage.setItem("per2ac3", JSON.stringify(per2ac3));
      }, [per2ac3]);

      useEffect(() => {
        localStorage.setItem("prom2", JSON.stringify(prom2));
      }, [prom2]);

      useEffect(() => {
        localStorage.setItem("per3ac1", JSON.stringify(per3ac1));
      }, [per3ac1]);
  
      useEffect(() => {
        localStorage.setItem("per3ac2", JSON.stringify(per3ac2));
      }, [per3ac2]);

      useEffect(() => {
        localStorage.setItem("per3ac3", JSON.stringify(per3ac3));
      }, [per3ac3]);

      useEffect(() => {
        localStorage.setItem("prom3", JSON.stringify(prom3));
      }, [prom3]);
      
      useEffect(() => {
        localStorage.setItem("com1", JSON.stringify(com1));
      }, [com1]);
      useEffect(() => {
        localStorage.setItem("com2", JSON.stringify(com2));
      }, [com2]);
      useEffect(() => {
        localStorage.setItem("com3", JSON.stringify(com3));
      }, [com3]);
     

  return (
    <div>
        <div className='flex justify-center'>
        <h1 className='text-6xl font-bold'>Notas Por Alumno</h1>
        </div>
        <div className='flex justify-center py-5'>
        <h1 className='text-6xl font-bold'>Ciclo 2</h1>
        </div>
      
       
        <div className="relative  mt-40">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs bg-black uppercase text-white border border-solid border-gray-300">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            Periodo
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Actividad 1 (25%)
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Actividad 2 (25%)
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Parcial (50%)
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Promedio 
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Comentario 
                        </th>


                        
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border  border-gray-300 border-solid">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">1</td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8' value={per1ac1.actividad1} /></td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'value={per1ac2.actividad2}/></td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'value={per1ac3.parcial}/></td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'value={prom.promedio}/></td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'value={com1.comentario}/></td>
                        
                    </tr>
                    <tr className="bg-white border  border-gray-300 border-solid">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">1</td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8' value={per2ac1.actividad1} /></td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'value={per2ac2.actividad2}/></td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'value={per2ac3.parcial}/></td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'value={prom2.promedio}/></td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'value={com2.comentario}/></td>
                        
                    </tr>

                    <tr className="bg-white border  border-gray-300 border-solid">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">1</td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8' value={per3ac1.actividad1} /></td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'value={per3ac2.actividad2}/></td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'value={per3ac3.parcial}/></td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'value={prom3.promedio}/></td>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"><input type="text" className='bg-gray-300 rounded-md h-8'value={com3.comentario}/></td>
                        
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default NotasAlumDocente