import { Route, Routes } from 'react-router'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Login from './pages/Login'
function App() { 

  return (
    <>

         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/profile" element={<Profile/>} />
         </Routes>

    </>
  )
}

export default App
