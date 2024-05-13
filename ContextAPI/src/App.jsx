
import UserContextProvider from '../context/UserContextProvider'
import './App.css'
import Profile from './Components/Profile'
import Login from './Components/Login'

function App() {

  return (
    <UserContextProvider>
      <h1>React chai aur code</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
