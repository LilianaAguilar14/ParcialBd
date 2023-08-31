import React from "react";
import { useNavigate, Form } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const NotasAlumDocente = () => {
  const navigate = useNavigate();

  const [per1ac1, setPer1ac1] = useState(localStorage.getItem("per1ac1") ?? []);
  const [per1ac2, setPer1ac2] = useState(localStorage.getItem("per1ac2") ?? []);
  const [per1ac3, setPer1ac3] = useState(localStorage.getItem("per1ac3") ?? []);
  const [prom, setProm] = useState(localStorage.getItem("prom") ?? []);

  const [per2ac1, setPer2ac1] = useState(localStorage.getItem("per2ac1") ?? []);
  const [per2ac2, setPer2ac2] = useState(localStorage.getItem("per2ac2") ?? []);
  const [per2ac3, setPer2ac3] = useState(localStorage.getItem("per2ac3") ?? []);
  const [prom2, setProm2] = useState(localStorage.getItem("prom2") ?? []);

  const [per3ac1, setPer3ac1] = useState(localStorage.getItem("per3ac1") ?? []);
  const [per3ac2, setPer3ac2] = useState(localStorage.getItem("per3ac2") ?? []);
  const [per3ac3, setPer3ac3] = useState(localStorage.getItem("per3ac3") ?? []);
  const [prom3, setProm3] = useState(localStorage.getItem("prom3") ?? []);

  const [com1, setCom1] = useState(localStorage.getItem("com1") ?? []);
  const [com2, setCom2] = useState(localStorage.getItem("com2") ?? []);
  const [com3, setCom3] = useState(localStorage.getItem("com3") ?? []);

  const [idAl, setIdAl] = useState(1);

  const handleEditarPeriodo1 = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/periodos/1", {
        method: "PUT",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
          "Content-Type": "application/json",
          mode: "no-cors",
        },

        body: JSON.stringify({
          comentario: com1,
          promedio: prom,
          parcial: per1ac3,
          actividad1: per1ac1,
          actividad2: per1ac2,
          id_alumno: idAl,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("Se ha editado correctamente el periodo");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };
  const handleEditarPeriodo2 = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/periodos/2", {
        method: "PUT",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
          "Content-Type": "application/json",
          mode: "no-cors",
        },

        body: JSON.stringify({
          comentario: com2,
          promedio: prom2,
          parcial: per2ac3,
          actividad1: per2ac1,
          actividad2: per2ac2,
          id_alumno: idAl,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("Se ha editado correctamente el periodo");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };
  const handleEditarPeriodo3 = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/periodos/3", {
        method: "PUT",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
          "Content-Type": "application/json",
          mode: "no-cors",
        },

        body: JSON.stringify({
          comentario: com3,
          promedio: prom3,
          parcial: per3ac3,
          actividad1: per3ac1,
          actividad2: per3ac2,
          id_alumno: idAl,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("Se ha editado correctamente el periodo");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };
  const handleEliminarPeriodo1 = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/periodos/1", {
        method: "PUT",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
          "Content-Type": "application/json",
          mode: "no-cors",
        },

        body: JSON.stringify({
          comentario: "Escribe un comentario",
          promedio: "0",
          parcial: "0",
          actividad1: "0",
          actividad2: "0",
          id_alumno: idAl,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("Se ha eliminado dorrectamente el periodo");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  const handleEliminarPeriodo2 = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/periodos/2", {
        method: "PUT",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
          "Content-Type": "application/json",
          mode: "no-cors",
        },

        body: JSON.stringify({
          comentario: "Escribe un comentario",
          promedio: "0",
          parcial: "0",
          actividad1: "0",
          actividad2: "0",
          id_alumno: idAl,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("Se ha eliminado correctamente el periodo");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };
  const handleEliminarPeriodo3 = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/periodos/3", {
        method: "PUT",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
          "Content-Type": "application/json",
          mode: "no-cors",
        },

        body: JSON.stringify({
          comentario: "Escribe un comentario",
          promedio: "0",
          parcial: "0",
          actividad1: "0",
          actividad2: "0",
          id_alumno: idAl,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("Se ha eliminado correctamente el periodo");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

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
    
    
    <div className="max-w-screen-lg mx-auto px-4 overflow-x-auto">
      <div className="flex justify-center py-5">
        <h1 className="text-6xl font-bold">Notas Por Alumno</h1>
      </div>
      <div className="flex justify-center py-5">
        <h1 className="text-6xl font-bold">Ciclo 2</h1>
      </div>

      <div className="relative m-1.5 ">
        <table className="w-full text-sm text-center text-black-500 ">
          <thead className="text-xs bg-black uppercase text-white border border-solid border-gray-300">
            <tr>
              <th scope="col" className=" px-6 py-4 text-sm text-gray-900 whitespace-nowrap text-center w-[10%]">
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
              <th scope="col" className=" px-6 py-3 text-center">
                Id de alumno
              </th>
              <th scope="col" className=" px-6 py-3 text-center">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border  border-gray-300 border-solid">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                1
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  placeholder={per1ac1.actividad1}
                  onChange={(e) => setPer1ac1(e.target.value)}
                  /* value={per1ac1.actividad1} */
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  /* value={per1ac2.actividad2} */
                  placeholder={per1ac2.actividad2}
                  onChange={(e) => setPer1ac2(e.target.value)}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  /* value={per1ac3.parcial} */
                  placeholder={per1ac3.parcial}
                  onChange={(e) => setPer1ac3(e.target.value)}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  /* value={prom.promedio} */
                  placeholder={prom.promedio}
                  onChange={(e) => setProm(e.target.value)}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  /* value={com1.comentario} */
                  placeholder={com1.comentario}
                  onChange={(e) => setCom1(e.target.value)}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  value={idAl}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <div className="ml-2">
                  <Form onSubmit={handleEditarPeriodo1}>
                    <button
                      className="bg-blue-700 rounded-lg p-3 text-white w-20"
                      type="submit"
                    >
                      Editar
                    </button>
                  </Form>
                </div>
                <div className="mt-3">
                  <Form onSubmit={handleEliminarPeriodo1}>
                    <button className="bg-red-700 rounded-lg p-3 text-white ml-3 w-20">
                      Eliminar
                    </button>
                  </Form>
                </div>
              </td>
            </tr>
            <tr className="bg-white border  border-gray-300 border-solid">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                2
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  /* value={per2ac1.actividad1} */
                  placeholder={per2ac1.actividad1}
                  onChange={(e) => setPer2ac1(e.target.value)}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  /* value={per2ac2.actividad2} */
                  placeholder={per2ac2.actividad2}
                  onChange={(e) => setPer2ac2(e.target.value)}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  /* value={per2ac3.parcial} */
                  placeholder={per2ac3.parcial}
                  onChange={(e) => setPer2ac3(e.target.value)}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  /* value={prom2.promedio} */
                  placeholder={prom2.promedio}
                  onChange={(e) => setProm2(e.target.value)}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  /* value={com2.comentario} */
                  placeholder={com2.comentario}
                  onChange={(e) => setCom2(e.target.value)}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  value={idAl}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <div className="ml-2">
                  <Form onSubmit={handleEditarPeriodo2}>
                    <button
                      className="bg-blue-700 rounded-lg p-3 text-white w-20"
                      type="submit"
                    >
                      Editar
                    </button>
                  </Form>
                </div>
                <div className="mt-3">
                  <Form onSubmit={handleEliminarPeriodo2}>
                    <button className="bg-red-700 rounded-lg p-3 text-white ml-3 w-20">
                      Eliminar
                    </button>
                  </Form>
                </div>
              </td>
            </tr>

            <tr className="bg-white border  border-gray-300 border-solid">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                3
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  /* value={per3ac1.actividad1} */
                  placeholder={per3ac1.actividad1}
                  onChange={(e) => setPer3ac1(e.target.value)}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  /* value={per3ac2.actividad2} */
                  placeholder={per3ac2.actividad2}
                  onChange={(e) => setPer3ac2(e.target.value)}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  /* value={per3ac3.parcial} */
                  placeholder={per3ac3.parcial}
                  onChange={(e) => setPer3ac3(e.target.value)}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  /* value={prom3.promedio} */
                  placeholder={prom3.promedio}
                  onChange={(e) => setProm3(e.target.value)}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  /* value={com3.comentario} */
                  placeholder={com3.comentario}
                  onChange={(e) => setCom3(e.target.value)}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <input
                  type="text"
                  className="bg-gray-300 rounded-md h-8"
                  value={idAl}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
              >
                <div className="ml-2">
                  <Form onSubmit={handleEditarPeriodo3}>
                    <button
                      className="bg-blue-700 rounded-lg p-3 text-white w-20"
                      type="submit"
                    >
                      Editar
                    </button>
                  </Form>
                </div>
                <div className="mt-3">
                  <Form onSubmit={handleEliminarPeriodo3}>
                    <button className="bg-red-700 rounded-lg p-3 text-white ml-3 w-20">
                      Eliminar
                    </button>
                  </Form>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotasAlumDocente;
