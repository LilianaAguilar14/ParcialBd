import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Perfil = () => {
  const navigate = useNavigate();
  const [alumno, setAlumno] = useState(localStorage.getItem("alumno") ?? {});

  const getAlumnos = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/alumnos/2023KC120`
      );
      const data = response.data;
      setAlumno(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAlumnos();
  }, []);

  useEffect(() => {
    localStorage.setItem("alumno", JSON.stringify(alumno));
  }, [alumno]);

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="mt-52">
          <h1 className="text-start font-bold text-6xl border-b-8 border-blue-700">
            <span className="text-blue-700">Nombre: </span>
            {alumno.nombre}
          </h1>

          <h1 className="text-start font-semibold text-3xl mt-11 border-b-4 border-blue-700">
            <span className="text-blue-700">Carnet: </span>
            {alumno.carnet}
          </h1>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
