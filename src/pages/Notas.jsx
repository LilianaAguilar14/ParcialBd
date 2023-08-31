import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Notas = () => {
  const [periodo1, setPeriodo1] = useState(
    localStorage.getItem("periodo1") ?? []
  );
  const [periodo2, setPeriodo2] = useState(
    localStorage.getItem("periodo2") ?? []
  );
  const [periodo3, setPeriodo3] = useState(
    localStorage.getItem("periodo3") ?? []
  );
  const [prom1, setProm1] = useState(localStorage.getItem("prom1") ?? []);

  const getPeriodo1 = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/periodos/1`);
      const data = response.data;
      setPeriodo1(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPeriodo2 = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/periodos/2`);
      const data = response.data;
      setPeriodo2(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPeriodo3 = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/periodos/3`);
      const data = response.data;
      setPeriodo3(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPeriodo1();
  }, []);

  useEffect(() => {
    getPeriodo2();
  }, []);

  useEffect(() => {
    getPeriodo3();
  }, []);

  useEffect(() => {
    localStorage.setItem("periodo3", JSON.stringify(periodo3));
  }, [periodo3]);

  useEffect(() => {
    localStorage.setItem("periodo1", JSON.stringify(periodo1));
  }, [periodo1]);
  useEffect(() => {
    localStorage.setItem("periodo2", JSON.stringify(periodo2));
  }, [periodo2]);

  console.log(periodo3);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <table>
            <thead>
              <tr>
                <td className="bg-black text-white p-3">Periodo 1</td>
                <td className="bg-black text-white p-3">Periodo 2</td>
                <td className="bg-black text-white p-3">Periodo 3</td>
                <td className="bg-black text-white p-3">Promedio</td>
                <td className="bg-black text-white p-3">Comenario</td>
              </tr>
            </thead>
            <tbody>
              <td className="text-center">
                <button>{periodo1.promedio}</button>
              </td>
              <td className="text-center">
                <button>{periodo2.promedio}</button>
              </td>
              <td className="text-center">
                <button>{periodo3.promedio}</button>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Notas;
