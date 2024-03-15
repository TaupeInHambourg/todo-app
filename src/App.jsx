import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Todos from './pages/todos'
import Auth from './pages/auth'
import CustomNavbar from './components/navbar'
import ProtectedRoutes from './components/ProtectedRoutes'

function App () {
  return (
    <>
      <CustomNavbar />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route index path='/' element={<Todos />} />
          </Route>
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
