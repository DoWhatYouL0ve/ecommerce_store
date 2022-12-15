import { useEffect, useState } from 'react'

import { signOut, onAuthStateChanged } from 'firebase/auth'
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { auth } from '../../../firebase/config'
import { PATH } from '../../routes/PagesRoutes'

import { Cart } from './cart/Cart'
import { Logo } from './logo/Logo'
import { StyledHeader } from './styles/StyledHeader'

export const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [userName, setUserName] = useState<string | null>('')

  const navigate = useNavigate()

  const activeLink = ({ isActive }: any) => (isActive ? 'active' : '')

  // monitoring if any user is logged in or not
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid
        const emailName = user.email && user.email.split('@')[0]

        console.log(user)
        setUserName(user.displayName ? user.displayName : emailName)
      } else {
        setUserName('')
      }
    })
  }, [])

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const hideMenu = () => {
    setShowMenu(false)
  }

  const logoutUser = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setIsLoading(false)
        toast.success('Logout successfully')
        navigate(PATH.HOME_PAGE)
      })
      .catch(error => {
        setIsLoading(false)
        toast.error(error.message)
      })
  }

  return (
    <>
      <StyledHeader>
        <div className={'header'}>
          <Logo />
          <nav className={showMenu ? 'showNav' : 'hideNav'}>
            <div
              className={showMenu ? 'navWrapper' + ' ' + 'showNavWrapper' : 'navWrapper'}
              onClick={hideMenu}
            />
            <ul onClick={hideMenu}>
              <li className={'logoMobile'}>
                <Logo />
                <FaTimes onClick={hideMenu} size={22} color={'#fff'} />
              </li>
              <li>
                <NavLink to={PATH.HOME_PAGE} className={activeLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={PATH.CONTACT} className={activeLink}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className={'headerRight'} onClick={hideMenu}>
              <span className={'links'}>
                {userName ? (
                  <a href="#">
                    <FaUserCircle size={16} style={{ marginRight: '3px' }} />
                    Hi, {userName}!
                  </a>
                ) : (
                  <>
                    <NavLink to={PATH.LOGIN} className={activeLink}>
                      Login
                    </NavLink>
                    <NavLink to={PATH.REGISTRATION} className={activeLink}>
                      Register
                    </NavLink>
                  </>
                )}
                {userName && (
                  <>
                    <NavLink to={PATH.ORDER_HISTORY} className={activeLink}>
                      My Orders
                    </NavLink>
                    <NavLink to={PATH.HOME_PAGE} onClick={logoutUser} className={isActive => ''}>
                      Log out
                    </NavLink>
                  </>
                )}
              </span>
              {showMenu ? (
                <span>
                  <Cart />
                </span>
              ) : (
                <Cart />
              )}
            </div>
          </nav>
          <div className={'menuIcon'}>
            <Cart />
            <FaBars size={28} onClick={toggleMenu} />
          </div>
        </div>
      </StyledHeader>
    </>
  )
}
