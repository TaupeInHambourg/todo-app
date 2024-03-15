import { useDisclosure } from '@nextui-org/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Todos from './pages/todos'
import Auth from './pages/auth'
import CustomNavbar from './components/navbar'
import ProtectedRoutes from './components/ProtectedRoutes'
import { useState } from 'react'
import SignupModal from './components/SignupModal'

function App () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [toSignup, setToSignup] = useState()

  const handleOpenSignupModal = (e) => {
    setToSignup('isNotLog')
    onOpen()
  }

  return (
    <>
      <CustomNavbar
        openSignupModal={handleOpenSignupModal}
      />
      <SignupModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        toSignup={toSignup}
      />
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
