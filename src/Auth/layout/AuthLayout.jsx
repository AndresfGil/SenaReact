import '../AuthStyles.css'

export const AuthLayout = ({ children }) => {
  return (
    <div className='main-container'>
        <div className='form-container'>

            {children}

        </div>
    </div>
  )
}
