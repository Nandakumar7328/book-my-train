import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Account from './components/Account'
import AgentFull from './components/AgentFull'
import AgentOne from './components/AgentOne'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'
const App = () => (
  <>
  <Switch>
    <Route exact path='/login' component={Login}/>
    <ProtectedRoute exact path='/' component={Home}/>
    <ProtectedRoute exact path='/account' component={Account}/>
    <ProtectedRoute exact path='/agent-full' component={AgentFull}/>
    <ProtectedRoute exact path='/agent-one' component={AgentOne}/>
  </Switch>
  </>
)

export default App