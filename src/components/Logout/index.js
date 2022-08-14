// Write your code here
import './index.css'

const Logout = props => {
  const {logOut} = props

  return (
    <button type="button" onClick={logOut} className="logout-button">
      Logout
    </button>
  )
}

export default Logout
