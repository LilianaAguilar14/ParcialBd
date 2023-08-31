import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Alumno from "./pages/Alumno.jsx";
import LayoutAlumno from "./components/LayoutAlumno.jsx";
import Notas from "./pages/Notas";
import Perfil from "./pages/Perfil";
import LayoutDocente from "./components/LayoutDocente";
import Docente from "./pages/Docente";
import AlumnosDocente from "./pages/AlumnosDocente";
import PerfilDocente from "./pages/PerfilDocente";
import NotasAlumDocente from "./pages/NotasAlumDocente";
import ProtectedRoute from "./pages/ProtectedRoute";
import AuthProvider from "./auth/AuthProvider";
import SignUp from "./components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/alumno",
    element: <LayoutAlumno />,
    children: [
      {
        path: "/alumno/:carnet",
        element: <Alumno />,
      },
      {
        path: "/alumno/notas",
        element: <Notas />,
      },
      {
        path: "/alumno/perfil",
        element: <Perfil />,
      },
    ],
  },

  {
    path: "/docente",
    element: <LayoutDocente />,
    children: [
      {
        path: "/docente/inicio",
        element: <Docente />,
      },
      {
        path: "/docente/alumnos",
        element: <AlumnosDocente />,
      },
      {
        path: "/docente/perfil",
        element: <PerfilDocente />,
      },
      {
        path: "/docente/notas-alumno",
        element: <NotasAlumDocente />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
