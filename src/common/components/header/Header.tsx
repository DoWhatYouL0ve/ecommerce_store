import { useEffect, useState } from 'react'

import { signOut, onAuthStateChanged } from 'firebase/auth'
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useAppDispatch, useAppSelector } from '../../../customHooks/appHooks'
import { auth } from '../../../firebase/config'
import { deleteActiveUser, setActiveUser, setIsLoading } from '../../../redux/slice/authSlice'
import { PATH } from '../../routes/PagesRoutes'
import { LoadingProcess } from '../loaders/Loader/Loader'

import { Cart } from './cart/Cart'
import { Logo } from './logo/Logo'
import { StyledHeader } from './styles/StyledHeader'

export const Header = () => {
  const userName = useAppSelector(store => store.auth.userName)
  const isLoggedIn = useAppSelector(store => store.auth.isLoggedIn)
  const isLoading = useAppSelector(store => store.auth.isLoading)

  const [showMenu, setShowMenu] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const activeLink = ({ isActive }: any) => (isActive ? 'active' : '')

  // monitoring if any user is logged in or not
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const emailName = user.email && user.email.split('@')[0]

        const userActiveName = user.displayName ? user.displayName : emailName

        dispatch(
          setActiveUser({
            email: user.email,
            userName: userActiveName,
            userID: user.uid,
          })
        )
      } else {
        dispatch(deleteActiveUser())
      }
    })
  }, [dispatch, userName])

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const hideMenu = () => {
    setShowMenu(false)
  }

  const logoutUser = () => {
    setIsLoading({ isLoading: true })
    signOut(auth)
      .then(() => {
        setIsLoading({ isLoading: false })
        toast.success('Logout successfully')
        navigate(PATH.HOME_PAGE)
      })
      .catch(error => {
        setIsLoading({ isLoading: false })
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
                {isLoggedIn ? (
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
                {isLoggedIn && (
                  <>
                    <NavLink to={PATH.ORDER_HISTORY} className={activeLink}>
                      My Orders
                    </NavLink>
                    <NavLink to={PATH.HOME_PAGE} onClick={logoutUser} className={() => ''}>
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
        {isLoading && <LoadingProcess />}
      </StyledHeader>
    </>
  )
}
