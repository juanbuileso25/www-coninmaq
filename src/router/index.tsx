import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import NosotrosPage from "../pages/NosotrosPage";
import { MaquinariaPage, ContactoPage, NotFoundPage } from "../pages/OtherPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "nosotros", element: <NosotrosPage /> },
      { path: "maquinaria-pesada", element: <MaquinariaPage /> },
      { path: "maquinaria-pesada/:categoria", element: <MaquinariaPage /> },
      { path: "maquinaria-pesada/:categoria/:modelo", element: <MaquinariaPage /> },
      { path: "repuestos", element: <MaquinariaPage /> },
      { path: "repuestos/:marca", element: <MaquinariaPage /> },
      { path: "contacto", element: <ContactoPage /> },
      { path: "trabaja-con-nosotros", element: <NosotrosPage /> },
      { path: "tienda", element: <HomePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
