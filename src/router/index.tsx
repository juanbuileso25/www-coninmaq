import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import NosotrosPage from "../pages/NosotrosPage";
import { MaquinariaPage, ContactoPage, NotFoundPage } from "../pages/OtherPages";
import MaquinaDetailPage from "../pages/MaquinaDetailPage";
import { RepuestosListPage, RepuestoDetailPage } from "../pages/RepuestosPage";

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "nosotros", element: <NosotrosPage /> },
      { path: "trabaja-con-nosotros", element: <NosotrosPage /> },

      /* Maquinaria */
      { path: "maquinaria-pesada", element: <MaquinariaPage /> },
      { path: "maquinaria-pesada/:categoria", element: <MaquinariaPage /> },
      { path: "maquinaria-pesada/:categoria/:modelo", element: <MaquinaDetailPage /> },

      /* Repuestos */
      { path: "repuestos", element: <RepuestosListPage /> },
      { path: "repuestos/:marca", element: <RepuestosListPage /> },
      { path: "repuestos/:marca/:codigo", element: <RepuestoDetailPage /> },

      /* Other */
      { path: "contacto", element: <ContactoPage /> },
      { path: "tienda", element: <HomePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  ],
  { basename: import.meta.env.BASE_URL }
);

export default router;
