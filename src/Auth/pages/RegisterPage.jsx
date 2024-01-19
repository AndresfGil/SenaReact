import { Link, Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../Hooks/useForm";


const registerFormFields = {
    registerName: '',
    registerPhone: '',
    registerAddress: '',
    registerEmail: '',
    registerPassword: '',
};



export const RegisterPage = () => {


    const { registerName, registerPhone, registerAddress, registerEmail, registerPassword, onInputChange:onRegisterInputChange } = useForm( registerFormFields );

    const registerSubmit = ( event ) => {
        event.preventDefault();
        console.log({
            registerName, 
            registerPhone, 
            registerAddress, 
            registerEmail, 
            registerPassword
        });
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
                name='registerName'
                value={ registerName }
                onChange={ onRegisterInputChange }
                />
            </div>

            <div className="mb-3">
                <input
                type="text"
                className="form-control"
                placeholder="Numero de contacto"
                name='registerPhone'
                value={ registerPhone }
                onChange={ onRegisterInputChange }
                />
            </div>

            <div className="mb-3">
                <input
                type="text"
                className="form-control"
                placeholder="Direccion"
                name='registerAddress'
                value={ registerAddress }
                onChange={ onRegisterInputChange }
                />
            </div>

            <div className="mb-3">
                <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name='registerEmail'
                value={ registerEmail }
                onChange={ onRegisterInputChange }
                />
            </div>
            
            <div className="mb-3">
                <input
                type="password" 
                className="form-control"
                placeholder="Contraseña"
                name='registerPassword'
                value={ registerPassword }
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
