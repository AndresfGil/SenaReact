import { AuthLayout } from "../layout/AuthLayout"


export const RegisterPage = () => {
  return (
    <AuthLayout>
        
        <img width="120" height="120" src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/100/external-smart-house-internet-of-things-xnimrodx-lineal-gradient-xnimrodx-2.png" alt="external-smart-house-internet-of-things-xnimrodx-lineal-gradient-xnimrodx-2"/>
  
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
                <button
                className="btn-register"
                >¿Ya tienes una cuenta?</button>
            </div>

    </AuthLayout>
  )
}
