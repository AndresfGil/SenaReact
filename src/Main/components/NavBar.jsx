import { FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Link as RouterLink } from "react-router-dom";
import { startLogout } from "../../store/../Store/auth";
import '../styles/NavBar.css';


export const NavBar = () => {

  const user = useSelector((state) => state.auth)

  const dispatch = useDispatch();

  const isAdmin = user?.rol === 'admin';

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="navBar-container">
        <div className="hamburger">
          <input className="checkbox" type="checkbox" />
          <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
            <path
              className="lineTop line"
              strokeLinecap="round"
              strokeWidth="4"
              stroke="black"
              d="M6 11L44 11"
            ></path>
            <path
              strokeLinecap="round"
              strokeWidth="4"
              stroke="black"
              d="M6 24H43"
              className="lineMid line"
            ></path>
            <path
              strokeLinecap="round"
              strokeWidth="4"
              stroke="black"
              d="M6 37H43"
              className="lineBottom line"
            ></path>
          </svg>
        </div>

        <div className="box-nav1">
            <img width="80" height="80" src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/100/external-smart-house-internet-of-things-xnimrodx-lineal-gradient-xnimrodx-2.png" alt="external-smart-house-internet-of-things-xnimrodx-lineal-gradient-xnimrodx-2"/>
        </div>

        <div className="box-nav2">
            <span className='flex gap-2 items-center' ><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/online-store.png" alt="online-store"/><Link component={RouterLink} to="items" className="linkText">Productos</Link></span>
            {isAdmin && (
            <span className='flex gap-2 items-center' ><img width="50" height="50" src="https://img.icons8.com/ios-filled/100/user-male-circle.png" alt="support"/><Link component={RouterLink} to="soporte" className="linkText">Usuarios</Link></span>
            )}
            
            <span className='flex gap-2 items-center' ><img width="50" height="50" src="https://img.icons8.com/pastel-glyph/50/000000/box--v1.png" alt="box--v1"/><Link component={RouterLink} to="pedidos" className="linkText">Pedidos</Link></span>
            <span className='flex gap-2 items-center' ><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/guest-male--v2.png" alt="guest-male--v2"/><Link component={RouterLink} to="perfil" className="linkText">Mi Pefil</Link></span>
            <span className='flex gap-2 items-center' ><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/shopping-cart-loaded--v1.png" alt="shopping-cart-loaded--v1"/><Link component={RouterLink} to="carrito" className="linkText">Carrito</Link></span>

            <FaSignOutAlt className="text-red-500 cursor-pointer" 
            onClick={onLogout}
            />
        </div>
    </div>
  )
}
