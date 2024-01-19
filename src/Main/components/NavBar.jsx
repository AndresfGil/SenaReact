import '../styles/NavBar.css'


export const NavBar = () => {
  return (
    <div className="navBar-container">
        <div className="hamburger">
          <input className="checkbox" type="checkbox" />
          <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
            <path
              className="lineTop line"
              stroke-linecap="round"
              stroke-width="4"
              stroke="black"
              d="M6 11L44 11"
            ></path>
            <path
              stroke-linecap="round"
              stroke-width="4"
              stroke="black"
              d="M6 24H43"
              className="lineMid line"
            ></path>
            <path
              stroke-linecap="round"
              stroke-width="4"
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
            <span><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/online-store.png" alt="online-store"/> Productos</span>
            <span><img width="50" height="50" src="https://img.icons8.com/ios-glyphs/50/000000/support.png" alt="support"/> Soporte</span>
            <span><img width="50" height="50" src="https://img.icons8.com/pastel-glyph/50/000000/box--v1.png" alt="box--v1"/> Mis pedidos</span>
            <span><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/guest-male--v2.png" alt="guest-male--v2"/> Mi perfil</span>
            <span><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/shopping-cart-loaded--v1.png" alt="shopping-cart-loaded--v1"/> Carrito</span>
        </div>
    </div>
  )
}
