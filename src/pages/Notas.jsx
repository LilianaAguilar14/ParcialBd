import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Notas = () => {
  const [periodo1f, setPeriodo1f] = useState(
    localStorage.getItem("periodo1f") ?? []
  );
  const [periodo2f, setPeriodo2f] = useState(
    localStorage.getItem("periodo2f") ?? []
  );
  const [periodo3f, setPeriodo3f] = useState(
    localStorage.getItem("periodo3f") ?? []
  );
  const [prom1f, setProm1f] = useState(localStorage.getItem("prom1f") ?? []);

  const [periodo1p, setPeriodo1p] = useState(
    localStorage.getItem("periodo1p") ?? []
  );

  const [periodo2p, setPeriodo2p] = useState(
    localStorage.getItem("periodo2p") ?? []
  );
  const [periodo3p, setPeriodo3p] = useState(
    localStorage.getItem("periodo3p") ?? []
  );
  const [prom1p, setProm1p] = useState(localStorage.getItem("prom1p") ?? []);

  const [periodo1D, setPeriodo1D] = useState(
    localStorage.getItem("periodo1D") ?? []
  );
  const [periodo2D, setPeriodo2D] = useState(
    localStorage.getItem("periodo2D") ?? []
  );
  const [periodo3D, setPeriodo3D] = useState(
    localStorage.getItem("periodo3D") ?? []
  );
  const [prom1D, setProm1D] = useState(localStorage.getItem("prom1D") ?? []);

  const [periodo1G, setPeriodo1G] = useState(
    localStorage.getItem("periodo1G") ?? []
  );
  const [periodo2G, setPeriodo2G] = useState(
    localStorage.getItem("periodo2G") ?? []
  );
  const [periodo3G, setPeriodo3G] = useState(
    localStorage.getItem("periodo3G") ?? []
  );
  const [prom1G, setProm1G] = useState(localStorage.getItem("prom1G") ?? []);

  const getPeriodo1f = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/periodos/1`);
      const data = response.data;
      setPeriodo1f(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPeriodo2f = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/periodos/2`);
      const data = response.data;
      setPeriodo2f(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPeriodo3f = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/periodos/3`);
      const data = response.data;
      setPeriodo3f(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getProm1f = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/ciclos/1/1`);
      const data = response.data;
      setProm1f(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPeriodo1p = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/periodos/4`);
      const data = response.data;
      console.log(data.data);
      setPeriodo1p(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPeriodo2p = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/periodos/5`);
      const data = response.data;
      console.log(data.data);
      setPeriodo2p(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPeriodo3p = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/periodos/6`);
      const data = response.data;
      console.log(data.data);
      setPeriodo3p(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getProm1p = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/ciclos/1/2`);
      const data = response.data;
      setProm1p(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPeriodo1D = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/periodos/7`);
      const data = response.data;
      setPeriodo1D(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPeriodo2D = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/periodos/8`);
      const data = response.data;
      setPeriodo2D(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPeriodo3D = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/periodos/9`);
      const data = response.data;
      setPeriodo3D(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProm1D = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/ciclos/1/3`);
      const data = response.data;
      setProm1D(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPeriodo1G = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/periodos/10`);
      const data = response.data;
      setPeriodo1G(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPeriodo2G = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/periodos/11`);
      const data = response.data;
      setPeriodo2G(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPeriodo3G = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/periodos/12`);
      const data = response.data;
      setPeriodo3G(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProm1G = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/ciclos/1/4`);
      const data = response.data;
      setProm1G(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPeriodo1f();
  }, []);
  useEffect(() => {
    getProm1f();
  }, []);
  useEffect(() => {
    getProm1p();
  }, []);
  useEffect(() => {
    getProm1D();
  }, []);
  useEffect(() => {
    getProm1G();
  }, []);
  useEffect(() => {
    getPeriodo1p();
  }, []);

  useEffect(() => {
    getPeriodo2f();
  }, []);

  useEffect(() => {
    getPeriodo3f();
  }, []);

  useEffect(() => {
    getPeriodo1p();
  }, []);

  useEffect(() => {
    getPeriodo2p();
  }, []);

  useEffect(() => {
    getPeriodo3p();
  }, []);
  useEffect(() => {
    getPeriodo1D();
  }, []);
  useEffect(() => {
    getPeriodo2D();
  }, []);
  useEffect(() => {
    getPeriodo3D();
  }, []);
  useEffect(() => {
    getPeriodo1G();
  }, []);
  useEffect(() => {
    getPeriodo2G();
  }, []);
  useEffect(() => {
    getPeriodo3G();
  }, []);

  useEffect(() => {
    localStorage.setItem("prom1f", JSON.stringify(prom1f));
  }, [prom1f]);
  useEffect(() => {
    localStorage.setItem("periodo1p", JSON.stringify(periodo1p));
  }, [periodo1p]);

  useEffect(() => {
    localStorage.setItem("periodo3f", JSON.stringify(periodo3f));
  }, [periodo3f]);

  useEffect(() => {
    localStorage.setItem("periodo1f", JSON.stringify(periodo1f));
  }, [periodo1f]);
  useEffect(() => {
    localStorage.setItem("periodo2f", JSON.stringify(periodo2f));
  }, [periodo2f]);

  useEffect(() => {
    localStorage.setItem("periodo1p", JSON.stringify(periodo1p));
  }, [periodo1p]);
  useEffect(() => {
    localStorage.setItem("periodo2p", JSON.stringify(periodo2p));
  }, [periodo2p]);
  useEffect(() => {
    localStorage.setItem("periodo3p", JSON.stringify(periodo3p));
  }, [periodo3p]);
  useEffect(() => {
    localStorage.setItem("promp1", JSON.stringify(prom1p));
  }, [prom1p]);

  console.log(prom1p);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <table>
            <thead>
              <tr>
                <td className="bg-black text-white p-3 text-center">Materia</td>
                <td className="bg-black text-white p-3">Periodo 1</td>
                <td className="bg-black text-white p-3">Periodo 2</td>
                <td className="bg-black text-white p-3">Periodo 3</td>
                <td className="bg-black text-white p-3">Promedio</td>
                <td className="bg-black text-white p-3">Comentario</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center border border-solid p-3">
                  <p>Funciones de Bases de Datos</p>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{periodo1f.promedio}</button>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{periodo2f.promedio}</button>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{periodo3f.promedio}</button>
                </td>
                <td className="text-center border border-solid p-3">
                  {prom1f.promedio}
                </td>
                <td className="text-center border border-solid p-3">
                  {prom1f.comentario}
                </td>
              </tr>
              <tr>
                <td className="text-center border border-solid p-3">
                  <p>Programacion de paginas web</p>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{periodo1p.promedio}</button>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{periodo2p.promedio}</button>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{periodo3p.promedio}</button>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{prom1p.promedio_ciclo}</button>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{prom1p.comentario}</button>
                </td>
              </tr>
              <tr>
                <td className="text-center border border-solid p-3">
                  <p>Diseño de paginas web avanzado</p>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{periodo1D.promedio}</button>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{periodo2D.promedio}</button>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{periodo3D.promedio}</button>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{prom1D.promedio_ciclo}</button>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{prom1D.comentario}</button>
                </td>
              </tr>
              <tr>
                <td className="text-center border border-solid p-3">
                  <p>Gestion de servidores web</p>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{periodo1G.promedio}</button>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{periodo2G.promedio}</button>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{periodo3G.promedio}</button>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{prom1G.promedio_ciclo}</button>
                </td>
                <td className="text-center border border-solid p-3">
                  <button>{prom1G.comentario}</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Notas;