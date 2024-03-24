import { useDisclosure } from '@nextui-org/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Todos from './pages/todos'
import Auth from './pages/auth'
import CustomNavbar from './components/navbar'
import ProtectedRoutes from './components/ProtectedRoutes'
import SignupModal from './components/SignupModal'
import { useState } from 'react'

function App ({ loading }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [toSignup, setToSignup] = useState()

  const handleOpenSignupModal = () => {
    setToSignup('signup')
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
        openSignupModal={handleOpenSignupModal}
      />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route index path='/' element={<Todos />} />
          </Route>
          <Route path='/auth' element={<Auth openSignupModal={handleOpenSignupModal} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
