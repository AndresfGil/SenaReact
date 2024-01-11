import { Link, Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"


export const LoginPage = () => {



  return (
    <AuthLayout>
        
        <img width="120" height="120" src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/100/external-smart-house-internet-of-things-xnimrodx-lineal-gradient-xnimrodx-2.png" alt="external-smart-house-internet-of-things-xnimrodx-lineal-gradient-xnimrodx-2"/>
  
        <form
        className="form-box"
        >
            <div className="mb-3">
                <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name='loginEmail'
                // value={ loginEmail }
                // onChange={ onLoginInputChange }
                />
            </div>
            
            <div className="mb-3">
                <input
                type="password" 
                className="form-control"
                placeholder="Contraseña"
                name='loginPassword'
                // value={ loginEmail }
                // onChange={ onLoginInputChange }
                />
            </div>

            <button
            className="btn-submit-login"
            type="submit">
                Iniciar Sesion
            </button>
            
        </form>

            <div className="text-box">
                <Link className="linkText">
                    ¿Has olvidado tu contraseña?
                </Link>
                <Link component={RouterLink} to="/auth/register" className="linkText">
                    Crear una cuenta
                </Link>
            </div>

    </AuthLayout>
  )
}
