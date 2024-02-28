import { Navigate, Route, Routes } from "react-router-dom"
import { MainLayout } from '../layout/MainLayout'
import { Carrito, Pedidos, Perfil } from '../pages'
import Items from '../pages/Items'
import Usuarios from '../pages/Usuarios'

const MainRoutes = () => {
  return (
    <>
    
      <MainLayout />

      <div className="flex flex-wrap justify-center bg-yellow-200 bg-opacity-5 p-4 rounded-lg shadow-lg max-w-100vw-lg mx-auto mt-20">

        <Routes>

            <Route path="items" element={<Items />} />

            <Route path="soporte" element={<Usuarios />} />

            <Route path="pedidos" element={<Pedidos />} />

            <Route path="perfil" element={<Perfil />} />

            <Route path="carrito" element={<Carrito />} />

            <Route path="/*" element={<Navigate to={"/items"} />} />

        </Routes>

      </div>

      
    
    </>
  )
}

export default MainRoutes
