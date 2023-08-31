import { useState, useEffect } from "react";
import { useNavigate, Navigate, Outlet } from "react-router-dom";
import LayoutAlumno from "./LayoutAlumno";
import Perfil from "../pages/Perfil";

const Login2 = () => {
  const [user2, setUser] = useState(localStorage.getItem("user") ?? "");
  const [pass2, setPass] = useState("");
  const [error, setError] = useState(false);
  const [bandera, setBandera] = useState(false);
  const [info, setInfo] = useState(localStorage.getItem("info") ?? {});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const objInfo = {
      user2,
      pass2,
    };
    setInfo(objInfo);
    console.log(user2, pass2);

    try {
      const response = await fetch("http://localhost:3000/api/login2", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
          "Content-Type": "application/json",
          mode: "no-cors",
        },

        body: JSON.stringify({ carnet: user2, password: pass2 }),
      });

      if (response.ok) {
        const data = await response.json();
        // Almacenar el token en localStorage
        localStorage.setItem("token", data.token);
        if (data.Login2) {
          setBandera(true);
        } else {
          setError(true);
        }
        console.log(data);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      setError(true);
    }
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user2));
  }, [user2]);
  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(info));
  }, [info]);

  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: "url(./img/mu.jpg)" }}
      className="bg-no-repeat bg-cover w-full h-screen"
    >
      <div className="w-full max-w-xs conatiner mx-auto py-20 rounded-xl">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          {error && (
            <div className="bg-red-700 text-white font-bold uppercase p-5 text-sm rounded-lg text-center mb-5">
              Login invalido
            </div>
          )}
          {bandera && <Navigate to={`/docente/${user2}`} replace={true} />}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Login
            </h5>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Usuario
              </label>
              <input
                type="text"
                name="carnet"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start"></div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
        {[info].includes({}) && <LayoutAlumno info={info} />}
        {[info].includes({}) && <Perfil info={info} />}
      </div>
      <Outlet />
    </div>
  );
};

export default Login2;
