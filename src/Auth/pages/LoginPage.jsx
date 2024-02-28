import { useDispatch, useSelector } from "react-redux";
import { Link, Link as RouterLink } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "../../Hooks/useForm";
import { startLoadingUsers, startLoginWithEmailPassword } from '../../Store/auth';
import { startLoadingItems } from '../../Store/items/thunks';
import { AuthLayout } from "../layout/AuthLayout";



const loginFormFields = {
    email: '',
    password: '',
};


export const LoginPage = () => {

  const { status } = useSelector((state) => state.auth)
    
    const dispatch = useDispatch();

    const { email, password, onInputChange:onLoginInputChange } = useForm( loginFormFields );

    const loginSubmit = async ( event ) => {
        event.preventDefault();
        

        try {
          dispatch(startLoadingItems())
          dispatch(startLoadingUsers())
          const result = await dispatch(
            startLoginWithEmailPassword({ email, password })
          );
    
          if (!result.ok) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Correo o contraseña incorrecta",
            });
          }
        } catch (error) {
          console.log('Error al ingresar el ususario');
        }
    }

  return (
    <AuthLayout>
        
        <img width="120" height="120" src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/100/external-smart-house-internet-of-things-xnimrodx-lineal-gradient-xnimrodx-2.png" alt="external-smart-house-internet-of-things-xnimrodx-lineal-gradient-xnimrodx-2"/>
  
        <form
        className="form-box"
        onSubmit={loginSubmit}
        >
            <div className="mb-3">
                <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name='email'
                value={ email }
                onChange={ onLoginInputChange }
                />
            </div>
            
            <div className="mb-3">
                <input
                type="password" 
                className="form-control"
                placeholder="Contraseña"
                name='password'
                value={ password }
                onChange={ onLoginInputChange }
                />
            </div>

            <button
            type="submit"
            className="btn-submit-login"
            >
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
