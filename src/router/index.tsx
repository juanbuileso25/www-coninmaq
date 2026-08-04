import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import NosotrosPage from "../pages/NosotrosPage";
import { MaquinariaPage, ContactoPage, NotFoundPage } from "../pages/OtherPages";
import MaquinaDetailPage from "../pages/MaquinaDetailPage";
import { RepuestosListPage, RepuestoDetailPage } from "../pages/RepuestosPage";
import CalificarPage from "../pages/CalificarPage";
import PoliticaDatosPage from "../pages/PoliticaDatosPage";

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "nosotros", element: <NosotrosPage /> },
      { path: "trabaja-con-nosotros", element: <Navigate to="/nosotros" replace /> },

      /* Maquinaria */
      { path: "maquinaria-pesada", element: <MaquinariaPage /> },
      { path: "maquinaria-pesada/:categoria", element: <MaquinariaPage /> },
      { path: "maquinaria-pesada/:categoria/:modelo", element: <MaquinaDetailPage /> },

      /* Repuestos */
      { path: "repuestos", element: <RepuestosListPage /> },
      { path: "repuestos/:marca", element: <RepuestosListPage /> },
      { path: "repuestos/:marca/:codigo", element: <RepuestoDetailPage /> },

      /* Renta */
      { path: "renta", element: <MaquinariaPage /> },
      { path: "renta/:categoria", element: <MaquinariaPage /> },
      { path: "renta/:categoria/:modelo", element: <MaquinaDetailPage /> },

      /* Other */
      { path: "calificar", element: <CalificarPage /> },
      { path: "contacto", element: <ContactoPage /> },
      { path: "politica-privacidad", element: <PoliticaDatosPage /> },
      { path: "tienda", element: <Navigate to="/" replace /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  ],
  { basename: import.meta.env.BASE_URL }
);

export default router;
