import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from '@nextui-org/react'
import { useState } from 'react'
import { AcmeLogo } from './AcmeLogo.jsx'
import { useAuth } from '../hooks/authHooks.js'
import LoginButton from './buttons/Login.jsx'
import SignupButton from './buttons/Signup.jsx'

function CustomNavbar ({ openSignupModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { authData, logout } = useAuth()

  const isLoggedIn = authData?.token && authData?._user
  const handleLogout = (event) => {
    logout()
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='/'>
            Todos
          </Link>
        </NavbarItem>
      </NavbarContent>

      {
        isLoggedIn
          ? (
            <NavbarContent as='div' justify='end'>
              <Dropdown placement='bottom-end'>
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as='button'
                    className='transition-transform'
                    color='secondary'
                    name='Jason Hughes'
                    size='sm'
                    src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label='Profile Actions' variant='flat'>
                  <DropdownItem key='profile' className='h-14 gap-2'>
                    <p className='font-semibold'>Signed in as</p>
                    <p className='font-semibold'>zoey@example.com</p>
                  </DropdownItem>
                  <DropdownItem
                    key='logout'
                    color='danger'
                    onPress={handleLogout}
                  >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent>
            )
          : (
            <NavbarContent justify='end'>
              <NavbarItem className='lg:flex' isActive>
                <LoginButton />
              </NavbarItem>
              <NavbarItem>
                <SignupButton openSignupModal={openSignupModal} />
              </NavbarItem>
            </NavbarContent>
            )
      }

      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color='foreground'
            className='w-full'
            href='/'
            size='lg'
          >
            Todos
          </Link>
          <Link
            color='foreground'
            className='w-full'
            href='/auth'
            size='lg'
          >
            Auth
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>

  )
}

export default CustomNavbar
