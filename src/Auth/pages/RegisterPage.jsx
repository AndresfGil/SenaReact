import { Link, Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"


export const RegisterPage = () => {
  return (
    <AuthLayout>
        
        <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/user-male-circle.png" alt="user-male-circle"/>

        <form
        className="form-box"
        >   
            <div className="mb-3">
                <input
                type="text"
                className="form-control"
                placeholder="Nombre Completo"
                name='userName'
                // value={ loginEmail }
                // onChange={ onLoginInputChange }
                />
            </div>

            <div className="mb-3">
                <input
                type="text"
                className="form-control"
                placeholder="Numero de contacto"
                name='userNumberPhone'
                // value={ loginEmail }
                // onChange={ onLoginInputChange }
                />
            </div>

            <div className="mb-3">
                <input
                type="text"
                className="form-control"
                placeholder="Direccion"
                name='userAddress'
                // value={ loginEmail }
                // onChange={ onLoginInputChange }
                />
            </div>

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
                Registrarse
            </button>
            
        </form>

            <div className="text-box-2">
                <Link component={RouterLink} to={"/>auth/login"} className="linkText">
                    ¿Ya tienes una cuenta?
                </Link>
            </div>

    </AuthLayout>
  )
}
