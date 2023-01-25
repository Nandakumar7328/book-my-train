import {Route, Redirect} from 'react-router-dom'
const ProtectedRoute = props => {
    const getId = localStorage.getItem("ID")
  if (getId === null )  {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute