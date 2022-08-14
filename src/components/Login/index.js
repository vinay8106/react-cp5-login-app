// Write your code here
import './index.css'

const Login = props => {
  const {logIn} = props

  return (
    <button type="button" onClick={logIn} className="login-button">
      Login
    </button>
  )
}

export default Login
