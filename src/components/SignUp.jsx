import React from "react";
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import LayoutAuth from "./LayoutAuth";
import { API_URL } from "../auth/Constants";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          user,
          pass,
        }),
      });

      if (response.ok && name && user && pass) {
        navigate("/");
        console.log("User was created successfully");
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
        console.log("User was not ");
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (useAuth.isAuthenticated) {
    return <Navigate to={"/alumno/inicio"} />;
  }

  return (
    <LayoutAuth>
      <div
        style={{ backgroundImage: "url(./img/mu.jpg)" }}
        className="bg-no-repeat bg-cover w-full h-screen"
      >
        <div className="w-full max-w-xs conatiner mx-auto py-20 rounded-xl">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            {error && (
              <div className="bg-red-700 text-white font-bold uppercase p-5 text-sm rounded-lg text-center mb-5">
                Debe llenar todos los campos
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign up
              </h5>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Usuario
                </label>
                <input
                  type="text"
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
        </div>
      </div>
    </LayoutAuth>
  );
};

export default SignUp;
