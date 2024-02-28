import { useDispatch } from "react-redux";
import { Link, Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { startCreatingUserWithEmailPassword } from '../../Store/auth';
import { AuthLayout } from "../layout/AuthLayout";



const registerFormFields = {
    registerName: '',
    registerPhone: '',
    registerAddress: '',
    registerEmail: '',
    registerPassword: '',
    rol: ''
};


export const RegisterPage = () => {

    const navigate = useNavigate()
  
    const dispatch = useDispatch()
  

    const { formState, name, phone, address, email, password, onInputChange:onRegisterInputChange } = useForm( registerFormFields );

    const registerSubmit = async ( event ) => {
      event.preventDefault();

      try {
        // Dispatch para crear el usuario
        await dispatch(startCreatingUserWithEmailPassword(formState));
    
        navigate("/login")
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        // Aquí podrías mostrar un mensaje de error al usuario o tomar otras acciones según sea necesario
      }
      }


  return (
    <AuthLayout>
        
        <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/user-male-circle.png" alt="user-male-circle"/>

        <form
        className="form-box"
        onSubmit={registerSubmit}
        >   
            <div className="mb-3">
                <input
                type="text"
                className="form-control"
                placeholder="Nombre Completo"
                name='name'
                value={ name }
                onChange={ onRegisterInputChange }
                />
            </div>

            <div className="mb-3">
                <input
                type="text"
                className="form-control"
                placeholder="Numero de contacto"
                name='phone'
                value={ phone }
                onChange={ onRegisterInputChange }
                />
            </div>

            <div className="mb-3">
                <input
                type="text"
                className="form-control"
                placeholder="Direccion"
                name='address'
                value={ address }
                onChange={ onRegisterInputChange }
                />
            </div>

            <div className="mb-3">
                <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name='email'
                value={ email }
                onChange={ onRegisterInputChange }
                />
            </div>
            
            <div className="mb-3">
                <input
                type="password" 
                className="form-control"
                placeholder="Contraseña"
                name='password'
                value={ password }
                onChange={ onRegisterInputChange }
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
